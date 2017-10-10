'use strict';

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

window.onload = function () {
  var ul = document.getElementById('list');
  var url = 'https://api.myjson.com/bins/9l2ez';
  fetch(url).then(function (resp) {
    return resp.json();
  }).then(function (data) {
    var elements = data.todos;
    return elements.map(function (element) {
      var li = createNode('li');
      if (element.complete) {
        li.classList += 'completed';
      }
      li.addEventListener("click", function () {
        this.classList.toggle("completed");
      });
      li.innerHTML = '' + element.label;
      append(ul, li);
    });
  }).catch(function (error) {
    console.log(error);
  });
};