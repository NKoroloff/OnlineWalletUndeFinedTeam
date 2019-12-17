import model from "./model";
import {chooseLanguage} from "../login/dropdown/logic";
import {setLang} from "../login/localize/localize";
import {toggleShowPassword} from "../login/form/switcher-password";

export const addListeners = () => {

    model.dropdown.addEventListener('click', function (e) {
        e.stopPropagation();
        model.menuLang.classList.toggle("active");
        model.dropDownLangActive.classList.toggle("active");
        chooseLanguage();
    });

    window.addEventListener('click', function(){
        model.menuLang.classList.remove("active");
        model.dropDownLangActive.classList.remove("active");
    });

    model.qrCodeAndroid.addEventListener('click', function(){
        model.modal.classList.add("show");
        model.overlay.classList.add("show");
    });

    model.qrCodeIos.addEventListener('click', function(){
        model.overlay.classList.add("show");
        model.modalIos.classList.add("show");
    });

    model.overlay.addEventListener('click', function(){
        model.modal.classList.remove("show");
        model.overlay.classList.remove("show");
        model.modalIos.classList.remove("show");
    });

    model.closeModal.addEventListener('click', function(){
        model.modal.classList.remove("show");
        model.overlay.classList.remove("show");
    });

    model.closeModalIos.addEventListener('click', function(){
        model.overlay.classList.remove("show");
        model.modalIos.classList.remove("show");
    });

    model.toggleViewPasswordBth.addEventListener('click' , function (){
        toggleShowPassword();
    });

    model.modalErrorClose.addEventListener('click' , function () {
        model.overlayVerification.classList.remove('show');
        model.modalError.classList.remove('show');
    });

    model.mobileStubClose.addEventListener('click' , function () {
        model.mobileStub.classList.add('hidden')
    });

    model.englishLang.addEventListener('click' , function () {
        setLang('en');
    });

    model.russianLang.addEventListener('click' , function () {
        setLang('ru');
    });

};





