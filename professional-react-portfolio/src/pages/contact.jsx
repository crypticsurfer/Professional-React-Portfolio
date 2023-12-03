import "./Contact.css";

export default function Contact() {
    return (
        <div className="contact">
            <div className="content-box">
                <h1>Contact</h1>
                <div className="width-box">
                    <h2>Name:</h2>
                    <input></input>
                </div>

                <div className="width-box">
                    <h2>Email:</h2>
                    <input></input>
                </div>

                <div className="message">
                    <h2>Message:</h2>
                    <textarea></textarea>
                </div>

                <button>Submit</button>
            </div>
        </div>
    )
}