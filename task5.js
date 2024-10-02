const animals = ["dog", "cat", "bird", "fish"];
const result = animals.map((element,index)=>{
     return element.split('').reverse().join('');
})
console.log(result);
let ul = document.createElement('ul');
for(i of result){
    let li = document.createElement('li');
    li.innerHTML = `${i}`;
    ul.appendChild(li);
}
document.body.appendChild(ul);