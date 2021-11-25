let order = [1, 2, 3, 6, 9, 8, 7, 4];

const rotate = () => {
    const last = order.pop();
    const newArray = order.slice();
    newArray.unshift(last);
    order = [...newArray];

    const place = {
        1: order[0],
        2: order[1],
        3: order[2],
        4: order[7],
        6: order[3],
        7: order[6],
        8: order[5],
        9: order[4],
    };
    for (let i in place) {
        const el = document.getElementById('btn' + i);
        el.innerHTML = place[i];
    }
};

const btn5 = document.getElementById('btn5');
btn5.addEventListener('click', rotate);
