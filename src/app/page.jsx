import Image from "next/image";
import About from "./(components)/(About)/About";
import Featured from "./(components)/(Featured)/Featured";
import Amazing from "./(components)/(Amazing)/Amazing";

export default function Home() {
    return (
        <div>
            <Amazing />
            <About />
            <Featured />
        </div>
    );
}
