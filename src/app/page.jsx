import Image from "next/image";
import About from "./(components)/(About)/About";
import Featured from "./(components)/(Featured)/Featured";
import Amazing from "./(components)/(Amazing)/Amazing";
import Work from "./(components)/(Work)/Work";
import OurPartners from "./(components)/(OurPartners)/OurPartners";
import Feedback from "./(components)/Feedback/Feedback";

export default function Home() {
    return (
        <div> 
            <Amazing />
            <About />
            <Featured />
            <Work />
            <OurPartners />
            <Feedback />
        </div>
    );
}
