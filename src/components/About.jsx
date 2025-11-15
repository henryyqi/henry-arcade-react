import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';

const About = () => {
  return (
    <div className='about-container'>
      <h3>Connect with Me!</h3>
      <div className='about-icons-container'>
        <FaGithub style={{cursor:'pointer'}} size={30} onClick={() => window.open("https://github.com/henryyqi")}/>
        <FaLinkedin style={{cursor:'pointer'}} size={30} onClick={() => window.open("https://www.linkedin.com/in/henry-qi-01/")}/>
        <CgWebsite style={{cursor:'pointer'}} size={30} onClick={() => window.open("https://henryyqi.weebly.com")}/>
      </div>
    </div>
  )
}

export default About