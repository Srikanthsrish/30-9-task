const someThing = ["hello", "world", "javascript", "dom"];
        let result = someThing.map((element)=>{
            return element.toUpperCase();
        })
        console.log(result);
        let p = document.createElement('p');
        // for(x of result){
        //     p.innerHTML += x+" ";
        //     document.body.appendChild(p);
        // }
        result.forEach((element) =>{
            p.innerHTML += element+" ";
            document.body.appendChild(p);