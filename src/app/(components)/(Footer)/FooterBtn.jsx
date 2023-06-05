import Link from "next/link";
import { DiagonalArrow, FlagIcon } from "../Icons";

const FooterBtn = () => {
    return(
        <div className="footer__btn">
            <Link href="#" className="btn">
                <FlagIcon />
                support Ukraine
                <span>
                    <DiagonalArrow />
                    <DiagonalArrow />
                </span>
            </Link>
        </div>
    );
}

export default FooterBtn;