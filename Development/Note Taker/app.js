

document.addEventListener('DOMContentLoaded',function(){
    const inp = document.querySelector('input');
    const btn = document.querySelector('button');
    const ul = document.querySelector('ul');
    console.log(786);
    
    btn.addEventListener("click", function(e){
        let li = document.createElement('li');
        li.innerText = inp.value;
        console.log(inp.value);
        
        inp.value = "";
        ul.appendChild(li)
    })
})