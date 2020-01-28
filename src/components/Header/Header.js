// @flow strict
import React from "react";
import { Link } from "gatsby";
import styles from "./Header.module.scss";
import { useSiteMetadata } from '../../hooks';

type Props = {
  menu: {
    label: string,
    path: string
  }[]
};

const Header = Props => {
  const { menu } = useSiteMetadata();

  return (
    <nav className={styles["header__title"]}>
      <p className={styles["header__title-text"]}>{Props.title}</p>
      <ul className={styles["header__menu"]}>
        {menu.map((item) => (
          <li className={styles["header__menu-list"]} key={item.path}>
            <Link to={item.path}>
            {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
