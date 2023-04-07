import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);
function Button(to, href, onClick, children) {
    const classes = cx("wrapper");
    let Comp = "button";
    return (
        <Comp className={classes}>
            <span>{children}</span>
        </Comp>
    );
}
export default Button;
