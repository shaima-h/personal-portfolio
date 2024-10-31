import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container} id="home">
            <div className={styles.content}>
                <h1 className={styles.title}>Shaima Hussaini</h1>
                <p className={styles.description}>
                    Welcome to my portfolio!
                </p>
            </div>
        </section>
    );
};