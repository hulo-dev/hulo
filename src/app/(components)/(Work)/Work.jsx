import './Work.scss';
const { default: WorkList } = require("./WorkList")

const Work = () => {
    return (
        <div className="works">
            <div className="container">
                <div className="works__wrap">
                    <div className="work-name">
                        <span className="name">
                            More Works
                        </span>
                    </div>
                    <WorkList />
                </div>
            </div>
        </div>
    )
}

export default Work;