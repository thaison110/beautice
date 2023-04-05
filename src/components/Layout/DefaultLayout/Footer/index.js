import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx("wrapper")}>
            <div className={cx("inner")}>
                {/* Logo, Navication  */}
                <div className={cx("contact")}>
                    <div className={cx("footer-01")}>
                        <img
                            className={cx("logo-footer")}
                            src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/header-builder-logo.png"
                            alt="logo"
                        />
                        <p className={cx("text-01")}>
                            <strong>Beautice</strong> is a Beauty Clinic
                            WordPress Theme.
                        </p>
                        <em className={cx("text-02")}>
                            Baker Steet 101, NY, United States.
                        </em>
                        <br />
                        <em className={cx("text-34")}>
                            <a className={cx("text-03")} href="tel:5215698966">
                                +521 569 8966.
                            </a>
                            <a
                                className={cx("text-04")}
                                href="mailto:mail@company.com"
                            >
                                mail@company.com.
                            </a>
                        </em>
                    </div>
                </div>
                <div className={cx("page-info")}>
                    <div className={cx("page")}>
                        <h2 className={cx("text-page-1")}>Pages</h2>
                        <div classNames={cx("text-col")}>
                            <a>
                                <FontAwesomeIcon
                                    className={cx("play-footer")}
                                    icon={faCircleArrowRight}
                                />
                                Home
                            </a>
                            <br />
                            <br />
                            <a>
                                <FontAwesomeIcon
                                    className={cx("play-footer")}
                                    icon={faCircleArrowRight}
                                />
                                About
                            </a>
                            <br />
                            <br />
                            <a>
                                <FontAwesomeIcon
                                    className={cx("play-footer")}
                                    icon={faCircleArrowRight}
                                />{" "}
                                Service
                            </a>
                            <br />
                            <br />

                            <a>
                                <FontAwesomeIcon
                                    className={cx("play-footer")}
                                    icon={faCircleArrowRight}
                                />
                                Gallery
                            </a>
                            <br />
                            <br />

                            <a>
                                <FontAwesomeIcon
                                    className={cx("play-footer")}
                                    icon={faCircleArrowRight}
                                />
                                Team
                            </a>
                        </div>
                    </div>
                    <div className={cx("info")}>
                        <h2 className={cx("text-page-2")}>Informations</h2>
                        <div classNames={cx("text-col")}>
                            <a>
                                <FontAwesomeIcon
                                    className={cx("play-footer")}
                                    icon={faCircleArrowRight}
                                />
                                Home
                            </a>
                            <br />
                            <br />
                            <a>
                                <FontAwesomeIcon
                                    className={cx("play-footer")}
                                    icon={faCircleArrowRight}
                                />
                                About
                            </a>
                            <br />
                            <br />
                            <a>
                                <FontAwesomeIcon
                                    className={cx("play-footer")}
                                    icon={faCircleArrowRight}
                                />{" "}
                                Service
                            </a>
                            <br />
                            <br />

                            <a>
                                <FontAwesomeIcon
                                    className={cx("play-footer")}
                                    icon={faCircleArrowRight}
                                />
                                Gallery
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("footer")}>
                <div className={cx("footer-left")}>
                    <div className={cx("icon-socical")}>
                        <div className={cx("blue-media")}>
                            <FontAwesomeIcon
                                className={cx("pink-icon")}
                                icon={faFacebookF}
                                size="2x"
                            />
                        </div>
                        <div className={cx("blue-media")}>
                            <FontAwesomeIcon
                                className={cx("pink-icon")}
                                icon={faInstagram}
                                size="2x"
                            />
                        </div>
                        <div className={cx("blue-media")}>
                            <FontAwesomeIcon
                                className={cx("pink-icon")}
                                icon={faTwitter}
                                size="2x"
                            />
                        </div>
                        <div className={cx("blue-media")}>
                            <FontAwesomeIcon
                                className={cx("pink-icon")}
                                icon={faYoutube}
                                size="2x"
                            />
                        </div>
                        <div className={cx("blue-media")}>
                            <FontAwesomeIcon
                                className={cx("pink-icon")}
                                icon={faLinkedinIn}
                                size="2x"
                            />
                        </div>
                    </div>
                </div>
                <div className={cx("footer-right")}>
                    <p className={cx("text-right")}>
                        © AltDesain Studio 2021 – All right reserved.
                    </p>
                    <button></button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
