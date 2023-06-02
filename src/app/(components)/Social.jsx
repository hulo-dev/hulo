import Link from "next/link";
import { DesignIcon, FacebookIcon, InstagramIcon, LinkedinIcon } from "./Icons";

const Social = ({ class_name }) => {
    return(
        <div className={class_name}>
            <ul>
                <li>
                    <Link href="#"> 
                        <InstagramIcon />
                    </Link>
                </li>
                <li>
                    <Link href="#"> 
                        <LinkedinIcon />
                    </Link>
                </li>
                <li>
                    <Link href="#"> 
                        <FacebookIcon />
                    </Link>
                </li>
                <li>
                    <Link href="#"> 
                        <DesignIcon />
                    </Link>
                </li>
            </ul>
        </div>
    );
}


export default Social;