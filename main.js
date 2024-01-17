
let search_btn = document.getElementById('search_btn')
let input = document.getElementById('username')

search_btn.addEventListener('click', searchFunc)
function searchFunc(){
    let nav = document.querySelector('.nav_bar')
    nav.classList.toggle('search')
    if(search_btn.innerText == 'Search'){
        search_btn.innerText = 'Exit'
    }
    else{
        search_btn.innerText = 'Search'
    }
}
input.addEventListener('blur', function(){
    if(input.value == ''){
        document.querySelector('.form').classList.toggle('kirit')
    }
})