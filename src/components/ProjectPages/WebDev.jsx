import React from "react";

import styles from "./WebDev.module.css";
import { getImageUrl } from "../../utils";
import { Link } from "react-router-dom";

// todo: back to projects button

export const WebDev = () => {
    return (
        <section className={styles.container}>
            <div className={styles.buttonContainer}>
                <Link to="/">
                    <button className={styles.backButton}>
                        Back to Home
                    </button>
                </Link>
            </div>
            <h2 className={styles.title}>freelance web development</h2>
            <div className={styles.content}>
                <div className={styles.desc}>
                    <p>
                        This website was created for a client who specializes in wedding and adventure photography. It was built using WordPress for a customized, user-friendly design that showcases their stunning portfolio and services.
                    </p>
                </div>
                <img className={styles.vid} src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmhqdmg2NXNodjJja3RwaWFna3EyNmZpNXlveWRwYTkwaWVwN3QzZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/n4Q1XyZMwdyGeqJq1S/giphy.gif"></img>
                {/* <video className={styles.vid} controls autoplay muted loop>
                    <source src={getImageUrl("project-pages/safsouf_laptop.mp4")} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video> */}
            </div>
            <div className={styles.images}>
                    <img 
                        src={getImageUrl("project-pages/safsouf.png")} 
                        alt="Website image" 
                    />
                    {/* <img 
                        src={getImageUrl("project-pages/safsouf.png")} 
                        alt="Website image" 
                    />
                    <img 
                        src={getImageUrl("project-pages/safsouf.png")} 
                        alt="Website image" 
                    /> */}
                </div>
        </section>
    );
};