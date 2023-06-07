import { DiagonalArrow } from "../Icons";
import './CreatingForm.scss';

const CreatingForm = () => {

    return(
        <form className="form">
            <div className="input_wrap">
                <input type="text" placeholder="Bruse@wayne.com" />
            </div>
            <button type="submit" className="btn">
                subscribe
                <span>
                    <DiagonalArrow />
                    <DiagonalArrow />
                </span>
            </button>
        </form>
    );
}

export default CreatingForm;