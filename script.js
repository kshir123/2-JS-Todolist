const inputBox = document.getElementById('inputBox');
const listContainer = document.getElementById('listContainer');
const add_btn = document.getElementById('add_btn');


function addTask() {
  if(inputBox.value === '') {
    alert('You must enterd something !')
  } else {
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  inputBox.value ='';
  saveData();
}

function removeTask(event){
  if(event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
    saveData();
  } else if(event.target.tagName == 'SPAN') {
    event.target.parentElement.remove();
    saveData();
  }
}

function saveData() {
  localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem('data');
}


add_btn.addEventListener('click', ()=> {
  addTask();
})

listContainer.addEventListener('click',(event)=>{
  removeTask(event)
})

showTask();
