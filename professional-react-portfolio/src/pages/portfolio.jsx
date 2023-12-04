import profilepic from "../assets/profile.jpeg";
import "./Portfolio.css";
import Project from "../components/project";

export default function Portfolio() {
    return (
        <div className="project-column">
            <div className="project-row">
                <Project img={profilepic} title="Project A" 
                description="A Quick weather lookup for the week as well as the current day." 
                href="https://crypticsurfer.github.io/API-Weather-Dashboard/" repo="https://github.com/crypticsurfer/API-Weather-Dashboard"/>
                <Project img={profilepic} title="Project B" 
                description="A movie watchlist application. You can add and remove movies to your watchlist as well as look them up by 
                genre and actor." 
                href="movie-maestros-production.up.railway.app" repo="https://github.com/crypticsurfer/Movie-Maestros"/>
            </div>
            <div className="project-row">
                <Project img={profilepic} title="Project C" 
                description="A Quick work day organizer for the day." 
                href="https://crypticsurfer.github.io/Work-day-organizer/" repo="https://github.com/crypticsurfer/Work-day-organizer"/>
                <Project img={profilepic} title="Project D" 
                description="A website designed to allow you to make a D&D character quickly as well as give you some basic
                info of the game." 
                href="https://jaredboehm.github.io/dnd-quick/" repo="https://github.com/JaredBoehm/dnd-quick"/>
            </div>
            <div className="project-row">
                <Project img={profilepic} title="Project E" 
                description="A quick and easy way to generate READme files for your projects" 
                href="https://github.com/crypticsurfer/Professional-READme-Generator-" repo="https://github.com/crypticsurfer/Professional-READme-Generator-"/>
                <Project img={profilepic} title="Project F" 
                description="A quick logo maker for any upcoming projects." 
                href="https://github.com/crypticsurfer/Professional-Logo-Maker" repo="https://github.com/crypticsurfer/Professional-Logo-Maker"/>
            </div>
        </div>
    )
}