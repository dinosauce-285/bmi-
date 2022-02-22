let user = document.getElementById("name");
let a = document.getElementById("w");
let b = document.getElementById("h");
let body = document.getElementById("container");
let cmt = document.getElementById("comment");

let button = document.getElementById("btn");
function bmi() {
  if (a.value / (b.value * b.value) <= 18.5) {
    body.style.backgroundImage = "url('thin.webp')";
    body.style.backgroundPosition = "top";

    cmt.innerHTML = `<h1 id="comment">thằng ${user.value} ốm vc</h1>
  `;
  }
  if (
    a.value / (b.value * b.value) > 18.5 &&
    a.value / (b.value * b.value) <= 24.9
  ) {
    body.style.backgroundImage = "url('nice.jpg')";
    cmt.innerHTML = `<h1 id="comment">thằng ${user.value} cũng cân đối đó ku</h1>`;
  }
  if (a.value / (b.value * b.value) >= 25) {
    body.style.backgroundImage = "url('fat.jpg')";
    body.style.backgroundPosition = "center";
    body.style.backgroundSize = "cover";
    cmt.innerHTML = `<h1 id="comment">thằng ${user.value} là 1 con heo siêu đù </h1>`;
  }
}
button.onclick = bmi;
