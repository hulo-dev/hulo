import Link from "next/link";
import { DiagonalArrow } from "./Icons";


export const Button = ({link, name}) => {

    return (
        <Link className="btn" href={link}>
            {name}
            <span>
                <DiagonalArrow/>
                <DiagonalArrow/>
            </span>
        </Link>
    )
    
}

