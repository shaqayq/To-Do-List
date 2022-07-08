import _, { reduce } from 'lodash';
import './style.css';
import { checked, clearChecked } from './update.js';

let doLists = [];

const newItem = document.querySelector('.newItem');
const lists = document.querySelector('.lists');

// check local storage is avilable
function checklocal() {
  if (localStorage.getItem('Do-Lists')) {
    doLists = JSON.parse(localStorage.getItem('Do-Lists'));
  } else {
    localStorage.setItem('Do-Lists', JSON.stringify(doLists));
  }
}

checklocal();

// add new tasks
newItem.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const num = doLists.length;
    const item = document.querySelector('.newItem').value;
    doLists.push({ description: item, completed: false, index: num });
    localStorage.setItem('Do-Lists', JSON.stringify(doLists));
    window.location.reload();
  }
});

// Create lists
const newEle = JSON.parse(localStorage.getItem('Do-Lists'));
doLists = newEle;
doLists.forEach((key) => {
  const li = document.createElement('li');
  li.classList.add('LiList', 'list-group-item');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('box');
  checkbox.setAttribute('id', key.index);
  if (key.completed == true) {
    checkbox.checked = true;
  }
  li.appendChild(checkbox);

  const label = document.createElement('input');
  label.disabled = 'disabled';
  label.classList.add('label');
  li.appendChild(label);
  label.value = key.description;

  const dot = document.createElement('i');
  dot.classList.add('fa', 'fa-ellipsis-v', 'fun');
  dot.setAttribute('id', key.index);
  li.appendChild(dot);

  lists.appendChild(li);

  lists.key = key;
  return lists;
});

// click for Update and Delete

const funbtn = document.querySelectorAll('.fun');

funbtn.forEach((ele) => {
  ele.addEventListener('click', () => {
    const { id } = ele;
    const parentli = ele.closest('.LiList');
    parentli.style.background = '#8daddd';

    // Update
    const inputName = ele.previousSibling;
    inputName.style.background = '#8daddd';
    inputName.disabled = '';
    inputName.focus();
    inputName.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        const newData = inputName.value;
        doLists[id].description = newData;
        localStorage.setItem('Do-Lists', JSON.stringify(doLists));
        window.location.reload();
      }
    });

    ele.remove();

    const trash = document.createElement('i');
    trash.classList.add('fa', 'fa-trash', 'delete');
    trash.setAttribute('id', id);
    parentli.appendChild(trash);

    // remove element
    trash.addEventListener('click', () => {
      const newLists = doLists.filter((e) => e.index != id);
      for (let i = 0; i < newLists.length; i += 1) {
        newLists[i].index = i;
      }
      localStorage.setItem('Do-Lists', JSON.stringify(newLists));
      window.location.reload();
    });
  });
});

// remove all
const clear = document.querySelector('.clearAll');
clear.addEventListener('click', () => {
  clearChecked(doLists);
});

const check = document.querySelectorAll('.box');

check.forEach((ele) => {
  ele.addEventListener('click', () => {
    checked(ele, doLists);
  });
});