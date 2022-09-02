window.onload = () =>{
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', () =>{
        hamburger.classList.toggle('open');
        if(menu.classList.contains('hidden')){
            menu.classList.remove('hidden');
            menu.classList.add('block')
        }
        else{
            menu.classList.remove('block');
            menu.classList.add('hidden')
        }
    });

}