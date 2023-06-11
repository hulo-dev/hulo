"use client";
import { DiagonalArrow } from "../Icons";
import "./CreatingForm.scss";
import axios from "axios";

const url = process.env.API_CONVERTKIT_SUBSCRIBE;
const api_key = process.env.REACT_APP_CONVERTKIT_API_KEY;

const CreatingForm = () => {
    const onSubscribe = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const data = { email, api_key };

        try {
            const res = await axios.post(url, data);
            console.log(res.data);
        } catch (e) {
            console.log(e.response.data.message);
        }
    };

    return (
        <div>
            <form onSubmit={onSubscribe} method="post" className="form">
                <div className="input_wrap">
                    <input
                        type="email"
                        name="email"
                        placeholder="Bruse@wayne.com"
                        autoComplete="email"
                        required
                    />
                </div>
                <button type="submit" className="btn">
                    subscribe
                    <span>
                        <DiagonalArrow />
                        <DiagonalArrow />
                    </span>
                </button>
            </form>
        </div>
    );
};

export default CreatingForm;
