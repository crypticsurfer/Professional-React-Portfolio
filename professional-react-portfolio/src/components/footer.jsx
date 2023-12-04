import './Footer.css';
import git from '../assets/github.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';

export default function Footer() {
    return (
        <div className="footer">
            <a href="https://github.com/crypticsurfer" target="_blank"><img src={git} width={100} height={100} /></a>
            <a href="www.linkedin.com/in/connor-f-bishop" target="_blank"><img src={linkedin} width={100} height={100} /></a>
            <a href="https://instagram.com" target="_blank"><img src={instagram} width={100} height={100} /></a>
        </div>
    )
}