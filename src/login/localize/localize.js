import model from "../../js/model";
export let texts = {
    "loginField":{
        "en":"Login",
        "ru":"Логин",
    },
    "nameFieldError":{
        "en":"The field can contain only latin characters, digits and symbols'- , _'",
        "ru":"Поле может содержать только буквы и символы'- , _'",
    },
    "deviceName":{
        "en":"Device Name",
        "ru":"Имя устройства",
    },
    "loginFieldError":{
        "en":"The field can contain only latin characters, digits and symbols '- , _'",
        "ru":"Поле может содержать только латинские символы, цифры и символы '- , _'",
    },
    "passwordField":{
        "en":"Password",
        "ru":"Пароль",
    },
    "passwordFieldError":{
        "en":"The field must contain at least 6 characters",
        "ru":"Поле должно содержать не менее 6 символов",
    },
    "myMobileStub":{
        "en": "To fully use the application, we recommend downloading the application to your mobile device",
        "ru": "Чтобы использовать приложение в полной мере мы рекомендуем загрузить приложение на мобильное устройство",
    },
    "myDownloadIOS":{
        "en": "download for IOS",
        "ru": "Загрузить для IOS",
    },
    "myDownlosdAndroid":{
        "en": "download for Android",
        "ru": "Загрузить для Android",
    },
    "myClose":{
        "en": "Close this message",
        "ru": "Закрыть сообщение",
    },
    "myDescriptionLogin":{
        "en": "For login you have to download the mobile app and be registered in.",
        "ru": "Для входа вам необходимо скачать мобильное приложение и зарегистрироваться.",
    },
    "myAlreadyRegistered":{
        "en": "If you have already registered please enter your data and click Log in button.",
        "ru": "Если вы уже зарегистрированы, пожалуйста введите свои данные и нажмите на кнопку Вход.",
    },
    "qrAndroid":{
        "en": "Show QR-code", //почему их 2? (этот и следующий)
        "ru": "Показать QR-код",
    },
    "qrIos":{
        "en": "Show QR-code",
        "ru": "Показать QR-код",
    },
    "myError":{
        "en": "The login, device name or password is not correct.",
        "ru": "Логин, имя устройства или пароль не верны",
    },
    "myLogIn":{
        "en": "Log In",
        "ru": "Вход",
    },
    "submit":{
        "en": "log in",
        "ru": "Вход",
    },
    "myQRPlay":{
        "en": "Scan the QR code to go to Play Market",
        "ru": "Отсканируйте QR-код чтобы перейти в Play Market",
    },
    "myQRApp":{
        "en": "Scan the QR code to go to App Store",
        "ru": "Отсканируйте QR-код чтобы перейти в App Store",
    },
    "myVerificationError":{
        "en": "Verification code entered incorrectly",
        "ru": "Код подтверждения введен неверно",
    },
    "myOk":{
        "en": "Ok, I got It!",
        "ru": "Хорошо, я понял",
    },
    "myVerification":{
        "en": "Enter verification code",
        "ru": "Введите код подтверждения",
    },
    "myDigitCode":{
        "en": "Please enter the 6 digit code we just sent to your number +XXXXXXXX653",
        "ru": "Пожалуйста, введите 6-значный код, который мы только что отправили на ваш номер +XXXXXXXX653",
    },
    "myCode":{
        "en": "Code",
        "ru": "Код",
    },
};

window.onload = () => {

    let lang = localStorage.getItem('lang');

    if(lang == null)
        lang = 'en';

    setLang(lang);
};

export const setLang = (lang) =>{
    model.localizeable.forEach(function(item) {
        item.innerHTML = texts[item.id][lang];
    });

    localStorage.setItem('lang',lang);
};

setLang('en');