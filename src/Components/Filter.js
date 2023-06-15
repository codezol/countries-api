import { useState } from "react";
import "./Filter.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useGlobalContext } from "../Context";
const Filter = () => {
    const {setRegion } = useGlobalContext()
    const [clicked, setClicked] = useState(false)
    function handleArrowClick(){
        setClicked(!clicked)
    }
    function handleRegionClick(e){  
        setRegion(e.target.textContent)
        
    }
    return ( 
        <div className="filter">
            <div className="filters__container">
                <span>Filter by region</span> 
                <KeyboardArrowDownIcon onClick={handleArrowClick} className={clicked ? "rotate arrow" : "arrow"}/>
            </div>
            <ul className={clicked ? "" : "hide"} onClick={handleRegionClick}>
                    <li >Africa</li>
                    <li  >America</li>
                    <li >Asia</li>
                    <li >Europe</li>
                    <li >Oceania</li>
                </ul>
        </div>
     );
}
 
export default Filter;