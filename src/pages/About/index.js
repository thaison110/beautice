import style from "./About.module.scss";
import classNames from "classnames/bind";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import slider from "react-slick/lib/slider";

const cx = classNames.bind(style);

function About() {
    return (
        <>
            <div className={cx("wrapper")}>
                <div className={cx("content")}>
                    {/* About */}
                    <div className={cx("Main-Services")}>
                        <div className={cx("main-text")}>
                            <h2 className={cx("title-main")}>About</h2>
                            <h1 className={cx("description-main")}>
                                We are a leading beauty clinic that has
                                <br />
                                been around since 2002
                            </h1>
                            <p className={cx("description-main-1")}>
                                Porta rhoncus orci condimentum vitae lobortis eu
                                dignissim non massa. Non parturient amet,
                                <br /> feugiat tellus sagittis, scelerisque eget
                                nulla turpis.
                            </p>
                        </div>
                    </div>
                    <div className={cx("watch-background")}>
                        <div className="btn-icon-watch">
                            <button className={cx("btn-play")}>
                                <FontAwesomeIcon
                                    className={cx("icon-play")}
                                    icon={faCirclePlay}
                                />
                            </button>
                        </div>
                    </div>
                    <div className={cx("background")}></div>
                    {/* section 2 */}
                    <div className={cx("Teams")}>
                        <div className={cx("Teams-text")}>
                            <h2 className={cx("title-Teams")}>
                                Professional Teams
                            </h2>
                            <h1 className={cx("description-Teams")}>
                                The Professional expert
                            </h1>
                            <p className={cx("description-Teams-1")}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit ut aliquam.
                            </p>
                        </div>
                    </div>
                    {/* profile (section 3) */}
                    <div className={cx("Professional-section")}>
                        <div className={cx("Professional-box-01")}>
                            <div className={cx("Professional-header-box")}>
                                <div className={cx("Professional-box-avatar")}>
                                    <img
                                        src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/unsplash_pTrhfmj2jDA.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className={cx("Professional-box-body")}>
                                <h4 className={cx("Professional-box-title")}>
                                    Briyan Nevalli
                                </h4>
                                <h5 className={cx("Professional-box-title2")}>
                                    Surgeon
                                </h5>
                                <p
                                    className={cx(
                                        "Professional-box-description"
                                    )}
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit ut aliquam, purus sit.
                                </p>
                            </div>
                            <div className={cx("icon-socical")}>
                                <div className={cx("blue-media")}>
                                    <FontAwesomeIcon
                                        className={cx("blue-icon")}
                                        icon={faFacebookF}
                                        size="2x"
                                    />
                                </div>
                                <div className={cx("pink-media")}>
                                    <FontAwesomeIcon
                                        className={cx("pink-icon")}
                                        icon={faInstagram}
                                        size="2x"
                                    />
                                </div>
                                <div className={cx("light-blue-media")}>
                                    <FontAwesomeIcon
                                        className={cx("light-blue-icon")}
                                        icon={faTwitter}
                                        size="2x"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={cx("Professional-box-02")}>
                            <div className={cx("header-box")}>
                                <div className={cx("Professional-box-avatar")}>
                                    <img
                                        src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/unsplash_FVh_yqLR9eA.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className={cx("Professional-box-body")}>
                                <h4 className={cx("Professional-box-title")}>
                                    Briyan Nevalli
                                </h4>
                                <h5 className={cx("Professional-box-title2")}>
                                    Surgeon
                                </h5>
                                <p
                                    className={cx(
                                        "Professional-box-description"
                                    )}
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit ut aliquam, purus sit.
                                </p>
                            </div>
                            <div className={cx("icon-socical")}>
                                <div className={cx("blue-media")}>
                                    <FontAwesomeIcon
                                        className={cx("blue-icon")}
                                        icon={faFacebookF}
                                        size="2x"
                                    />
                                </div>
                                <div className={cx("pink-media")}>
                                    <FontAwesomeIcon
                                        className={cx("pink-icon")}
                                        icon={faInstagram}
                                        size="2x"
                                    />
                                </div>
                                <div className={cx("light-blue-media")}>
                                    <FontAwesomeIcon
                                        className={cx("light-blue-icon")}
                                        icon={faTwitter}
                                        size="2x"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={cx("Professional-box-03")}>
                            <div className={cx("header-box")}>
                                <div className={cx("Professional-box-avatar")}>
                                    <img
                                        src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/unsplash_mEZ3PoFGs_k.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className={cx("Professional-box-body")}>
                                <h4 className={cx("Professional-box-title")}>
                                    Briyan Nevalli
                                </h4>
                                <h5 className={cx("Professional-box-title2")}>
                                    Surgeon
                                </h5>
                                <p
                                    className={cx(
                                        "Professional-box-description"
                                    )}
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit ut aliquam, purus sit.
                                </p>
                                <div className={cx("icon-socical")}>
                                    <div className={cx("blue-media")}>
                                        <FontAwesomeIcon
                                            className={cx("blue-icon")}
                                            icon={faFacebookF}
                                            size="2x"
                                        />
                                    </div>
                                    <div className={cx("pink-media")}>
                                        <FontAwesomeIcon
                                            className={cx("pink-icon")}
                                            icon={faInstagram}
                                            size="2x"
                                        />
                                    </div>
                                    <div className={cx("light-blue-media")}>
                                        <FontAwesomeIcon
                                            className={cx("light-blue-icon")}
                                            icon={faTwitter}
                                            size="2x"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Section 3 */}
                </div>
            </div>
            <div className={cx("backgroundslogan")}>
                <div className={cx("business-slogan")}>
                    <div className={cx("opacity-background")}>
                        <div className={cx("section03")}>
                            <div className="business-text">
                                <h2 className={cx("business-title")}>
                                    Business Slogan
                                </h2>
                                <h1 className={cx("business-description")}>
                                    Best responsibility and service <br /> for
                                    our customers
                                </h1>
                                <p className={cx("business-description-1")}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit ut aliquam, <br /> purus sit
                                    amet luctus venenatis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("section04")}>
                    <div className={cx("section04-left")}>
                        <div className={cx("img-section04-left")}>
                            <img
                                src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/Illustration-about-1.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={cx("section04-right")}>
                        <div className={cx("main-text")}>
                            <h2 className={cx("title-main")}>
                                Our Vision
                                <br />
                            </h2>
                            <h1 className={cx("description-main")}>
                                Be the best and go international
                            </h1>
                            <p className={cx("description-main-1")}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing
                                <br /> elit. Elit, quam suscipit purus donec
                                amet. Egestas
                                <br /> volutpat facilisi eu libero.
                                <br /> <br /> Nunc, ipsum ornare mauris sit quam
                                quis enim. Varius
                                <br /> tellus in suspendisse placerat.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={cx("section05")}>
                    <div className={cx("section05-right")}>
                        <div className={cx("main-text")}>
                            <h2 className={cx("title-main")}>
                                Our Vision
                                <br />
                            </h2>
                            <h1 className={cx("description-main")}>
                                Be the best and go international
                            </h1>
                            <p className={cx("description-main-1")}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing
                                <br /> elit. Elit, quam suscipit purus donec
                                amet. Egestas
                                <br /> volutpat facilisi eu libero.
                                <br /> <br /> Nunc, ipsum ornare mauris sit quam
                                quis enim. Varius
                                <br /> tellus in suspendisse placerat.
                            </p>
                        </div>
                    </div>
                    <div className={cx("section05-left")}>
                        <div className={cx("img-section04-left")}>
                            <img
                                src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/Illustration-about-2.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className={cx("background-section")}></div>
                {/* background section 4 */}
                <div className={cx("section006")}>
                    <h2 className={cx("section006-title")}>
                        Our Clients
                        <br />
                    </h2>
                    <h1 className={cx("section006-description-main")}>
                        Well-known agencies
                    </h1>
                    <p className={cx("section006-description-main-1")}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div className={cx("section007")}>
                    <slider
                        className={cx("section007-logo")}
                        dots={true}
                        infinite={true}
                        speed={500}
                        slidesToShow={1}
                        slidesToScroll={5}
                    >
                        <div className={cx("icon-logo")}>
                            <img
                                className={cx("icon-logo-img")}
                                src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/LOGO1.png"
                                alt=""
                            />
                        </div>
                        <div className={cx("icon-logo")}>
                            <img
                                className={cx("icon-logo-img")}
                                src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/LOGO2.png"
                                alt=""
                            />
                        </div>
                        <div className={cx("icon-logo")}>
                            <img
                                className={cx("icon-logo-img")}
                                src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/LOGO3.png"
                                alt=""
                            />
                        </div>
                        <div className={cx("icon-logo")}>
                            <img
                                className={cx("icon-logo-img")}
                                src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/LOGO4.png"
                                alt=""
                            />
                        </div>
                        <div className={cx("icon-logo")}>
                            <img
                                className={cx("icon-logo-img")}
                                src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/LOGO5.png"
                                alt=""
                            />
                        </div>
                        <div className={cx("icon-logo")}>
                            <img
                                className={cx("icon-logo-img")}
                                src="https://wordpress.altdesain.com/beautice/beautyclinic/wp-content/uploads/2021/11/LOGO6.png"
                                alt=""
                            />
                        </div>
                    </slider>
                </div>
            </div>
        </>
    );
}

export default About;
