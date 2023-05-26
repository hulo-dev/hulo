import FeaturedList from "./FeaturedList";
import FeaturedTitle from "./FeaturedTitle";



const FEATURED_ELEMENTS = [
    {
        title: 'Florentine Kitchen Knives',
        subtitle: 'A project for Florentine kitchen knives shop.',
        img_src: '/a4.png',
        img_width:'800',
        img_heigth:'620',
        href: '#'
    },
    {
        title: 'Sunday Sounds',
        subtitle: 'A project for Florentine kitchen knives shop.',
        img_src: '/a3.png',
        img_width:'800',
        img_heigth:'780',
        href: '#'
    },
    {
        title: 'J.C.Lutz sneakers',
        subtitle: 'A project for Florentine kitchen knives shop.',
        img_src: '/a2.png',
        img_heigth:'780',
        img_width:'800',
        href: '#'
    },
    {
        title: 'Florentine Kitchen Knives',
        subtitle: 'A project for Florentine kitchen knives shop.',
        img_src: '/a1.png',
        img_width:'800',
        img_heigth:'620',
        href: '#'
    }
]


const Featured = () => {
    return (
        <section className="section featured">
            <div className="container">
                <div className="wrap">
                    <FeaturedTitle/>
                    <FeaturedList elements={FEATURED_ELEMENTS}/>
                </div>
            </div>
        </section>
    );
};

export default Featured;
