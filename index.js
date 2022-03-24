let carWash = document.getElementById('car-wash');
let mowLawn = document.getElementById('mow-lawn');
let pullWeeds = document.getElementById('pull-weeds');
let tasks = document.getElementById('tasks');
let sendBtn = document.getElementById('send-btn');
let totalPrice = document.getElementById('total-price');
let arrayForAdding = [];
let holderArray = [
  {
    name: 'Car Wash',
    price: 10,
  },

  {
    name: 'Mow Lawn',
    price: 20,
  },

  {
    name: 'Pull Weeds',
    price: 30,
  },
];

function sum() {
  let sum = 0;
  for (let i = 0; i < arrayForAdding.length; i++) {
    sum += arrayForAdding[i].price;
  }
  totalPrice.innerHTML = `$${sum}`;
}

function printing(arrElement) {
  if (arrayForAdding.indexOf(arrElement) == -1) {
    let service = document.createElement('div');
    service.classList.add('task');
    service.innerHTML = `<h4>${arrElement.name}</h4></div><h5>$${arrElement.price}</h5>`;
    tasks.appendChild(service);
    arrayForAdding.push(arrElement);
    sum();
  }
}

function clear(task) {
  let NotesEl = document.getElementById('notes-input');
  NotesEl.value = '';
  arrayForAdding = [];
  document.querySelectorAll(task).forEach((el) => el.remove());
  totalPrice.innerHTML = `$0`;
}

carWash.addEventListener('click', () => printing(holderArray[0]));
mowLawn.addEventListener('click', () => printing(holderArray[1]));
pullWeeds.addEventListener('click', () => printing(holderArray[2]));
sendBtn.addEventListener('click', () => clear('.task'));
