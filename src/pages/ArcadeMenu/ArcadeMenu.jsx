import {useState} from 'react';
import NavBar from "../../components/layout/NavBar.jsx"
import Header from "../../components/layout/Header.jsx"
import Games from "./Games.jsx"
import Login from "../../components/layout/Login.jsx";
import Footer from "../../components/layout/Footer.jsx";

const ArcadeMenu = () => {
    const [showLogin, setShowLogin] =  useState(false);
    
    // Toggle login form visibility
    const enterLogin = () => {
        setShowLogin(!showLogin);
    }

    return (
    <div>
        {/* Add a login function when the login button is clicked */}
        <Header onLogin={() => setShowLogin(!showLogin)} />
        {showLogin && <Login onLogin={enterLogin} />}
        <NavBar />
        <Games />
        <Footer />

    </div>
  )
}

export default ArcadeMenu