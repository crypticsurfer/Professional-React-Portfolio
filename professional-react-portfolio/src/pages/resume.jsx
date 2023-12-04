import "./Resume.css";
import Job from "../components/job";
import resume from "../assets/resume.pdf";

function downloadResume() {
    const pdfUrl = resume;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "connor-resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

export default function Resume() {
    return (
        <div className="resume">
            <div className="content-box">
                <h1>Resume</h1>
                <button href="../assets/resume.pdf" onClick={downloadResume}>Download</button>
                <div className="doc">
                    <h2>Summary</h2>
                    <p>
                        Professional software engineer with 2+ years of application development experience.
                        Programming experience in Python, React, and PHP. Enjoys collaborating in a team environment
                        to develop new and upgrade existing products. Bachelor's Degree in computer science.
                    </p>
                    <h2>Skills</h2>
                    <p>Programming: Python, React, Node.js, JavaScript, PHP, MongoDB, SQL, C++, HTML, Dart, Java, Bash</p>
                    <p>Applications: JIRA, Docker, Kubernetes, Helm, Postman, Confluence, PHPStorm, Visual Studio Code</p>
                    <h2>Experience</h2>
                    <Job title="Full Stack Engineer II" start="May 2020" end="Oct 2022"
                        company="Sage Intacct" location="Beaverton, OR"
                        one="Developed project contract creation onto PHP web application for construction financial services"
                        two="Documented API changed in 12-page document with use cases and presented work in formal review"
                        three="Feature became key highlight of the accounting product and led to a 200% increse of total customers"
                    />
                    <h2>Education</h2>
                    <div className="education-title">
                        <h3>University of Portland</h3>
                        <h3>May 2020</h3>
                    </div>
                    <p>Bachelor of Science, Computer Science | Minor: Philosophy</p>
                </div>
            </div>
        </div>
    )
}