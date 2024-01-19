'use client';
import HeaderBanner from "./HeaderBanner";
import SectionImage from "./SectionImage";



const Banner = ({ data }) => {
    console.log(data.banner_image.url);
    return (
        <div className="banner">
            <HeaderBanner data={data}/> 
            <SectionImage data={data.banner_image.url } maxHeight={602}/>
        </div>
    )
}

export default Banner;