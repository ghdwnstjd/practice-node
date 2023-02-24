// // 이렇게 쓰던 것을 아래처럼 바꿀 수 있다.
// // * require 함수는 노드에서 제공해줌
// const value = require('./var');
// const odd= value.odd;
// const even = value.even;

// 이렇게
const {odd, even } = require('./var');

function checkOddOrEven(number){
    if(number%2){
        return odd;
    } else {
        return even;
    }
}

// 다른 곳으로 내보내기도 가능

// 한 개만 내보낼 때
module.exports = checkOddOrEven;

// // 여러 개를 내보낼 때
// module.exports = {
//     checkOddOrEven,
//     odd,
//     even,
// };