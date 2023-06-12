import FeaturedItem from "./FeaturedItem";
import "./FeaturedList.scss";

const FeaturedList = ({ elements }) => {
    return (
        <div className="featured-list">
            {elements.map((item) => (
                <FeaturedItem item={item.data} />
            ))}
        </div>
    );
};

export default FeaturedList;
