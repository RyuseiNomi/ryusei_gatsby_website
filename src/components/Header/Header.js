import React from "react"
import styles from "./Header.module.scss"

const Header = props => (
    <div className={styles["header__title"]}>
        <p className={styles["header__title-text"]}>{props.title}</p>
        <ul className={styles["header__menu"]}>
            <li className={styles["header__menu-list"]}>About Me</li>
            <li className={styles["header__menu-list"]}>Article List</li>
            <li className={styles["header__menu-list"]}>Contact</li>
        </ul>
    </div>
)

export default Header;
