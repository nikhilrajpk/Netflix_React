import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className="footer">
        

        <div className="call">
            <h4>Questions? Call</h4>
            <p>000-800-919-1694</p>
        </div>

       <div className="end">

            <div className="one">
                <p>FAQ</p>
                <p>Investor Relations</p>
                <p>Privacy</p>
                <p>Speed Test</p>
            </div>

            <div className="two">
                <p>Help Center</p>
                <p>Jobs</p>
                <p>Cookie Preferences</p>
                <p>Legal Notices</p>
            </div>

            <div className="three">
                <p>Account</p>
                <p>Ways to Watch</p>
                <p>Corporate Information</p>
                <p>Only on Netflix</p>
            </div>

            <div className="four">
                <p>Media Centre</p>
                <p>Terms of Use</p>
                <p>Contact Us</p>
            </div>

        </div>
        <button id="lang-select2">
            {/* <img src="images/Language icon.svg"/> */}
        <select className="select">
            <option>English</option>
            <option>हिंदी</option>
        </select>
        {/* <img src="https://w7.pngwing.com/pngs/934/782/png-transparent-arrow-chevron-computer-icons-font-awesome-or-angle-hand-black-thumbnail.png"/> */}
        </button>
       
       <h4 id="text">Netflix India</h4>

    </div>

    )
}

export default Footer
