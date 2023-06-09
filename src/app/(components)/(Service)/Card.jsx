"use client";
import Image from "next/image";
import { Button } from "../Button";
import { Checked } from "../Icons";
import { useState } from "react";

const Card = ({ data }) => {
    const [active, setActive] = useState(false);
    const activeCard = () => {
        let isActive = active ? false : true;
        setActive(isActive);
    };
    return (
        <div className={active ? "card card--active" : "card"}>
            <span onClick={activeCard}>
                <Checked />
            </span>

            <p className="card__title">{data.title}</p>
            <div className="card__body_wrapper">
                <div className="card__body">
                    <p className="card__text">{data.text}</p>
                    <div className="gfhf">
                        <Button link="#" name="Start a project" type="text" />
                        <span className="border"></span>
                        <div className="card__portfolio">
                            <div className="card__portfolio_text">
                                <TextWithSup text="TIMELINE 4-6" sup="WEEKS" />
                                <TextWithSup text="CASES" sup="65" />
                            </div>
                            <div className="card__portfolio_img">
                                <Image height={50} width={50} src="/b1.png" />
                                <Image height={50} width={50} src="/b2.png" />
                                <Image height={50} width={50} src="/b3.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;

const TextWithSup = ({ text, sup }) => {
    return (
        <>
            <p className="sup__text">
                {text}
                <span>
                    <sup className="sup__sup">{sup}</sup>
                </span>
            </p>
        </>
    );
};
