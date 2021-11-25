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
let gObstacles;
const isThereAWay = [true, true, true, true, true, true, true, true];
function queensAttack(n, k, r_q, c_q, obstacles) {
    
    if(obstacles.length < n){
        
        const max = [r_q-1, Math.min(r_q-1, n-c_q), n-c_q, Math.min(n-r_q, n-c_q), n-r_q, Math.min(n-r_q, c_q-1), c_q-1, Math.min(r_q-1, c_q-1)];
        
        console.log(max);
        for(let i = 0; i < obstacles.length; i++){
            let r = obstacles[i][0];
            let c = obstacles[i][1];
            console.log(r,c);
            
            const rqmr = r_q-r-1;  // r_q minus r
            const cmcq = c-c_q-1;
            const rmrq = r-r_q-1;
            const cqmc = c_q-c-1;
            
            // Top
            if(c == c_q && rqmr < max[0] && rqmr >= 0){
                console.log(true);
                max[0] = rqmr;
            }
            console.log('t:rq-r', rqmr);
            
            // Top-Right
            if(rqmr == cmcq && cmcq < max[1] && cmcq >= 0){
                console.log(true);
                max[1] = cmcq;
            }
            console.log('tr:c-cq', cmcq);
            
            // Right
            if(r == r_q && cmcq < max[2] && cmcq >= 0){
                console.log(true);
                max[2] = cmcq;
            }
            console.log('r:c-cq', cmcq);
            
            // Bottom-Right
            if(rmrq == cmcq && rmrq < max[3] && rmrq >= 0){
                max[3] = rmrq;
            }
            console.log('br:r-rq', rmrq);
            
            // Bottom
            if(c == c_q && rmrq < max[4] && rmrq >= 0){
                max[4] = rmrq;
            }
            console.log('b:r-rq', rmrq);
            
            // Bttom-Left
            if(cqmc == rmrq && cqmc < max[5] && cqmc >= 0){
                max[5] = cqmc;
            }
            console.log('bl:cq-c', cqmc);
            
            // Left
            if(r == r_q && cqmc < max[6] && cqmc >= 0){
                max[6] = cqmc
            }
            console.log('l:cq-c', cqmc);
            
            // Top-Left
            if(cqmc == rqmr && rqmr < max[7] && rqmr >= 0){
                console.log(true);
                max[7] = rqmr
            }
            console.log('tl: rq-r', rqmr);
            
            console.log('--------------');
            console.log(max);        
            console.log('--------------');
        }

        return max.reduce((q, aq) => q + aq);
    }else{
        gObstacles = obstacles;
        
        // top
        let top = r_q-1;
        top = getPoint(top, r_q, c_q, 'r_q - i', 'c_q', 't');
        
        // right-top
        let right_top = Math.min(r_q-1, n-c_q);
        right_top = getPoint(right_top, r_q, c_q, 'r_q - i', 'c_q + i', 'rt');
        
        // right
        let right = n-c_q;
        right = getPoint(right, r_q, c_q, 'r_q', 'c_q + i', 'r');
        
        // right-bottom
        let right_bottom = Math.min(n-r_q, n-c_q);
        right_bottom = getPoint(right_bottom, r_q, c_q, 'r_q + i', 'c_q + i', 'rb');
        
        // bottom
        let bottom = n-r_q;
        bottom = getPoint(bottom, r_q, c_q, 'r_q + i', 'c_q', 'b');
        
        // left-bottom
        let left_bottom = Math.min(n-r_q, c_q-1);
        left_bottom = getPoint(left_bottom, r_q, c_q, 'r_q + i', 'c_q - i', 'lb');
        
        // left
        let left = c_q - 1;
        left = getPoint(left, r_q, c_q, 'r_q', 'c_q - i', 'l');
        
        // top-left
        let left_top = Math.min(r_q - 1, c_q - 1);
        left_top = getPoint(left_top, r_q, c_q, 'r_q - i', 'c_q - i', 'lt');

        return top + right_top + right + right_bottom + bottom + left_bottom + left + left_top;   
    }
}

const getPoint = (d_val, r_q, c_q, r_rule, c_rule, type) => {
    let count = 0;
    for(let i = 1; i <= d_val; i++){
        console.log('rule', r_rule, c_rule);
        console.log(type, eval(r_rule), eval(c_rule))
        if(isObs(eval(r_rule), eval(c_rule))){
            break;
        }
        count += 1;
    }
    console.log(type, "======", count);
    console.log('-------------')
    return count;
}

const isObs = (r, c) => {
    return gObstacles.find(e => e[0] == r && e[1] == c) !== undefined;
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
