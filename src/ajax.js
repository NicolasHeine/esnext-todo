function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

window.onload = function () {
  const ul = document.getElementById('list');
  const url = 'https://api.myjson.com/bins/9l2ez';
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      let elements = data.todos;
      return elements.map(function (element) {
        let li = createNode('li');
        if (element.complete) {
          li.classList += 'completed'
        }
        li.addEventListener("click", function(){
          this.classList.toggle("completed");
        });
        li.innerHTML = `${element.label}`;
        append(ul, li);
      })
    })
    .catch(function (error) {
      console.log(error);
    });
}