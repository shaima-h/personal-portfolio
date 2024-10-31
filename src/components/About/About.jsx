import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>about me</h2>
            <div className={styles.content}>
                <div className={styles.aboutImg}>
                    <img 
                        src={getImageUrl("about/headshot.png")} 
                        alt="About image of me" 
                    />
                </div>
                <h3>Hi, I'm Shaima Hussaini!</h3>
                <p>
                    I graduated from the University at Albany with a B.S. in computer science and a minor in statistics.
                </p>
            </div>
        </section>
    );
};