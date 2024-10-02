const arr = ["apple", "banana", "grape", "watermelon", "kiwi", "strawberry"];
const result = arr.filter((element) => {
    if(element.length > 5){
        return element;
    }
})
console.log(result);
let ul = document.createElement('ul');
// for(i of result){
//     let li = document.createElement('li');
//     li.innerHTML = `${i}`;
//     ul.appendChild(li);
// }
result.forEach((i) => {
    let li = document.createElement('li');
    li.innerHTML = `${i}`;
    ul.appendChild(li);
})
document.body.appendChild(ul);