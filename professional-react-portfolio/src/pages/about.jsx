import profilepic from "../assets/profile.jpeg";
import "./About.css";
export default function About() {
    return (
        <div className="base">
            <div className="icon-container">
                <img src={profilepic} alt="Profile picture" width={400} height={400}/>
                <h2>25 | Full Stack Web Developer</h2>
                <h2>Ogden, Utah</h2>
            </div>
            <div className="text-container">
                <h1>About Connor</h1>
                <p>I graduated University of Portland with a Organizational Communications degree. I have always enjoyed the 
                    tech world and decided to try my hand at web development and have had a great time in the full stack 
                    course provided by University of Utah. I am really interested in getting into game design. I would love to 
                    be the director of a game or in the trenches coding and designing the personally. App creation is also something
                    that I would love to work on and am hoping to tackle when this course is over! Specifically I have a great idea 
                    for an app involving food trucks.
                </p>
            </div>
        </div>
    )
}