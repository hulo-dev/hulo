import Image from "next/image";

const Partners = ({ class_name }) => {
    return (
        <div className={class_name}>
            <a
                className="img-dark"
                target="_blank"
                href="https://www.shopify.com/free-trial?irclickid=QXKzuSR0xzC5WYT1DM1U8zi7UkDVD62APVKQyQ0&irgwc=1&partner=2454069&affpt="
            >
                <Image
                    className="img-dark"
                    width={177}
                    height={28}
                    src="shopify-partners-dark.png"
                    alt="#"
                />
            </a>
            <a
                className="img-dark"
                target="_blank"
                href="https://www.squarespace.com/designer/profile/4391176"
            >
                <Image
                    className="img-dark"
                    width={159}
                    height={28}
                    src="circle-dark.png"
                    alt="#"
                />
            </a>
            <a
                className="img-dark"
                target="_blank"
                href="https://www.shopify.com/free-trial?irclickid=QXKzuSR0xzC5WYT1DM1U8zi7UkDVD62APVKQyQ0&irgwc=1&partner=2454069&affpt="
            >
                <Image
                    className="/img-dark"
                    width={109}
                    height={28}
                    src="shopify-plus-dark.png"
                    alt="#"
                />
            </a>
        </div>
    );
};

export default Partners;
