var btn = document.querySelector('#submit');
var input = document.querySelector('#input');
var ul = document.querySelector('ul');
var h1 = document.querySelector('h1');
var alert = document.querySelector('#alert');
var lists = document.querySelectorAll('li');
var deleteBtns = document.querySelectorAll('.delete');

btn.addEventListener("click", handleSubmit);

input.addEventListener("keypress", (event) => {
  if(event.which === 13) {
    handleSubmit();
  }
});

lists.forEach((li) => {
  li.addEventListener("click", () => {
      li.classList.toggle('done');
  });
});

deleteBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
      var li = btn.parentElement;
      li.remove();
  });
});


function handleSubmit() {
  if(input.value) {
    var li = document.createElement('li');
    var deletebtn = document.createElement('button');
    deletebtn.className = "delete";
    deletebtn.innerText = "X"
    li.innerText = input.value;
    li.append(deletebtn);
    ul.prepend(li);
    alert.className = 'green';
    alert.innerText = "Element added";
    input.value = "";
    setTimeout(()=> {
      alert.innerText= "";
    }, 2000);
    deletebtn.addEventListener("click", () => {
        var li = deletebtn.parentElement;
        li.remove();
    });
    li.addEventListener("click", () => {
        li.classList.toggle('done');
    });
  } else {
    alert.className= 'reds';
    alert.innerText = "You must enter an input";
  }
}
