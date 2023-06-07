"use client";
import { usePathname } from "next/navigation";
import Footer from "./(Footer)/Footer";

const ChangeFooter = () => {
    const pathname = usePathname();
    const footer =
        pathname != "/Contact/" ? (
            <Footer copy={true} partners={true} btn={false} />
        ) : (
            <Footer copy={false} partners={true} btn={true} />
        );

    return footer;
};

export default ChangeFooter;
