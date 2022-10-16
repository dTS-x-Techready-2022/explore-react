import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Banner = () => {
    
    const activeMenu = useSelector( (state) => state.activeMenu.value );

    return (
        <>
            <div className="banner-title">
                Timer
            </div>
            
            <div className="banner-menu">
                {activeMenu === "home"
                    ? <strong className="menu-navbar-text">Home</strong>
                    : <Link to="/home" className="menu-navbar">Home</Link>
                }

                {activeMenu === "settings"
                    ? <strong className="menu-navbar-text">Settings</strong>
                    : <Link to="/settings" className="menu-navbar">Settings</Link>
                }

                {activeMenu === "about"
                    ? <strong className="menu-navbar-text">About</strong>
                    : <Link to="/about" className="menu-navbar">About</Link>
                }
            </div>
        </>
    );
}