let tower1 = [1, 2, 3, 4, 5, 6, 7, 8];
let tower2 = [];
let tower3 = [];
let space = 40;
let init_space = 5;


const drawItems = () => {
    let margin_bottom = init_space;
    document.querySelector("#tower1").innerHTML = "";
    document.querySelector("#tower2").innerHTML = "";
    document.querySelector("#tower3").innerHTML = "";
    if (tower1.length > 0) {
        tower1.reverse().forEach(ele => {
            let html = `<div class="item" id="item-${ele}" style="margin-bottom:${margin_bottom}px" onclick="getClickItemID(event)">${ele}</div>`;
            document.querySelector("#tower1").insertAdjacentHTML("beforeend", html);
            margin_bottom += space;
        })
        margin_bottom = init_space;
    }

    if (tower2.length > 0) {
        tower2.reverse().forEach(ele => {
            let html = `<div class="item" id="item-${ele}" style="margin-bottom:${margin_bottom}px" onclick="getClickItemID(event)">${ele}</div>`;
            document.querySelector("#tower2").insertAdjacentHTML("beforeend", html);
            margin_bottom += space;
        })
        margin_bottom = init_space;
    }

    if (tower3.length > 0) {
        tower3.reverse().forEach(ele => {
            let html = `<div class="item" id="item-${ele}" style="margin-bottom:${margin_bottom}px" onclick="getClickItemID(event)">${ele}</div>`;
            document.querySelector("#tower3").insertAdjacentHTML("beforeend", html);
            margin_bottom += space;
        })
        margin_bottom = init_space;
    }

    tower1.reverse();
    tower2.reverse();
    tower3.reverse();
}

drawItems();

const getClickItemID = (e) => {
    let id = e.target.id;
    let parent_ele_id = e.target.parentElement.id;
    let item = Number(id.split("-")[1]);

    removeClass('is-playing');
    addClass(id, 'is-playing');



    if (parent_ele_id === 'tower1') {
        // tower1.splice(tower1.indexOf(item), 1);
        // tower2.push(item);
        // drawItems()
    }
    // else if(parent_ele_id === 'tower2'){

    // }else{

    // }
    // console.log(`${parent_ele_id}`)
    // console.log("id=", position)
}

const addClass = (id, class_name) => {
    document.querySelector(`#${id}`).classList.add(class_name);
}

const removeClass = (class_name) => {
    let playing = document.querySelector(`.${class_name}`);
    if (playing) {
        playing.classList.remove(class_name);
    }
}