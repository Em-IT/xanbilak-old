import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import './NavBar.scss';
import { IoMdSettings } from 'react-icons/io';
import { TiMessages } from 'react-icons/ti';
import { FaListOl } from 'react-icons/fa';

const NavBar = () => {
    const { t } = useTranslation();

    const changeLanguage = () => {
        const selected = localStorage.getItem("i18nextLng") || "en";
        if(selected === "en") {
            localStorage.setItem("i18nextLng", "fa");
            i18next.changeLanguage("fa");
            console.log("fa");
        }
        else {
            localStorage.setItem("i18nextLng", "en");
            i18next.changeLanguage("en");
            console.log("en");
        }
    }

    return (
        <div className='navbar'>
            <div>
                <span>{t("shopping_list")}</span>
                <FaListOl className='list-icon' />
            </div>
            <div>
                <span>{t("massenger")}</span>
                <TiMessages className='massenger-icon' />
            </div>
            <div onClick={changeLanguage}>
                <span>{t("settings")}</span>
                <IoMdSettings className='setting-icon' />
            </div>
        </div>
    )
}

export default NavBar
