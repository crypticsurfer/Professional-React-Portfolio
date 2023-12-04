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
                        Well versed in communication and team building. Would like to enter the tech industry
                        through this full stack web development bootcamp. Enjoys collaborating in a team environment
                        to develop new and upgrade existing products and websites. Bachelor's Degree Organizational Communications
                    </p>
                    <h2>Skills</h2>
                    <p>Programming: React, Node.js, JavaScript, MongoDB, SQL, HTML, Bash</p>
                    <p>Applications: Visual Studio Code</p>
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
                        <h3>May 2021</h3>
                    </div>
                    <p>Bachelor of Science, Organizational Communications</p>
                </div>
            </div>
        </div>
    )
}