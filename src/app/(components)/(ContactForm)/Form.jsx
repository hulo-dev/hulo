import { DiagonalArrow } from "../Icons";
import "./Form.scss";


const Form = () => {

    return(
        <form className="contact-form">
            <div className="field">
                <label>Your name</label>
                <div className="input-wrap">
                    <input className="text-field" type="text" placeholder="Your name"/>
                </div>
            </div>
            <div className="field">
                <label>Your email*</label>
                <div className="input-wrap">
                    <input className="text-field" type="email" required placeholder="Your email*"/>
                </div>
            </div>
            <div className="field">
                <div className="input-wrap">
                    <textarea className="text-field" placeholder="Message*"></textarea>
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
    )
}

export default Form;