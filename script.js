let tower1 = [];
let tower2 = [];
let tower3 = [];
let space = 40;
let init_space = 5;
let num_of_moves = -1;

document.querySelector("#start-btn").addEventListener('click', (e) => {
    let num_selected = document.querySelector("#select-num").value;

    if (num_selected > 0) {
        hideSection("selection-section");
        showSection("game-board");

        for (let i = num_selected; i > 0; i--) {
            tower1.push(i);
        }
        drawItems(tower1);
    }
})

const hideSection = (ele_id) => {
    document.querySelector(`#${ele_id}`).style = "display: none";
}

const showSection = (ele_id) => {
    document.querySelector(`#${ele_id}`).style = "display: block";
}

const drawItems = (items) => {
    let margin_bottom = init_space;
    num_of_moves += 1;
    document.querySelector("#tower1").innerHTML = "";
    document.querySelector("#tower2").innerHTML = "";
    document.querySelector("#tower3").innerHTML = "";
    document.querySelector("#moves").innerHTML = num_of_moves;

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
                        drawItems(tower1);
                    }
                } else {
                    tower1.splice(tower1.indexOf(item), 1);
                    tower2.push(item);
                    removeClass('is-playing');
                    drawItems(tower1);
                }
            } else if (area_to_play === 'tower3') {
                if (tower3.length > 0) {
                    if (tower3[tower3.length - 1] > item) {
                        tower1.splice(tower1.indexOf(item), 1);
                        tower3.push(item);
                        removeClass('is-playing');
                        drawItems(tower1);
                    }
                } else {
                    tower1.splice(tower1.indexOf(item), 1);
                    tower3.push(item);
                    removeClass('is-playing');
                    drawItems(tower1);
                }
            }
        } else if (parent_ele_id === 'tower2') {

            if (area_to_play === 'tower1') {
                if (tower1.length > 0) {
                    if (tower1[tower1.length - 1] > item) {
                        tower2.splice(tower2.indexOf(item), 1);
                        tower1.push(item);
                        removeClass('is-playing');
                        drawItems(tower1);
                    }
                } else {
                    tower2.splice(tower2.indexOf(item), 1);
                    tower1.push(item);
                    removeClass('is-playing');
                    drawItems(tower1);
                }

            } else if (area_to_play === 'tower3') {
                if (tower3.length > 0) {
                    if (tower3[tower3.length - 1] > item) {
                        tower2.splice(tower2.indexOf(item), 1);
                        tower3.push(item);
                        removeClass('is-playing');
                        drawItems(tower1);
                    }
                } else {
                    tower2.splice(tower2.indexOf(item), 1);
                    tower3.push(item);
                    removeClass('is-playing');
                    drawItems(tower1);
                }
            }

        } else if (parent_ele_id === 'tower3') {

            if (area_to_play === 'tower1') {
                if (tower1.length > 0) {
                    if (tower1[tower1.length - 1] > item) {
                        tower3.splice(tower3.indexOf(item), 1);
                        tower1.push(item);
                        removeClass('is-playing');
                        drawItems(tower1);
                    }
                } else {
                    tower3.splice(tower3.indexOf(item), 1);
                    tower1.push(item);
                    removeClass('is-playing');
                    drawItems(tower1);
                }

            } else if (area_to_play === 'tower2') {
                if (tower2.length > 0) {
                    if (tower2[tower2.length - 1] > item) {
                        tower3.splice(tower3.indexOf(item), 1);
                        tower2.push(item);
                        removeClass('is-playing');
                        drawItems(tower1);
                    }
                } else {
                    tower3.splice(tower3.indexOf(item), 1);
                    tower2.push(item);
                    removeClass('is-playing');
                    drawItems(tower1);
                }


            }
        }

        if (parent_ele_id === area_to_play) {
            removeClass('is-playing')
        }
    }
}

let target_num = 4;
let target_pole = 3;

let t1_last_num = t2_last_num = t3_last_num = 0;

const solver = () => {
    console.log(getLastNumber(tower1))
    t1_last_num = getLastNumber(tower1);
    t2_last_num = getLastNumber(tower2);
    t3_last_num = getLastNumber(tower3);

    if (target_num % 2 === 0) {
        if (target_pole === 2) {
            initMove(getLastNumber(tower1), tower1, tower3);
            initMove(getLastNumber(tower1), tower1, tower2);
        } else {
            initMove(getLastNumber(tower1), tower1, tower2);
            initMove(getLastNumber(tower1), tower1, tower3);
        }
    } else {

    }
}

const getLastNumber = (tower) => {
    return (tower[tower1.length - 1]);
}

const initMove = (num, from, to) => {
    from.splice(from.indexOf(num));
    to.push(num);
    drawItems(tower1);
}

// solver();