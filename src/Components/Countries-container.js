import SearchIcon from '@mui/icons-material/Search';
import "./countriesContainter.css"
import Filter from "./Filter";
import CountryCard from "./CountryCard";
import CountryInformatoin from "./CountryInformatoin";
import { useGlobalContext } from "../Context";
const CountriesContainer = () => {
    const {region , setRegion, countryArray,  countryName, setCountryName,modal} = useGlobalContext()
    function handleSearchChange(e) {
        setRegion("")
        setCountryName(e.target.value)
    }
    
    return ( 
        <main>
            <div className="container__header">
                <div className="search">
                    <SearchIcon />
                    <input onChange={handleSearchChange} type="text" className="search-input" placeholder="Search for a country..." value={countryName}/>
                </div>
                <Filter setRegion={setRegion} region={region}/>
            </div>
            <div className="cards-container">
            {Array.isArray(countryArray) ? countryArray.map((country ,index) => (
                    <div key={index}>
                    {modal ? modal===country ? <CountryInformatoin /> : "" : ""}
                    <CountryCard  country={country} flag={country.flags.png} countryName = {  country.name.common} population = {country.population} region={country.region} capital={country.capital} key={country.code}/>
                    </div>
                )) : "there is no such countries"}
            </div>
            
        </main>
     );
}
 
export default CountriesContainer;