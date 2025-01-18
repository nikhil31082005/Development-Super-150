const arr = ['https://images.unsplash.com/photo-1723118641440-485d9630c3c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
    'https://plus.unsplash.com/premium_photo-1723533374165-124864151ed2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D'
]

let img = document.querySelector('img')

// img.setAttribute('src', arr[0])

let idx = 0;
setInterval(() => {
    img.setAttribute('src', arr[idx])
    idx = (idx+1)%arr.length
},2000)

