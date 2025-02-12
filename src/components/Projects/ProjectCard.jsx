import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import { Link } from "react-router-dom";

export const ProjectCard = ({ project: {title, imageSrc, description, skills, demo, source, projectPageURL} }) => {
    return (
        <div className={styles.container}>
            {projectPageURL ? (
                <Link to={`/projects/${projectPageURL}`}>
                    <img className={styles.image} src={getImageUrl(imageSrc)} alt={`Image of ${title}`} />
                </Link>
            ) : (
                <a href={source} target="_blank" rel="noopener noreferrer">
                    <img  className={styles.image}
                        src={getImageUrl(imageSrc)}
                        alt={`Image of ${title}`}
                    />
                </a>
            )}
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id) => {
                    return (
                        <li key={id} className={styles.skill}>
                            {skill}
                        </li>
                    );
                })}
            </ul>
            {/* <div className={styles.links}>
                <a href={demo} className={styles.link}>Demo</a>
                <a href={source} className={styles.link}>Source</a>
            </div> */}
        </div>
    );
};