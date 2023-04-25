import React from 'react';
import "bulma/css/bulma.css"
import "./Style/AppStyle.css";
import Form from "./Form.js";
import Logged from "./Logged.js";



function LoginComponent(){



    return(
        <div className="Login"> 
            <Form/>
            <Logged/>
        </div>
    );
}

export default LoginComponent;