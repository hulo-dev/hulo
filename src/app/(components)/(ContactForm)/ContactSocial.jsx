import Link from "next/link";
import { DiagonalArrowSmall } from "../Icons";
import "./ContactSocial.scss";


const ContactSocial = () => {

    return(
        <ul className="contact_social">
            <li>
                <Link href="#">
                    hello@hulo.dev
                </Link>
                <DiagonalArrowSmall />
            </li>
            <li>
                <Link href="#">
                    squarespace marketplace
                </Link>
                <DiagonalArrowSmall />
            </li>
            <li>
                <Link href="#">
                    instagram
                </Link>
                <DiagonalArrowSmall />
            </li>
            <li>
                <Link href="#">
                    linkedin
                </Link>
                <DiagonalArrowSmall />
            </li>
            <li>
                <Link href="#">
                    facebook
                </Link>
                <DiagonalArrowSmall />
            </li>
        </ul>
    )
}

export default ContactSocial;