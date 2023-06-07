import Image from "next/image";
import About from "./(components)/(About)/About";
import Featured from "./(components)/(Featured)/Featured";
import Amazing from "./(components)/(Amazing)/Amazing";
import Work from "./(components)/(Work)/Work";
import OurPartners from "./(components)/(OurPartners)/OurPartners";
import Service from "./(components)/(Service)/Service";
import Feedback from "./(components)/Feedback/Feedback";
import FooterSocial from "./(components)/(FooterSocial)/FooterSocial";
import Creating from "./(components)/(Creating)/Creating";

export default function Home() {
    return (
        <div>
            <Amazing />
            <About />
            <Featured />
            <Work />
            <Service />
            <OurPartners />
            <Feedback />
            <Creating />
            <FooterSocial class_name="footer-social"/>
        </div>
    );
}
