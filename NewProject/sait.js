let input1 = document.querySelector('.inp1');
let input2 = document.querySelector('.inp2');
let button = document.querySelector('.btn');
let p = document.querySelector('.p')

button.onclick = () =>{
    p.innerHTML = Number(input1.value) + Number(input2.value)
    
}