const khubhi = document.querySelector('.khubhi')
const url = document.querySelector('.url');
const main = document.querySelector('.main');
let count = 1;

fetch('https://pokeapi.co/api/v2/')
    .then(response => response.json())
    .then(data => {
        for(let key in data){
            let value = data[key];
            let a = document.createElement('div');
            a.setAttribute("class", "api");
            a.innerHTML +=  `${count++}. <div class='khubhi'>${key}</div>
                            <a href='${value}' class='url'>${value}</a>`

            main.appendChild(a);
        }

        
    });

