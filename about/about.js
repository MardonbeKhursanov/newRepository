let search_btn = document.getElementById('search_btn')
let input = document.getElementById('username')
let more = document.getElementById('more')
let back = document.getElementById('back')
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
more.addEventListener('click', function(){
    document.querySelector('header').classList.add('more')
})
back.addEventListener('click', function(){
    document.querySelector('header').classList.remove('more')
})