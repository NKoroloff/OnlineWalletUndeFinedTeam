import model from '../../js/model';
export const chooseLanguage = () => {
    for (let i = 0; i < model.allLanguageButton.length; i++){
        model.allLanguageButton[i].addEventListener("click", function (e) {
            let langMenuBtns = model.allLanguageButton[0];
            let test = `${e.target.textContent}`
            model.langActive.innerHTML = sliceDash(test);
            while(langMenuBtns){
                if(langMenuBtns.tagName === "DIV"){
                    langMenuBtns.classList.remove('menu-lang__nav--active');
                }
                langMenuBtns = langMenuBtns.nextSibling;
            };
            this.classList.add('menu-lang__nav--active');
            model.dropdown.classList.remove("active");
            model.menuLang.classList.remove("active");
        });
    };
};
function sliceDash(arg){
    let stringSlice = '';
    stringSlice += arg;
    if(!stringSlice.includes('-')){
        return arg;
    } else{
        let stringSLiceLang = stringSlice.lastIndexOf('-');
        let stringOnActiveLanguage = stringSlice.substr(0 , stringSLiceLang );
        return stringOnActiveLanguage;
    }
}









