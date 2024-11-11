import React from "react";

import styles from "./Experience.module.css"
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";
import history from "../../data/history.json";

export const Experience = () => {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.resumeBtn}>
                    <a 
                        className={styles.resumeLink}
                        href="https://drive.google.com/file/d/1CcMII5zSRG3yKYkPzQpDbnTxowV4dcho/view?usp=sharing"
                        target="_blank" rel="noopener noreferrer"
                    >
                        View Full Resume
                    </a>
                </div>
                <ul className={styles.history}>
                    {
                        history.map((historyItem, id) => {
                            return (
                                <li key={id} className={styles.historyItem}>
                                    <img 
                                        src={getImageUrl(historyItem.imageSrc)} 
                                        alt={`${historyItem.organization} Logo`}
                                    />
                                    <div className={styles.historyItemDetails}>
                                        <h3>{`${historyItem.role}`}</h3>
                                        <h4>{historyItem.organization}</h4>
                                        <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                        <ul>{historyItem.experiences.map((experience, id) => {
                                            return (
                                                <li key={id}>
                                                    {experience}
                                                </li>
                                            );
                                        })}</ul>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <h2 className={styles.skillsTitle}>Skills</h2>
                <div className={styles.skills}>
                    {skills.map((skill, id) => {
                        return  (
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}>
                                    <img
                                        src={getImageUrl(skill.imageSrc)}
                                        alt={skill.title}
                                    />
                                </div>
                            <p>{skill.title}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};