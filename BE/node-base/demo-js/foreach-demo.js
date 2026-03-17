const arr = [1,2,3,4,5]


//객체(또는 배열)에서 요소를 하나 꺼낸 다음
//매개변수로 그 요소를 전달하여 호출되는 콜백함수 
arr.forEach(function(a, b, c){
    //console.log(`a: ${a}, b: ${b}, c : ${c}`)
})

// Map과 foreach의 만남
let map = new Map()
map.set(1, "sevent")
map.set(2,"nine")
map.set(3,"eight")

map.forEach(function(a, b, c) {
    console.log(`a : ${a}, b : ${b}, c : ${c}`)
})