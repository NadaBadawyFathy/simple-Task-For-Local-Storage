/*-----------------------local storage color application practice V 112------------------------*/
let li = document.querySelectorAll('ul li');
let exp = document.querySelector('.exper');

li.forEach(function(ele){
    ele.onclick = function(){
        li.forEach(function(ele){
            ele.classList.remove('active')
        })
    window.localStorage.color = this.className;
    exp.style.backgroundColor = this.className;
    this.classList.add('active');
    }
    if (window.localStorage.color === ele.className){
        li.forEach(function(ele){
            ele.classList.remove('active');
        })
        ele.classList.add('active');
    }
    exp.style.backgroundColor = window.localStorage.color;
});

