var btn = document.querySelector('#submit');
var input = document.querySelector('#input');
var ul = document.querySelector('ul');
var h1 = document.querySelector('h1');
var alert = document.querySelector('#alert');

btn.addEventListener("click", handleSubmit);

input.addEventListener("keypress", (event) => {
  if(event.which === 13) {
    handleSubmit();
  }
});

function handleSubmit() {
  if(input.value) {
    var li = document.createElement('li');
    li.innerText = input.value;
    ul.prepend(li);
    alert.className = 'green';
    alert.innerText = "Element added";
    input.value = "";
    setTimeout(()=> {
      alert.innerText= "";
    }, 2000);
  } else {
    alert.className= 'reds';
    alert.innerText = "You must enter an input";
  }
}
