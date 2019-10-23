import {message} from './AlphabetInvasionGame.js';
import { mapTo} from 'rxjs/operators';
import {interval, timer,merge,concat} from 'rxjs'; 

const first = timer(1000).pipe(mapTo('FIRST'));
const second = timer(1000).pipe(mapTo('SECOND'));
const third = timer(1000).pipe(mapTo('THIRD'));
const fourth = timer(1000).pipe(mapTo('FOURTH'));

const example = concat(
    first,
    second,
    third,
    fourth
  );

  example.subscribe(replaceItem);



function addItem(val) {
    const node = document.createElement('li');
    const textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById('output').appendChild(node);
}

function replaceItem(val) {
    // const node = document.createElement('li');
    // const textNode = document.createTextNode(val);
    // node.appendChild(textNode);
    document.getElementById('output').innerHTML = `<li>${val}</li>`
}

addItem("This is it!!");
