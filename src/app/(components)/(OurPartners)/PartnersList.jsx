import PartnersItem from './PartnersItem';
import './PartnersList.scss'

const PARTNERS = [
    {
        title:'Ghost Plugins',
        year:'2021',

    },
    {
        title:'Posture Media',
        year:'2022',

    },
    {
        title:'Sunday Sounds',
        year:'2020',

    },
    {
        title:'Mor Creative',
        year:'2019',

    },
    {
        title:'Design by Altitude',
        year:'2022',

    },
    {
        title:'Lawson House',
        year:'2021',

    }

]


const PartnersList = () => {
    return (
        <ul className="partner-list">
            {PARTNERS.map((item, index) => (<PartnersItem key={index} index={index} item={item} />))}
        </ul>
    );
}

export default PartnersList;