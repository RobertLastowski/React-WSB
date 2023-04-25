import React from 'react';
import "bulma/css/bulma.css"
import "./Style/AppStyle.css";

function AboutPage(){
    return(
        <div className="columns is-desktop is-multiline">
        <div className="column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen is-one-third-fullhd is-flex">
            <div className="small-box">
                <h1>Die Wetter</h1>
                <img src = "https://community-openhab-org.s3-eu-central-1.amazonaws.com/original/3X/1/e/1e2a2dc2db408c54d6b808ee541373c18aaad2e0.png" alt=""/>

            </div>
        </div>

    </div>
    );
}

export default AboutPage;