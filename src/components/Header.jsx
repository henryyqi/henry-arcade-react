import Button from './Button.jsx'

const Header = ({
    title="Welcome to Henry's Arcade",
    onLogin,
}) => {
  return (
    <header className="header">
        <p> </p>
        {/* <p> </p> */}
        <h1>{title}</h1>
        <Button color="darkgrey" text="Login" onClick={onLogin} />
        {/* <Button color="darkgrey" text="Signup" onClick={onLogin} /> */}
    </header>
  )
}

export default Header