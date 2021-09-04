import "./Contacts.css";

export default function Contacts() {
    return(
        <div className="contactsWrapper">
            <h1>ORGANIZER</h1>
            <div className="contactsWrapper__gitBlock">
                <a className="contactsWrapper__gitBlock_link" href="https://github.com/Baga9898">Baga9898</a>
                <img className="contactsWrapper__gitBlock_userIcon" src="../../img/gitUserIcon.png" alt="User icon"/>
            </div>
        </div>
    );
}