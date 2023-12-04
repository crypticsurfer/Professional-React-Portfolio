import "./job.css";

export default function Job(props) {
    let one, two, three;
    one = (props.one) ? <p>- {props.one}</p> : null;
    two = (props.two) ? <p>- {props.two}</p> : null;
    three = (props.three) ? <p>- {props.three}</p> : null;
    return (
        <div className="job">
            <div className="job-title">
                <h3>{props.title}</h3>
                <h3>{props.start} - {props.end}</h3>
            </div>
            <h3>{props.company} | {props.location}</h3>
            {one}
            {two}
            {three}
        </div>
    )
}