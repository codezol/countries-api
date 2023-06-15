import { ArrowDownwardSharp } from "@mui/icons-material";
import { useGlobalContext } from "../Context";
import "./countryInformation.css"


const CountryInformatoin = () => {
    const {modal, setModal} = useGlobalContext()
    const curruncy = Object.values(Object.values(modal.currencies))[0].name;
    
    const native = Object.values(modal.name.nativeName)[0].common;
    
    function handleBackClick() {
        setModal("")
        document.body.classList.remove('overflow_hidden')
    }
    if(modal){
        window.scrollTo(0, 0);
        document.body.classList.add('overflow_hidden')
    }
   
    return ( 
    <div className="country__information">
        <div className="back" onClick={handleBackClick}>
            <ArrowDownwardSharp className="arrow"/>
            <button >Back</button>
        </div>
        <div className="details_container">
        <img src={modal.flags.png} alt=""/>
        
            
            <div className="detail">
                <h3>{modal.name.common}</h3>
          <div>
          <div>
                <span>Naitve Name : <p>{native}</p></span>
                <span>population : <p>{modal.population}</p></span>
                <span>Region : <p>{modal.region}</p></span>
                <span>Sub Region : <p>{modal.subregion}</p></span>
                <span>Capital : <p>{modal.capital}</p></span>
            </div>
            <div>
                <span>Currencies : <p>{curruncy}</p></span>
                <span>Languages : <p>{(Object.values(modal.languages).join(", "))}</p></span>
            </div>
          </div>
                
             
             
            </div>
        </div>
    </div> 
    );
}
 
export default CountryInformatoin;