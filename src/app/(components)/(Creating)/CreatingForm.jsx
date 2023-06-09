'use client';

import { useRef } from "react"
import { DiagonalArrow } from "../Icons";
import './CreatingForm.scss';

 

const CreatingForm = () => {
    const inputRef = useRef(null);
    
 






    
    const onSubmit = async (e) => {
        e.preventDefault();
      const email = inputRef.current.value;
      
      const res  = await fetch(`/api/subscribe?email=${email}`);  
      console.log(res);
    }


    return(
        <div>
         
            
             <form onSubmit={onSubmit} className="form">
                <div className="input_wrap">
                    <input
                        ref={inputRef} 
                        type={"email"}
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
}

export default CreatingForm;