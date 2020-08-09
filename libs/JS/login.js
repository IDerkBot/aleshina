

const login = document.querySelector('.login');
const block = document.querySelector('.block-login');

login.addEventListener('click', () => {
    block.classList.toggle('done');
});
block.addEventListener('click', (e) => {
    if(e.target.classList.contains('block-login')){
        block.classList.toggle('done');
    }

});