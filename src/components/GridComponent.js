import React from 'react';
import "bulma/css/bulma.css"
import "./Style/AppStyle.css";

function GridComponent(){

    return(
        <div className="columns is-desktop is-multiline">
        <div className="column is-11 is-flex">
            <div className="small-box">
                <h1>Search Bar Would be here</h1>
                <p><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiquip ex  qui officia deserunt mollit anim id est  est et expe libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus sa </small></p>
            </div>
        </div>
        <div className="column is-1 is-flex">
            <div className="small-box">
                <p>Profile</p>
                <img src = "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt=""/>
            </div>
        </div>
        <div className="column is-full-mobile is-full-tablet is-half-desktop is-three-fifths-widescreen is-three-fifths-fullhd is-flex">
            <div className="small-box">
                <h1>Stocks</h1>
                <img src = "https://www.investopedia.com/thmb/Trp7amUUc3Vk_1g2vWmzNaVUDh4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/340d0d0d8e274d45baaeb4689f50c851-5bfd748646e0fb0051b74c67" alt=""/>
                <p><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiquip ex  qui officia deserunt mollit anim id est laborum</small></p>
            </div>
        </div>
        <div className="column is-full-mobile is-full-tablet is-half-desktop is-two-fifths-widescreen is-two-fifths-fullhd is-flex">
            <div className="small-box">
                <h1>Box2</h1>
                <img src = "https://static.vecteezy.com/system/resources/previews/000/641/301/original/vector-web-login-form-template.jpg" alt=""/>
            </div>
        </div>
        <div className="column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen is-one-third-fullhd is-flex">
            <div className="small-box">
                <h1>Box3</h1>
                <img src = "https://www.shutterstock.com/image-vector/neon-gradient-pie-chart-infographic-260nw-1901473927.jpg" alt=""/>
            </div>
        </div>
        <div className="column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen is-one-third-fullhd is-flex">
            <div className="small-box">
                <h1>Box4</h1>
                <p><small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiquip ex  qui officia deserunt mollit anim id est laborum</small></p>
            </div>
        </div>
        <div className="column is-full-mobile is-full-tablet is-half-desktop is-one-third-widescreen is-one-third-fullhd is-flex">
            <div className="small-box">
                <h1>Die Wetter</h1>
                <img src = "https://community-openhab-org.s3-eu-central-1.amazonaws.com/original/3X/1/e/1e2a2dc2db408c54d6b808ee541373c18aaad2e0.png" alt=""/>

            </div>
        </div>

    </div>
    );
}

export default GridComponent;