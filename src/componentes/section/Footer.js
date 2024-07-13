import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer() {
    return (
        <div className ={styles.footer}>
            <ul>
                <li><a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/danrleylinhares/'><FaInstagram size={30}/></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href='https://github.com/DanrleyLinhares/'><FaGithub size={30}/></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/danrleylinhares/'><FaLinkedin size={30}/></a></li>
            </ul>
            <p>danrleylinhares@gmail.com</p>
            <p> Danrley Linhares Batista © 2024 </p>
        </div>
    )
}

export default Footer