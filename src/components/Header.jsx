import Button from './Button.jsx'

const Header = ({
    title="Welcome to Henry's Arcade",

}) => {
  return (
    <header className="header">
        <h1>{title}</h1>
        <Button color="darkgrey" text="Login" />
    </header>
  )
}

export default Header