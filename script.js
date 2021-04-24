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
        console.log("t1:", tower1)
        tower1.reverse().forEach(ele => {
            let html = `<div class="item" id="item-${ele}" style="margin-bottom:${margin_bottom}px" onclick="getClickItemID(event)">${ele}</div>`;
            document.querySelector("#tower1").insertAdjacentHTML("beforeend", html);
            margin_bottom += space;
        })
        margin_bottom = init_space;
        console.log("t111:", tower1)
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

    console.log("t1222:", tower1)
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
    }
}