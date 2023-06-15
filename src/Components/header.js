import { useGlobalContext } from "../Context";
import "./Header.css"
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
const Header = () => {
    const {lightTheme,setLightTheme} = useGlobalContext()
    function handleColorThemeClick(){
        setLightTheme(!lightTheme)
    }
    return ( 
    <header>
        where in the world?
        <div className="dark-light-color">
            <NightlightRoundIcon onClick={handleColorThemeClick} className="moon"/>
            <span>Dark Mode</span>
        </div>
    </header> 
    
    );
}
 
export default Header;