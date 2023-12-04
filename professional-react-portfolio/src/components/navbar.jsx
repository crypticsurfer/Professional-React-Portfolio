import { NavLink } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
    return (
        <div className='nav'>
            <h1 className="name">Connor Bishop</h1>
            <section className='links'>
                <NavLink to='/about' className='link'>About Me</NavLink>
                <NavLink to='portfolio' className='link'>Portfolio</NavLink>
                <NavLink to='resume' className='link'>Resume</NavLink>
                <NavLink to='contact' className='link'>Contact Me</NavLink>
            </section>
        </div>
    )
}