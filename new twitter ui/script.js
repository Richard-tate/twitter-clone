const loginPage = document.querySelector('.login-page');
const mainPage = document.querySelector('.main-page');
const loginPageBtn = document.querySelector('#login-page-btn');
const feedsPage = document.querySelector('.feeds-page');
const middleContent = document.querySelector('.middle-content');
const btnTop = document.querySelector('.top');
const loginModal = document.querySelector('.login-modal');
const loginModalBtn = document.querySelector('.login-modal .fa-times');
const postBtn = document.querySelector('.post-btn');
const modalWapper = document.querySelector('.modal-wrapper');
const modalShow = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-header i');
const modalPostBtn = document.querySelector('.modal-header button');
const modalFooterPlus = document.querySelector('.modal-footer span');
const modalInput = document.querySelector('.modal-input');
const toggleNavBtn = document.querySelector('.user');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const sidebar = document.querySelector('.sidebar');
const sidebarClose = document.querySelector('.sidebar-header i');
const toggle = document.querySelector('.toggle');
const circle = document.querySelector('.circle');




const goToLoginPage = () =>{
    mainPage.style.display = 'none';
    loginPage.style.display = 'grid';
};

middleContent.addEventListener('click', e => {
    if(e.target.classList[1] === 'main-btn'){
        goToLoginPage();
    }
});

btnTop.addEventListener('click', e =>{
    const inputUserInfo = document.querySelector('.signin .email');
    const inputPassword = document.querySelector('.signin .password');

    if(inputUserInfo.value !== '' && inputPassword.value !== ''){
        mainPage.style.display = 'none';
        feedsPage.style.display = 'grid';  
        inputUserInfo.value = '';
    }else{
        goToLoginPage();
        loginModal.style.display = 'block';
        inputUserInfo.value = '';
    }
});

const goToFeedsPage = () =>{
    loginPage.style.display = 'none';
    feedsPage.style.display = 'grid';
};

loginPageBtn.addEventListener('click', e =>{
    const loginPageInput = document.querySelector('.login-form .email');
    const inputPassword = document.querySelector('.login-form .password');

    if(loginPageInput.value !== '' && inputPassword.value !== ''){
       goToFeedsPage();
    }else{
        loginModal.style.display = 'block';
        loginPageInput.value = '';
    }
});

loginModalBtn.addEventListener('click', e =>{
        loginModal.style.display = 'none';
});

postBtn.addEventListener('click', () => {
    modalShow.style.display = 'block';
    modalWapper.classList.add('modal-wrapper-display');
});

modalClose.addEventListener('click', ()=>{
    modalShow.style.display = 'none';
    modalWapper.classList.remove('modal-wrapper-display');
    if(modalInput.value !== ''){
        modalInput.value = '';
        changeOpacity(.5);
    }
});

const changeOpacity = x => {
    modalPostBtn.style.opacity = x;
    modalFooterPlus.style.opacity = x;
};

modalInput.addEventListener('keypress', (e) =>{
    if(e.target.value !== ''){
        changeOpacity(1);
    }
});

modalInput.addEventListener('blur', (e)=>{
    if(e.target.value === ''){
        changeOpacity(.5);
    }
});

toggleNavBtn.addEventListener('click', ()=>{
  sidebar.classList.add('sidebar-display');
  sidebarWrapper.classList.add('sidebar-wrapper-display');
});

sidebarClose.addEventListener('click', ()=>{
    sidebar.classList.remove('sidebar-display');
    sidebarWrapper.classList.remove('sidebar-wrapper-display');
});

const darkElements1 = document.querySelectorAll('.dark-mode-1');
const darkElements2 = document.querySelectorAll('.dark-mode-2');
const lightText = document.querySelectorAll('.light-text');
const borders = document.querySelectorAll('.border');

toggle.addEventListener('click', ()=>{
    circle.classList.toggle('move');
    Array.from(darkElements1).map((darkEl1) => darkEl1.classList.toggle('dark-1'));
    Array.from(darkElements2).map((darkEl2) => darkEl2.classList.toggle('dark-2'));
    Array.from(lightText).map((lightText) => lightText.classList.toggle('light'));
    Array.from(borders).map((borderEL)=> borderEL.classList.toggle('border-color'));
});