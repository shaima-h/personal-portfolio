import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>contact</h2>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <a href="mailto:shaima.hussaini@gmail.com">
                        <img
                            src={getImageUrl("contact/emailIcon.png")}
                            alt="Email icon"
                        />
                        shaima.hussaini@gmail.com
                    </a>
                </li>
                <li className={styles.link}>
                    <a href="https://www.linkedin.com/in/shaimahussaini" target="_blank" rel="noopener noreferrer">
                        <img
                            src={getImageUrl("contact/linkedinIcon.png")}
                            alt="LinkedIn icon"
                        />
                        linkedin.com/in/shaimahussaini
                    </a>
                </li>
                <li className={styles.link}>
                    <a href="https://www.github.com/shaima-h" target="_blank" rel="noopener noreferrer">
                        <img
                            src={getImageUrl("contact/githubIcon.png")}
                            alt="Github icon"
                        />
                        github.com/shaima-h
                    </a>
                </li>
            </ul>
        </footer>
    );
};