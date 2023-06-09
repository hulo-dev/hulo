import { NextResponse } from "next/server";
export async function GET(req, res){
    /*const { email } = req.query;
    console.log(email);
   /* if (!email) {
        return res.status(400).json({error: "Email is required."});
    }
    
    try {
        const FORM_ID = process.env.REACT_APP_CONVERTKIT_FORM_ID;
        const API_KEY = process.env.REACT_APP_CONVERTKIT_API_KEY;

        const data = {email, API_KEY };

        const response = await fetch(`https://api.convertkit.com/v3/form/${FORM_ID}/subscribe`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json"}

        });

        if (response.status >= 400) {
            return NextResponse.json({error: "There was an error subscribing to the list"});
        }

        return NextResponse.json({ error: '' });

    } catch (error) {

        return NextResponse.json({ error: error.message || error.toString() });

    }*/
  //  return NextResponse.json({ h });
   // const { email } = req.query;
   /* if (!email) {
        return NextResponse.json({error:"нет емейла" });
    }*/
   // return NextResponse.json({ response:"выполнено гет" });
    return NextResponse.json({ response:JSON.stringify(req)});
}

export async function POST(req){

    return NextResponse.json({ response:"выполнено пост" });

}