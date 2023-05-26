import FeaturedItem from "./FeaturedItem";
import './FeaturedList.scss'
const FeaturedList = (props) => {
    return (
        <div className="featured-list">
            {props.elements.map( (item) => (<FeaturedItem item={item}/>))}
        </div>
    );
}

export default FeaturedList;