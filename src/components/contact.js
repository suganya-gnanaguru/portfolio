import React from 'react';
import 'font-awesome/css/font-awesome.min.css';


export default function Contact() {
    return (
        <section className="darkTheme text-2xl" id="contact">
            <div className="heading underline font-extrabold">Contact Me</div>
            <div className="text-base w-2/3 my-[2%]">
                    <p className="text-left"><i className="fa fa-envelope" style={{"fontSize":"12px"}}></i> suganyagnanaguru92@gmail.com</p>
                    <p className="text-left"><i className="fa fa-mobile" style={{"fontSize":"22px"}}></i> +91 9655332265</p>
                    <p className="text-left"><i className="fa fa-linkedin" style={{"fontSize":"22px"}}></i> <a rel="rel" target="_blank" href="https://www.linkedin.com/in/suganya-gnanaguru/">LinkedIn</a></p>
            </div>
        </section>
    );
} ;