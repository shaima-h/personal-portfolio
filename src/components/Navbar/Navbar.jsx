import React, {useState} from "react";

import styles from "./Navbar.module.css";
import { Link, Element } from 'react-scroll';

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
                    <li>
                        <Link 
                        className={styles.menuLink} 
                        activeClass={styles.active} 
                        to="home" 
                        spy={true} 
                        duration={500} 
                        onClick={() => setMenuOpen(!menuOpen)}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                        className={styles.menuLink} 
                        activeClass={styles.active} 
                        to="about" 
                        spy={true} 
                        duration={500} 
                        onClick={() => setMenuOpen(!menuOpen)}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link 
                        className={styles.menuLink} 
                        activeClass={styles.active} 
                        to="experience" 
                        spy={true} 
                        duration={500} 
                        onClick={() => setMenuOpen(!menuOpen)}
                        >
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link 
                        className={styles.menuLink} 
                        activeClass={styles.active} 
                        to="projects" 
                        spy={true} 
                        duration={500} 
                        onClick={() => setMenuOpen(!menuOpen)}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link 
                        className={styles.menuLink} 
                        activeClass={styles.active} 
                        to="contact" 
                        spy={true} 
                        duration={500} 
                        offset={-100} 
                        onClick={() => setMenuOpen(!menuOpen)}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};