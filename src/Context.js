import React, {useContext,useState,useEffect} from "react"
const AppContext = React.createContext()
const AppProvider = ({children}) => {
    const [lightTheme, setLightTheme] = useState(false);
    const [region , setRegion] = useState(false)
    const [countryArray, setCountryArray ]= useState([])
    const [countryName, setCountryName] = useState("")
    const URL =" https://restcountries.com/v3.1/name/";
    const allURL = "https://restcountries.com/v3.1/all";
    const regionURL = "https://restcountries.com/v3.1/region/"
    const [modal, setModal] = useState("");
    const fetchCountries = async (url, name = "") => {
            const res = await fetch(url + name);
            const data = await res.json()
            setCountryArray(data)
        }

    
   
    useEffect( () => {
        if(region){
            fetchCountries(regionURL , region)
        }else if(!countryName){
            fetchCountries(allURL)
        }else{
            fetchCountries(URL ,countryName)
        }
        
    }, [countryName,region, setModal]
        
    )
    return ( 
        <AppContext.Provider value={{lightTheme,setLightTheme,region , setRegion, countryArray, setCountryArray, countryName, setCountryName, setModal, modal}}>
            {children}
            </AppContext.Provider>
     );
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}
export {AppContext, AppProvider};