window.addEventListener('DOMContentLoaded', function () {
    let div = document.createElement('Header-container')
    let h1 = document.createElement("h1")
    let h1text = document.createTextNode('This is an h1')
   
    h1.appendChild(h1text)
    div.appendChild(h1)
    document.body.appendChild(div)
    h1.className = "h1"
    h1.addEventListener('dblclick', function () {
        let colorArray = [
            'yellow',
            'green',
            'blue',
            'red',
            'orange',
            'purple',
            'violet',
            'black',
        ];
        h1.style.color = colorArray[Math.floor(Math.random() * colorArray.length)]
    })

    let h2 = document.createElement("h2")
    let h2text = document.createTextNode('This is an h2')
   
    h2.appendChild(h2text)
    div.appendChild(h2)
    document.body.appendChild(div)
    h2.className = "h2"
    h2.addEventListener('dblclick', function () {
        let colorArray = [
            'yellow',
            'green',
            'blue',
            'red',
            'orange',
            'purple',
            'violet',
            'black',
        ];
        h2.style.color = colorArray[Math.floor(Math.random() * colorArray.length)]
    })
    let h3 = document.createElement("h3")
    let h3text = document.createTextNode('This is an h3')
    
    h3.appendChild(h3text)
    div.appendChild(h3)
    document.body.appendChild(div)
    h3.className = "h3"
    h3.addEventListener('dblclick', function () {
        let colorArray = [
            'yellow',
            'green',
            'blue',
            'red',
            'orange',
            'purple',
            'violet',
            'black',
        ];
        h3.style.color = colorArray[Math.floor(Math.random() * colorArray.length)]
    })
    let h4 = document.createElement("h4")
    let h4text = document.createTextNode('This is an h4')
   
    h4.appendChild(h4text)
    div.appendChild(h4)
    document.body.appendChild(div)
    h4.className = "h4"
    h4.addEventListener('dblclick', function () {
        let colorArray = [
            'yellow',
            'green',
            'blue',
            'red',
            'orange',
            'purple',
            'violet',
            'black',
        ];
        h4.style.color = colorArray[Math.floor(Math.random() * colorArray.length)]
    })
    let h5 = document.createElement("h5")
    let h5text = document.createTextNode('This is an h5')
    
    h5.appendChild(h5text)
    div.appendChild(h5)
    document.body.appendChild(div)
    h5.className = "h5"
    h5.addEventListener('dblclick', function () {
        let colorArray = [
            'yellow',
            'green',
            'blue',
            'red',
            'orange',
            'purple',
            'violet',
            'black',
        ];
        h5.style.color = colorArray[Math.floor(Math.random() * colorArray.length)]
    })
    let h6 = document.createElement("h6")
    let h6text = document.createTextNode('This is an h6')
    
    h6.appendChild(h6text)
    div.appendChild(h6)
    document.body.appendChild(div)
    h6.className = "h6"
    h6.addEventListener('dblclick', function() {
        let colorArray = [
            'yellow',
            'green',
            'blue',
            'red',
            'orange',
            'purple',
            'violet',
            'black',
        ];
        h6.style.color = colorArray[Math.floor(Math.random() * colorArray.length)]
    })

   
let button=document.getElementsByClassName('button')[0]
let num=0
button.addEventListener('click', function(){
num++
    let li = document.createElement("li");
    let liText = document.createTextNode('This is list item ' + num + '!');
    li.appendChild(liText);
        document.body.appendChild(li);
        
        li.addEventListener('click', function() {
            let colorArray = [
                'yellow',
                'green',
                'blue',
                'red',
                'orange',
                'purple',
                'violet',
                'black',
            ];
            
            li.style.color = colorArray[Math.floor(Math.random() * colorArray.length)]
        })
li.addEventListener('dblclick',function(){
    document.body.removeChild(li);
})

    })


})



   

