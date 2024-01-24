import React from 'react'
import "./Btn4.css"

const Btn4 = ({link}) => {
return (
    <div className="btn">
    <a href={link}>
    <button>
    S T A R T
    <div id="clip">
        <div id="leftTop" className="corner"></div>
        <div id="rightBottom" className="corner"></div>
        <div id="rightTop" className="corner"></div>
        <div id="leftBottom" className="corner"></div>
    </div>
    <span id="rightArrow" className="arrow"></span>
    <span id="leftArrow" className="arrow"></span>
</button>
</a>
</div>
)
}

export default Btn4
