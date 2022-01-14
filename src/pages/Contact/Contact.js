import React from 'react';
import { HomeObjTwo } from './Data';
import {InfoSection} from "../../components"


function Contact() {
    return (
        <div>
            <InfoSection {...HomeObjTwo}/>
        </div>
    )
}

export default Contact;
