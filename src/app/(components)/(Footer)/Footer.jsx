
import Partners from "../Partners";
import Copyright from "./Copyright";
import './Footer.scss'
import FooterBtn from "./FooterBtn";

const Footer = ({ btn, copy, partners, class_name=''}) => {
   
    return(
        <footer className={class_name ? 'footer ' +  class_name : 'footer '}> 
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