
import Partners from "../Partners";
import Copyright from "./Copyright";
import './Footer.scss'
import FooterBtn from "./FooterBtn";

const Footer = ({ btn, copy, partners }) => {
   
    return(
        <footer className="footer"> 
            <div className="container">
                <div className="footer__wrap">
                    {copy && (<Copyright />)}
                    {partners && (<Partners class_name="footer-parters" />)}
                    {btn && (<FooterBtn />)}
                </div>
            </div>
        </footer>
    );
}


export default Footer;