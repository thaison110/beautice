import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                {/* Logo, Navication  */}
                <img
                    className={cx("logo")}
                    src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/header-builder-logo-common.png"
                    alt="logo"
                />
                {/* Navication */}
                <nav className={cx("navi")}>
                    <Link className={cx("text", "blue")} to="/">
                        Home+
                    </Link>
                    <Link className={cx("text")} to="/about">
                        About
                    </Link>
                    <Link className={cx("text")} to="/service">
                        Service
                    </Link>
                    <Link className={cx("text")} to="/gallery">
                        Gallery
                    </Link>
                    <Link className={cx("text")} to="/blog">
                        Blog
                    </Link>
                    {/* Button */}
                    <div className={cx("actions")}>
                        <Button></Button>
                    </div>
                    {/* <Link to="/contact">
                        <button className={cx("btn")}>Contact</button>
                    </Link> */}
                </nav>
            </div>
        </header>
    );
}

export default Header;
