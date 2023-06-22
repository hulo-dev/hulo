import Link from "next/link";
import { FooterSocialDesigIcon } from "../Icons";
import "./FooterSocial.scss";

const FooterSocial = ({ class_name }) => {
    return (
        <div className={class_name}>
            <div className="container">
                <ul>
                    <li>
                        <Link className="italic" href="#">
                            hello@hulo.dev
                        </Link>
                    </li>
                    <li>
                        <Link href="#">linkedin</Link>
                    </li>
                    <li>
                        <Link href="#">facebook</Link>
                    </li>
                    <li>
                        <Link href="#">instagram</Link>
                    </li>
                    <li>
                        <Link className="bold" href="#">
                            <FooterSocialDesigIcon />
                            designer
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FooterSocial;
