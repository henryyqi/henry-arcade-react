import NavBar from "../components/NavBar"
import Header from "../components/Header"
import Games from "./Games"

const Home = () => {
  return (
    <div>
        {/* Add a login function when the login button is clicked */}
        <Header />
        <NavBar />
        <Games />

    </div>
  )
}

export default Home