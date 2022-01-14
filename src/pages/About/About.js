import React from 'react';
import {HomeObjTree} from './Data';
import {InfoSection} from "../../components";

function About() {
    return (
        <div>
            <InfoSection {...HomeObjTree}/>
        </div>
    )
}

export default About;
