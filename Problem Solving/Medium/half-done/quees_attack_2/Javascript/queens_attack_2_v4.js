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

function queensAttack(n, k, r_q, c_q, obstacles) {
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
