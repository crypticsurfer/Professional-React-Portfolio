import profilepic from "../assets/profile.jpeg";
import "./Portfolio.css";
import Project from "../components/project";

export default function Portfolio() {
    return (
        <div className="project-column">
            <div className="project-row">
                <Project img={profilepic} title="Project A" 
                description="Description of project" 
                href="https://crypticsurfer.github.io/API-Weather-Dashboard/" repo="https://github.com/crypticsurfer/API-Weather-Dashboard"/>
                <Project img={profilepic} title="Project B" 
                description="Description of project" 
                href="https://github.com" repo="https://github.com"/>
            </div>
            <div className="project-row">
                <Project img={profilepic} title="Project C" 
                description="Description of project" 
                href="https://github.com" repo="https://github.com"/>
                <Project img={profilepic} title="Project D" 
                description="Description of project" 
                href="https://github.com" repo="https://github.com"/>
            </div>
            <div className="project-row">
                <Project img={profilepic} title="Project E" 
                description="Description of project" 
                href="https://github.com/crypticsurfer/Professional-READme-Generator-" repo="https://github.com/crypticsurfer/Professional-READme-Generator-"/>
                <Project img={profilepic} title="Project F" 
                description="Description of project" 
                href="https://github.com/crypticsurfer/Professional-Logo-Maker" repo="https://github.com/crypticsurfer/Professional-Logo-Maker"/>
            </div>
        </div>
    )
}