import './FeaturedItem.scss'
import Link from 'next/link';
import Image from 'next/image';
import { DiagonalArrow } from '../Icons';


const FeaturedItem = (props) => {
    return (
        <div className="featured-item">
            <div className="featured-item__wrap">
                <div className="featured-image">
                    <Image 
                        src={props.item.img_src}
                        width={props.item.img_width}
                        alt={props.item.title}
                        height={props.item.img_heigth}
                    />
                    <Link  href={props.item.href}>
                        <div className="btn">
                            View Project
                            <span className="span-svg-wrap">
                                <DiagonalArrow/>
                                <DiagonalArrow/>
                            </span>
                        </div> 
                        
                    </Link>
                </div>
                <div className="featured-item-title title">
                    <h5>
                        {props.item.title}
                    </h5>
                </div>
                <div className="featured-item-title subtitle">
                    <p>
                        {props.item.subtitle}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FeaturedItem;