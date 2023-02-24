// 전역 스코프의 this만 global이 아닌 module.exports 이다.

console.log(this); // global X
console.log(this === module.exports);

function a(){
    console.log(this === global);  // global O
}

a();