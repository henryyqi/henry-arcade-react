import NavBar from "../components/NavBar"
import Header from "../components/Header"
import Games from "./Games"
import {useState} from 'react';
import Login from "../components/Login.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
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

export default Home