import "./Project.css";

export default function Project(props) {
    return (
        <div className="project">
            <img className="project-icon" src={props.img} alt="Profile picture" width={180} height={180} />
            <div className="project-text">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <div className="project-links">
                    <p><a href={props.href}>View Project</a>  |  <a href={props.repo}>Github Repository</a></p>
                </div>
            </div>
        </div>)
}