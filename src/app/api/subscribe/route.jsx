import { NextRequest, NextResponse } from "next/server";


export async function POST( req, res ){
    const { email } = await req.body;
	
    console.log(':::::::',email);
    const FORM_ID = process.env.REACT_APP_CONVERTKIT_FORM_ID;
    const API_KEY = process.env.REACT_APP_CONVERTKIT_API_KEY;
    // This is what needs to be submitted to ConvertKit's API
    const FORM_DATA = { api_key: API_KEY, email };


	if (!email) {
	  return NextResponse.json(JSON.stringify({ error: "Email address is required" }));
	}
    const result = await fetch(
        `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
        {
          method: "POST",
          headers: {"Content-Type": "application/json; charset=utf-8"},
          body: JSON.stringify(FORM_DATA),
        }
      );

      if (result.status >= 400) {
        return NextResponse.json({ error: "Something went wrong." });
      }


    return NextResponse.json({ success: true });

}