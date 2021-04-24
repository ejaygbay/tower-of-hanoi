let tower1 = [1, 2, 3, 4, 5, 6, 7, 8];
let tower2 = [];
let tower3 = [];
let space = 40;
let init_space = 5;


const drawItems = () => {
    let margin_bottom = init_space;
    if (tower1.length > 0) {
        tower1.reverse().forEach(ele => {
            let html = `<div class="item" id="item${ele}" style="margin-bottom:${margin_bottom}px">${ele}</div>`;
            document.querySelector("#tower1").insertAdjacentHTML("beforeend", html);
            margin_bottom += space;
        })
        margin_bottom = init_space;
    }

    if (tower2.length > 0) {
        tower2.reverse().forEach(ele => {
            let html = `<div class="item" id="item${ele}" style="margin-bottom:${margin_bottom}px">${ele}</div>`;
            document.querySelector("#tower2").insertAdjacentHTML("beforeend", html);
            margin_bottom += space;
        })
        margin_bottom = init_space;
    }

    if (tower3.length > 0) {
        tower3.reverse().forEach(ele => {
            let html = `<div class="item" id="item${ele}" style="margin-bottom:${margin_bottom}px">${ele}</div>`;
            document.querySelector("#tower3").insertAdjacentHTML("beforeend", html);
            margin_bottom += space;
        })
        margin_bottom = init_space;
    }
}

drawItems()