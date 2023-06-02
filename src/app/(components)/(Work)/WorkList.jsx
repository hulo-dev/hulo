import WorkItem from "./WorkItem";
import './WorkList.scss';

const WORK__ITEM = [
    {
        title:'Sunday Sounds',
        tags:'Shopify,UI/UX',
        href:'#'
    },
    {
        title:'Fades To Nothing',
        tags:'Shopify,UI/UX',
        href:'#'
    },
    {
        title:'J.C.LUTZ sneakers',
        tags:'Shopify,UI/UX',
        href:'#'
    },
    {
        title:'Heads of state',
        tags:'Shopify,UI/UX',
        href:'#'
    },
    {
        title:'Study Britain',
        tags:'Shopify,UI/UX',
        href:'#'
    }
]



const WorkList = (props) => {
    return(
       <ul className="more-list">
         {WORK__ITEM.map((item, index) => (<WorkItem key={index} item={item}/>))}
       </ul> 
    );
}

export default WorkList;