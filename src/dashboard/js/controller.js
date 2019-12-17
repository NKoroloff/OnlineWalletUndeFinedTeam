import model from "./model";
import {chooseLanguage} from "../../login/dropdown/logic";


export const addListeners = () => {
    model.accountSettings.addEventListener('click' , function (e) {
        e.stopPropagation();
        model.settingsDropdownToggle.classList.toggle('active');
        model.arrowDropdownToggle.classList.toggle('active');
    })

    window.addEventListener('click', function(){
        model.settingsDropdownToggle.classList.remove("active");
        model.arrowDropdownToggle.classList.remove("active");
    });
};





