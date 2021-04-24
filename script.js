let tower1 = [8, 7, 6, 5, 4, 3, 2, 1];
let tower2 = [];
let tower3 = [];
let space = 40;
let init_space = 5;
let num_of_moves = -1;


const drawItems = () => {
    let margin_bottom = init_space;
    num_of_moves += 1;
    document.querySelector("#tower1").innerHTML = "";
    document.querySelector("#tower2").innerHTML = "";
    document.querySelector("#tower3").innerHTML = "";

    if (tower1.length > 0) {
        tower1.forEach((ele, index) => {
            let html = `<div class="item" id="item-${ele}" style="margin-bottom:${margin_bottom}px">${ele}</div>`;
            let html2 = `<div class="item" id="item-${ele}" style="margin-bottom:${margin_bottom}px" onclick="getClickItemID(event)">${ele}</div>`;

            if (index === tower1.length - 1) {
                document.querySelector("#tower1").insertAdjacentHTML("beforeend", html2);
            } else {
                document.querySelector("#tower1").insertAdjacentHTML("beforeend", html);
            }
            margin_bottom += space;
        })
        margin_bottom = init_space;
    }

    if (tower2.length > 0) {
        tower2.forEach((ele, index) => {
            let html = `<div class="item" id="item-${ele}" style="margin-bottom:${margin_bottom}px">${ele}</div>`;
            let html2 = `<div class="item" id="item-${ele}" style="margin-bottom:${margin_bottom}px" onclick="getClickItemID(event)">${ele}</div>`;

            if (index === tower2.length - 1) {
                document.querySelector("#tower2").insertAdjacentHTML("beforeend", html2);
            } else {
                document.querySelector("#tower2").insertAdjacentHTML("beforeend", html);
            }
            margin_bottom += space;
        })
        margin_bottom = init_space;
    }

    if (tower3.length > 0) {
        tower3.forEach((ele, index) => {
            let html = `<div class="item" id="item-${ele}" style="margin-bottom:${margin_bottom}px">${ele}</div>`;
            let html2 = `<div class="item" id="item-${ele}" style="margin-bottom:${margin_bottom}px" onclick="getClickItemID(event)">${ele}</div>`;

            if (index === tower3.length - 1) {
                document.querySelector("#tower3").insertAdjacentHTML("beforeend", html2);
            } else {
                document.querySelector("#tower3").insertAdjacentHTML("beforeend", html);
            }
            margin_bottom += space;
        })
        margin_bottom = init_space;
    }

    console.log("Moves:", num_of_moves)
}

drawItems();

const getClickItemID = (e) => {
    let id = e.target.id;

    removeClass('is-playing');
    addClass(id, 'is-playing');
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

const selectToPlay = (e) => {
    let area_to_play = e.target.id;
    let playing = document.querySelector('.is-playing');

    if (playing) {
        let item = Number(playing.id.split("-")[1]);
        let parent_ele_id = playing.parentElement.id;

        if (parent_ele_id === 'tower1') {
            if (area_to_play === 'tower2') {
                if (tower2.length > 0) {
                    if (tower2[tower2.length - 1] > item) {
                        tower1.splice(tower1.indexOf(item), 1);
                        tower2.push(item);
                        removeClass('is-playing');
                        drawItems();
                    }
                } else {
                    tower1.splice(tower1.indexOf(item), 1);
                    tower2.push(item);
                    removeClass('is-playing');
                    drawItems();
                }
            } else if (area_to_play === 'tower3') {
                if (tower3.length > 0) {
                    if (tower3[tower3.length - 1] > item) {
                        tower1.splice(tower1.indexOf(item), 1);
                        tower3.push(item);
                        removeClass('is-playing');
                        drawItems();
                    }
                } else {
                    tower1.splice(tower1.indexOf(item), 1);
                    tower3.push(item);
                    removeClass('is-playing');
                    drawItems();
                }
            }
        } else if (parent_ele_id === 'tower2') {

            if (area_to_play === 'tower1') {
                if (tower1.length > 0) {
                    if (tower1[tower1.length - 1] > item) {
                        tower2.splice(tower2.indexOf(item), 1);
                        tower1.push(item);
                        removeClass('is-playing');
                        drawItems();
                    }
                } else {
                    tower2.splice(tower2.indexOf(item), 1);
                    tower1.push(item);
                    removeClass('is-playing');
                    drawItems();
                }

            } else if (area_to_play === 'tower3') {
                if (tower3.length > 0) {
                    if (tower3[tower3.length - 1] > item) {
                        tower2.splice(tower2.indexOf(item), 1);
                        tower3.push(item);
                        removeClass('is-playing');
                        drawItems();
                    }
                } else {
                    tower2.splice(tower2.indexOf(item), 1);
                    tower3.push(item);
                    removeClass('is-playing');
                    drawItems();
                }
            }

        } else if (parent_ele_id === 'tower3') {

            if (area_to_play === 'tower1') {
                if (tower1.length > 0) {
                    if (tower1[tower1.length - 1] > item) {
                        tower3.splice(tower3.indexOf(item), 1);
                        tower1.push(item);
                        removeClass('is-playing');
                        drawItems();
                    }
                } else {
                    tower3.splice(tower3.indexOf(item), 1);
                    tower1.push(item);
                    removeClass('is-playing');
                    drawItems();
                }

            } else if (area_to_play === 'tower2') {
                if (tower2.length > 0) {
                    if (tower2[tower2.length - 1] > item) {
                        tower3.splice(tower3.indexOf(item), 1);
                        tower2.push(item);
                        removeClass('is-playing');
                        drawItems();
                    }
                } else {
                    tower3.splice(tower3.indexOf(item), 1);
                    tower2.push(item);
                    removeClass('is-playing');
                    drawItems();
                }


            }
        }

        if (parent_ele_id === area_to_play) {
            removeClass('is-playing')
        }
    }
}