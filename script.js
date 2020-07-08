let otschet = document.querySelector('p.procent');
let warningMessage = document.querySelector('h1.quick');
let phone = document.querySelector('input.phone');
let schetchik = document.querySelector('.schetchik');
let d = 59;
let a = 6;
otschet.innerHTML = a + '%';



let obratnijOtschet = () => {

    schetchik.innerHTML = '00:00:'+ d;
    warningMessage.classList.toggle('active');
    if (d == 0) {
        d = 59;

        if (a > 1) {
            a = a - 1;
            otschet.innerHTML = a + '%';

        } else {
            a = "Сорян брат, твоя скидка тютю";
            d = '00'
        otschet.innerHTML = 0 + '%';
        clearTime();
        warningMessage.innerHTML = 'УПС';
            schetchik.innerHTML = ''
        }
    } else {
        d = d - 1;
    }
}
let c = setInterval(obratnijOtschet, 1000);

let clearTime = () => {
    clearInterval(c);
};

phone.addEventListener('focus', clearTime);




