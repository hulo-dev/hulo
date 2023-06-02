import { WorkArrowRight } from '../Icons';
import './WorkItem.scss';

const { default: Link } = require("next/link")


const WorkItem = ({ item }) => {
    
    const tags = item.tags.split(',');
    console.log(tags,1);

    return (
        <li className="more-item">
            <Link href={item.href}>
                <div className="more-item__wrap">
                    <div className="more-title title">
                        <h4>
                            {item.title}
                        </h4>
                    </div>
                   
                    <div className="more-item-tags">
                        {tags.map((tag, index) => (<span key={index}>{tag}</span>))}
                    </div>
                    <div className="more-icon">
                        <WorkArrowRight />
                    </div>
                    
                </div>
            </Link>
        </li>
    );
}

export default WorkItem;