import FeaturedList from "./FeaturedList";
import FeaturedTitle from "./FeaturedTitle";

const Featured = ({ data }) => {
    return (
        <section id="featured" className="section featured">
            <div className="container">
                <div className="wrap">
                    <FeaturedTitle />
                    <FeaturedList elements={data} />
                </div>
            </div>
        </section>
    );
};

export default Featured;
