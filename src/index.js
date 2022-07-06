import _ from 'lodash';
import './style.css';

const items = [
  {
    description: 'Read books',
    completed: '0',
    index: 1,
  },
  {
    description: 'Wash dishes',
    completed: '1',
    index: 2,
  },
  {
    description: 'Cook food',
    completed: '1',
    index: 3,
  },
];

const lists = document.querySelector('.lists');

items.forEach((key) => {
  const li = document.createElement('li');
  li.classList.add('LiList', 'list-group-item');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('box');
  li.appendChild(checkbox);

  const label = document.createElement('label');
  li.appendChild(label);
  label.innerText = key.description;

  const dot = document.createElement('i');
  dot.classList.add('fa', 'fa-ellipsis-v');
  li.appendChild(dot);

  lists.appendChild(li);

  lists.key = key;
  return lists;
});
