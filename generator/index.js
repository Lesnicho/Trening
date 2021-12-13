let input1 = document.querySelector('.input1')
let input2 = document.querySelector('.input2')
let button = document.querySelector('.btn')
let p = document.querySelector('p')

let min; 
let max; 

button.onclick = () => {
    if(input1.value === '' || input2.value === '' ){
        min = '0';
        max = '1000';
    } else{
        min = input1.value;
        max = input2.value;
    }

    fetch('http://f0428517.xsph.ru/a_random.php?min=' + min + '&max=' + max)
        .then((result) => {
            console.log(result)
            return result.json()
        }).then((result) => {
            p.innerHTML = result.result
        })


}