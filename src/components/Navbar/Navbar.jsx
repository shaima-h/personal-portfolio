import React, {useState} from "react";

import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils"

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("#home");

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setMenuOpen(false);
    };
    
    return (
        <nav className={styles.navbar}>
            <div className={styles.menu}>
                <div 
                    className={styles.menuBtn} 
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {!menuOpen ? (
                        <div className={styles.hamburgerMenu}>
                            <span className={styles.bar}></span>
                            <span className={styles.bar}></span>
                            <span className={styles.bar}></span>
                        </div>
                    ) : (
                        <div className={styles.closeMenu}>
                            <span className={styles.firstBar}></span>
                            <span className={styles.secBar}></span>
                        </div>
                    )}
                </div>

                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
                    {["Home", "About", "Experience", "Projects", "Contact"].map((text, index) => {
                        const href = `#${text.toLowerCase()}`;
                        return (
                            <li key={index}>
                                <a
                                    href={href}
                                    className={`${styles.menuLink} ${activeLink === href ? styles.active : ""}`}
                                    onClick={() => handleLinkClick(href)}
                                >
                                    {text}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};