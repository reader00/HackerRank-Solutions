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
    // Write your code here
    const isThereAWay = [true, true, true, true, true, true, true, true];
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
    console.log(obstacles);
    console.log("\n///////////\n");
    
    for(let i = 1; i < n; i++){
        // top
        if(isThereAWay[0]){
            let r = r_q - i;
            let c = c_q;
            if(r < 0 || isObs(obstacles, r, c)){
                console.log('!t-obs', isObs(obstacles, r, c));
                console.log('!t', r, c);
                isThereAWay[0] = false;
            }else{
                console.log('t', r, c);
                count++;
            }
        }
        
        // right-top
        if(isThereAWay[1]){
            let r = r_q - i;
            let c = c_q + i;
            if(r < 0 || c >= n || isObs(obstacles, r, c)){
                console.log('!rt-obs', isObs(obstacles, r, c));
                console.log('!rt', r, c);
                isThereAWay[1] = false;
            }else{
                console.log('rt', r, c);
                count++;
            }
        }
        
        // right
        if(isThereAWay[2]){
            let r = r_q;
            let c = c_q + i;
            if(c >= n || isObs(obstacles, r, c)){
                console.log('!r-obs', isObs(obstacles, r, c));
                console.log('!r', r, c);
                isThereAWay[2] = false;
            }else{
                console.log('r', r, c);
                count++;
            }
        }
        
        // right-bottom
        if(isThereAWay[3]){
            let r = r_q + i;
            let c = c_q + i;
            if(c >= n || r >= n || isObs(obstacles, r, c)){
                console.log('!rb-obs', isObs(obstacles, r, c));
                console.log('!rb', r, c);
                isThereAWay[3] = false;
            }else{
                console.log('rb', r, c);
                count++;
            }
        }
        
        // bottom
        if(isThereAWay[4]){
            let r = r_q + i;
            let c = c_q;
            if(r >= n || isObs(obstacles, r, c)){
                console.log('!b-obs', isObs(obstacles, r, c));
                console.log('!b', r, c);
                isThereAWay[4] = false;
            }else{
                console.log('b', r, c);
                count++;
            }
        }
        
        // left-bottom
        if(isThereAWay[5]){
            let r = r_q + i;
            let c = c_q - i;
            if(r >= n || c < 0 || isObs(obstacles, r, c)){
                console.log('!lb-obs', isObs(obstacles, r, c));
                console.log('!lb', r, c);
                isThereAWay[5] = false;
            }else{
                console.log('lb', r, c);
                count++;
            }
        }
        
        // left
        if(isThereAWay[6]){
            let r = r_q;
            let c = c_q - i;
            if(c < 0 || isObs(obstacles, r, c)){
                console.log('!l-obs', isObs(obstacles, r, c));
                console.log('!l', r, c);
                isThereAWay[6] = false;
            }else{
                console.log('l', r, c);
                count++;
            }
        }
        
        // left-top
        if(isThereAWay[7]){
            let r = r_q - i;
            let c = c_q - i;
            if(c < 0 || r < 0 || isObs(obstacles, r, c)){
                console.log('!lt-obs', isObs(obstacles, r, c));
                console.log('!lt', r, c);
                isThereAWay[7] = false;
            }else{
                console.log('lt', r, c);
                count++;
            }
        }
        console.log('-------');
    }

    return count;
}

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
