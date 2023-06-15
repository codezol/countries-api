import { useGlobalContext } from "../Context"
import "./countryCard.css"
const CountryCard = ({countryName,capital, population, region,flag,country}) => {
    const {setModal,modal} = useGlobalContext()
    const handleCountryClick = () => {
        setModal(country)
    }
    return ( 
        <div className="country-card">
            <img src={flag} alt="" onClick={handleCountryClick} />
           <div className="discribtion">
            <h4>{countryName}</h4>
                <span>population : {population}</span>
                <span>region : {region}</span>
                <span>capital : {capital}</span>   
                </div>  
        </div>
     );
}
 
export default CountryCard;