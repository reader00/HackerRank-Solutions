'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'queensAttack' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER r_q
 *  4. INTEGER c_q
 *  5. 2D_INTEGER_ARRAY obstacles
 */

const isThereAWay = [true, true, true, true, true, true, true, true];
function queensAttack(n, k, r_q, c_q, obstacles) {
    // Write your code here
    // top, right-top, right, right-bottom, buttom, left-buttom, left, left-top
    
    const o_l = obstacles.length
    let count = 0;
    
    r_q -= 1;
    c_q -= 1;
    
    // r_q = r_q < (l_o-1)/2? (l-)
    
    obstacles = obstacles.map(e => [e[0]-1, e[1]-1]);
    // for(let i = 0; i < parseInt(o_l/2); i++){
    //     const temp = obstacles[i];
    //     obstacles[i] = obstacles[o_l - 1 - i];
    //     obstacles[o_l - 1 - i] = temp;
    // }
    
    for(let i = 1; i < n; i++){
        // top
        count += checkPoint(0, i, r_q, c_q, '<', false, n, obstacles, 't');
        
        // right-top
        count += checkPoint(1, i, r_q, c_q, '<', '>', n, obstacles, 'rt');
        
        
        // right
        count += checkPoint(2, i, r_q, c_q, false, '>', n, obstacles, 'r');
        
        
        // right-bottom
        count += checkPoint(3, i, r_q, c_q, '>', '>', n, obstacles, 'rb');
        
        
        // bottom
        count += checkPoint(4, i, r_q, c_q, '>', false, n, obstacles, 'b');
    
        
        // left-bottom
        count += checkPoint(5, i, r_q, c_q, '>', '<', n, obstacles, 'lb');
        
        
        // left
        count += checkPoint(6, i, r_q, c_q, false, '<', n, obstacles, 'l');
        
        
        // left-top
        count += checkPoint(7, i, r_q, c_q, '<', '<', n, obstacles, 'lt');
        
        console.log('-------');
    }

    return count;
}

const checkPoint = (index, i, r_q, c_q, r_rule=false, c_rule=false, n, obstacles, type) => {
    if(isThereAWay[index]){
        const r = cr(r_q, r_rule, i);
        const c = cr(c_q, c_rule, i);
        const r_check = cr_check(r, r_rule, n);
        const c_check = cr_check(c, c_rule, n);
        if(r_check || c_check || isObs(obstacles, r, c)){
            console.log('obs-' + type, isObs(obstacles, r, c));
            console.log('!' + type, r, c);
            isThereAWay[index] = false;
            return 0;
        }
        console.log(type, r, c);
        return 1;
    }
    return 0;
}

const cr_check = (cr, rule, n) => rule == false? false: rule == '<'? cr < 0 : cr >= n;
const cr = (cr, rule, i) => rule == false? cr: rule == '<'? cr - i : cr + i;

const isObs = (obstacles, r, c) => {
    return obstacles.find(e => e[0] == r && e[1] == c) !== undefined;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const secondMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const r_q = parseInt(secondMultipleInput[0], 10);

    const c_q = parseInt(secondMultipleInput[1], 10);

    let obstacles = Array(k);

    for (let i = 0; i < k; i++) {
        obstacles[i] = readLine().replace(/\s+$/g, '').split(' ').map(obstaclesTemp => parseInt(obstaclesTemp, 10));
    }

    const result = queensAttack(n, k, r_q, c_q, obstacles);

    ws.write(result + '\n');

    ws.end();
}
