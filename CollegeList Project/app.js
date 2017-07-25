const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.dreamCollegeList');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionbutton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');

const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
const listItems = document.getElementsByTagName('li'); //access the first list items

const lis = listUl.children;




function attachListItemButtons (li) {
  let up = document.createElement('button');
  up.className = 'up';
  up.textContent = 'up';
  li.appendChild(up);
  let down = document.createElement('button');
  down.className = 'down';
  down.textContent = 'down';
  li.appendChild(down);
  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'remove';
  li.appendChild(remove);
}


for (let i = 0; i < lis.length; i++){
  attachListItemButtons(lis[i]);
}

listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    if (event.target.className == 'remove'){
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
        }
    if (event.target.className == 'up'){
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      ul.insertBefore(li, prevLi);
        }
    if (event.target.className == "down"){
      let li = event.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      ul.insertBefore(nextLi, li);

    }
  }

});



descriptionbutton.addEventListener('click', () => {
     descriptionP.innerHTML = descriptionInput.value + ':';
    descriptionInput.value  = '';
                                   });


addItemButton.addEventListener('click', () => {
let ul = document.getElementsByTagName('ul')[0];
let li = document.createElement('li');
li.textContent = addItemInput.value;
attachListItemButtons(li);
ul.appendChild(li);
addItemInput.value = '';

});


removeItemButton.addEventListener('click', () => {
      let ul = document.getElementsByTagName('ul')[0];
      let li = document.querySelector('li:last-child');
ul.removeChild(li);
addItemInput.value = '';

});
