import React, {useState} from 'react'
import NavBar from '../../components/NavBar/NavBar'
import i18next from "i18next";
import { useTranslation } from 'react-i18next';

const Settings = () => {
    const [lang, setLang] = useState("فارسی");

    const { t } = useTranslation();

    const changeLanguage = () => {
        const selected = localStorage.getItem("i18nextLng") || "en";
        if(selected === "en") {
            localStorage.setItem("i18nextLng", "fa");
            i18next.changeLanguage("fa");
            console.log("fa");
            setLang("فارسی");
        }
        else {
            localStorage.setItem("i18nextLng", "en");
            i18next.changeLanguage("en");
            console.log("en");
            setLang("English");
        }
    }

    return (
        <div>
            <center>
                <h2>{ t("settings") }</h2>
                <hr />

                <span>{ t("language") } :</span>
                <br />
                <button onClick={changeLanguage}>
                    {lang}
                </button>
            </center>
            <NavBar />
        </div>
    )
}

export default Settings
