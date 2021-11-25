// static int queensAttack(int n, int k, int r_q, int c_q, int[][] obstacles) {
// r_q = r_q - 1;
// c_q = c_q - 1;
// int temp;
// int result = 0;
// String a = "";
// int[] queen = {r_q, c_q};

// // Row, Col, Length
// int[] top = {0, c_q, r_q};
// int[] bottom = {n - 1, c_q, n - 1 - r_q};
// int[] left = {r_q, 0, c_q};
// int[] right = {r_q, n - 1, n - 1 - c_q};
// int[] lTop = top[2] < left[2]? new int[]{r_q - top[2], c_q - top[2], top[2]}:
// new int[]{r_q - left[2], c_q - left[2], left[2]};
// int[] rTop = top[2] < right[2]? new int[]{r_q - top[2], c_q - top[2],
// top[2]}: new int[]{r_q - right[2], c_q - right[2], right[2]};
// int[] lBottom = bottom[2] < left[2]? new int[]{r_q + bottom[2], c_q +
// bottom[2], bottom[2]} : new int[]{r_q + left[2], c_q + left[2], left[2]};
// int[] rBottom = bottom[2] < right[2]? new int[]{r_q + bottom[2], c_q +
// bottom[2], bottom[2]} : new int[]{r_q + right[2], c_q + right[2], right[2]};

// boolean[] condition = {true, true, true, true, true, true, true, true};

// // Re Obstacles
// for(int i = 0; i < k; i++){
// for(int j = 0; j < 2; j++){
// obstacles[i][j]--;
// }
// }

// // Obstacles
// if(k != 0){
// // Top
// for(int j = 1; j <= top[2]; j++){ // 3
// temp = 0;
// for(int i = 0; i < k; i++){ // 3 - 55f 42f 23t
// if(condition[0]){ // true
// if(r_q - j == obstacles[i][0] && c_q == obstacles[i][1]){ // 43
// condition[0] = false;
// break;
// } else{
// temp++; // 1 1 1 | 1 1 0
// }
// }
// }
// if(temp == k){
// result++; // 1 0
// } else{
// break;
// }
// }

// // Right
// for(int j = 1; j <= right[2]; j++){ // 2
// temp = 0;
// for(int i = 0; i < k; i++){ // 3 - 55f 42f 23f
// if(condition[1]){
// if(c_q + j == obstacles[i][1] && r_q == obstacles[i][0]){ // 43
// condition[1] = false;
// break;
// } else{
// temp++; // 1 1 1 1 | 1 1 1 1
// }
// }
// }
// if(temp == k){
// result++; // 1 1
// } else{
// break;
// }
// }

// // Bottom
// for(int j = 1; j <= bottom[2]; j++){ // 1
// temp = 0;
// for(int i = 0; i < k; i++){ // 3 - 55f 42f 23f
// if(condition[2]){
// if(r_q + j == obstacles[i][0] && c_q == obstacles[i][1]){ // 43
// condition[2] = false;
// break;
// } else{
// temp++; // 1 1 1 1
// }
// }
// }
// if(temp == k){
// result++; // 1
// } else{
// break;
// }
// }

// // Left
// for(int j = 1; j <= left[2]; j++){ // 2
// temp = 0;
// for(int i = 0; i < k; i++){ // 3 - 55f 42t
// if(condition[3]){
// if(c_q - j == obstacles[i][1] && r_q == obstacles[i][0]){ //43
// condition[3] = false;
// break;
// } else{
// temp++; // 1 0
// }
// }
// }
// if(temp == k){
// result++; // 0
// } else{
// break;
// }
// }

// // Left Top
// for(int j = 1; j <= lTop[2]; j++){ // 2
// temp = 0;
// for(int i = 0; i < k; i++){ // 3 - 55f 42f 23f
// if(condition[4]){
// if(r_q - j == obstacles[i][0] && c_q - 1 == obstacles[i][1]){//43
// condition[4] = false;
// break;
// } else{
// temp++; // 1 1 1 || 1 1 1
// }
// }
// }
// if(temp == k){
// result++; // 1 1
// } else{
// break;
// }
// }

// // Right Top
// for(int j = 1; j <= rTop[2]; j++){ // 2
// temp = 0;
// for(int i = 0; i < k; i++){ // 3 - 55f 42f 23f
// if(condition[5]){
// if(r_q - j == obstacles[i][0] && c_q + 1 == obstacles[i][1]){//43
// condition[5] = false;
// break;
// } else{
// temp++; // 1 1 1 | 1 1 1
// }
// }
// }
// if(temp == k){
// result++; // 1 1
// } else{
// break;
// }
// }

// // Bottom Right
// for(int j = 1; j <= rBottom[2]; j++){ // 1
// temp = 0;
// for(int i = 0; i < k; i++){ // 3 - 55f 42f 23f
// if(condition[6]){
// if(r_q + j == obstacles[i][0] && c_q + 1 == obstacles[i][1]){//43
// condition[6] = false;
// break;
// } else{
// temp++; // 1 1 1
// }

// }
// }
// if(temp == k){
// result++; // 1
// } else{
// break;
// }
// }

// // Bottom Left
// for(int j = 1; j <= lBottom[2]; j++){ // 1
// temp = 0;
// for(int i = 0; i < k; i++){ // 3 - 55f 42f 23f
// if(condition[7]){
// if(r_q + j == obstacles[i][0] && c_q - 1 == obstacles[i][1]){//43
// condition[7] = false;
// break;
// } else{
// temp++; // 1 1 1
// }
// }
// }
// if(temp == k){
// result++; // 1
// } else{
// break;
// }
// }
// } else{
// result += top[2] + right[2] + bottom[2] + left[2] +lTop[2] + rTop[2]
// +rBottom[2] + lBottom[2];
// }

// return (result);
// }