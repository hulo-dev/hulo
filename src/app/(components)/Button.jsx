import Link from "next/link";


const Button = ({link, name}) => {

    return (
        <Link href={link}>
            {name}
            <span>
                svg
                svg
            </span>
        </Link>
    )
    
}

export default Button;