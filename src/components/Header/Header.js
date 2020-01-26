import React from "react"
import styles from "./Header.module.scss"

const Header = props => (
    <div className={styles["header__title"]}>
        <p className={styles["header__title-text"]}>{props.title}</p>
    </div>
)

export default Header;
