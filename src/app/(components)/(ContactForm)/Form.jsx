"use client";
import axios from "axios";
import { useState } from "react";
import { DiagonalArrow } from "../Icons";
import "./Form.scss";

const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const body =
        {
           
            'q3_yourName':name,
            'q4_yourEmail':email,
            'q5_message':message,
        };
        try {

            let api = axios.create({baseURL:"https://eu-submit.jotform.com/submit", headers:{credentials: 'include'}});
            const res = await api.post("/222884108909060/", body);

            console.log("forme");
            console.log(res);
        } catch (error) {
            console.log("err", error);
        }
    };

    return (
        <form onSubmit={onSubmitHandler} className="contact-form">
            <div className="field">
                <label>Your name</label>
                <div className="input-wrap">
                    <input
                        className="text-field"
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
            </div>
            <div className="field">
                <label>Your email*</label>
                <div className="input-wrap">
                    <input
                        className="text-field"
                        type="email"
                        required
                        placeholder="Your email*"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </div>
            <div className="field">
                <div className="input-wrap">
                    <textarea
                        required
                        onChange={(e) => setMessage(e.target.value)}
                        className="text-field"
                        placeholder="Message*"
                        value={message}
                    ></textarea>
                </div>
            </div>
            <div className="submit">
                <button type="submit" className="btn">
                    Submit
                    <span>
                        <DiagonalArrow />
                        <DiagonalArrow />
                    </span>
                </button>
            </div>
        </form>
    );
};

export default Form;
