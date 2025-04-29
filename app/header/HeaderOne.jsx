"use client"

import React, { useEffect, useState } from "react";
import { Room } from "./Menu";
import DropDown from "./DropDown";
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "./LanguageSwitcher";

export default function HeaderOne({ variant }) {
    const [mobileToggle, setMobileToggle] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [ready, setReady] = useState(false);
    const { t, i18n } = useTranslation();
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
        });
    }, []);

    useEffect(() => {
        if (i18n.isInitialized) setReady(true);
        else i18n.on('initialized', () => setReady(true));
      }, [i18n]);
    
    if (!ready) return null;

    return (
        <div className={`header__sticky ${ variant ? variant : "" } ${isSticky ? "header__sticky-sticky-menu" : ""}`}>
        <div className='header__area'>
            <div className="container custom__container">
                <div className="header__area-menubar">
					<div className="header__area-menubar-left">
						<div className="header__area-menubar-left-logo">
							<Link href="/"><img src="/logo.png" alt="logo" width={100}/></Link>
                            <span className={mobileToggle ? "mobile-menu mobile-menu-active" : "mobile-menu"} onClick={() => setMobileToggle(!mobileToggle)}><span></span></span>
						</div>
					</div>
					<div className="header__area-menubar-right">
						<div className="header__area-menubar-right-menu menu-responsive ">
                            <ul className="mobile__menu flex justify-content-between" style={{ display: `${mobileToggle ? "block" : "none"}` }}>
								<li>
                                    <Link href="/">{t('header.home')}</Link>
								</li>
								<li>
                                    <Link href="/about">{t('header.about')}</Link>             
								</li>
								<li className="menu-item-has-children"><a href="#">Room</a>
                                    <DropDown />
                                    <ul className="sub-menu">
                                        <Room />
                                    </ul>                                    
								</li>
								<li><Link href="/contact">{t('header.contact')}</Link></li>
							</ul>
						</div>
					</div>
					<div className="header__area-menubar-right-box">
						<div className="header__area-menubar-right-box-btn">
							<Link className="theme-btn" href="/contact">{t('button.book_now')}<i className="fal fa-long-arrow-right"></i></Link>
						</div>
					</div>
                    <div className="header__area-menubar-right-box">
						<div className="header__area-menubar-right-menu">
                            <ul className="mobile__menu" style={{ display: `${mobileToggle ? "block" : "none"}` }}>
								<li><a className="d-flex justify-around items-center" href="#"><i className="fad fa-language"></i></a>
                                    <DropDown />
                                    <ul className="sub-menu">
                                        <LanguageSwitcher />
                                    </ul>                                    
								</li>
							</ul>
						</div>
					</div>
                </div>
            </div>
        </div>
        </div>
    );
}