const fruits = ["apple", "banana", "grape"];
let ul = document.createElement('ul');
const result = fruits.map((element,index)=>{
    c='';
   for(i of element){
        if(i == 'a'){
            c += i.match(/a/gi);
            
        }
        else if (i=='e'){
            c += i.match(/e/gi);
        }
        else if (i=='i'){
            c += i.match(/i/gi);
        }
        else if (i=='o'){
            c += i.match(/o/gi);
        }
        else if (i=='u'){
            c += i.match(/u/gi);
        }
   }
   let li = document.createElement('li');
   li.innerHTML = `${element} (${c.length}vowels)`;
   ul.appendChild(li);
   document.body.appendChild(ul);
})