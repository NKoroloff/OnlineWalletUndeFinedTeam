export const form = {
    errorMessage: document.querySelector('.form-login__error'),
    password: document.getElementById('input-password'),
    device: document.getElementById('device'),
    submit: document.getElementById('submit'),
    login: document.getElementById('login')
};

export const formTwoFactor = {
    submitVerification : document.getElementById('submitVerification'),
    twoFactorAuthentification : document.getElementById('twoFactorInput')
};

export default {
    toggleViewPasswordBth: document.querySelector(".form-row__switch-password"),
    overlayVerification: document.getElementById('overlayVerification'),
    submitVerification: document.querySelector('.modal-verification__submit'),
    dropDownLangActive: document.querySelector('.header-dropdown__lang '),
    modalVerification: document.getElementById('modalVerification'),
    allLanguageButton: document.querySelectorAll(".menu-lang__nav"),
    formErrorMessage: document.querySelector('.form-login__error'),
    mobileStubClose: document.querySelector('.mobile-stub__close'),
    modalErrorClose: document.querySelector('.modal-error__close'),
    inputPassword: document.getElementById('input-password'),
    qrCodeAndroid: document.getElementById('qrAndroid'),
    formLoginJoke: document.querySelector('.form-login'),
    closeModalIos: document.getElementById('close-ios'),
    formPassword: document.getElementById('input-password'),
    closeModal: document.querySelectorAll('.modal__close')[0],
    langActive: document.querySelector(".dropdown-btn__lang"),
    modalError: document.getElementById('modalError'),
    mobileStub: document.querySelector('.mobile-stub'),
    formDevice: document.getElementById('device'),
    formSubmit: document.getElementById('submit'),
    qrCodeIos: document.getElementById('qrIos'),
    formLogin: document.getElementById('login'),
    dropdown: document.getElementById('langActive'),
    modalIos: document.getElementById('modalIos'),
    menuLang: document.querySelector('.menu-lang'),
    overlay: document.querySelector('.overlay'),
    modal: document.querySelectorAll('.modal')[0],
    localizeable: document.querySelectorAll(".localizeable"),
    englishLang: document.getElementById("englishLang"),
    russianLang: document.getElementById("russianLang"),


}