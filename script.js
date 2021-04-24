let tower1 = [1, 2, 3, 4];
let tower2 = [];
let tower3 = [];

tower1.forEach((ele, index) => {
    let html = `<div class="item" id="item${index+1}">${ele}</div>`;
    document.querySelector("#tower1").insertAdjacentHTML("beforeend", html);
})