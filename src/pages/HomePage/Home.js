import React from 'react';
import { HomeObjOne } from './Data';
import { HomeObjTwo } from './Data';
import { HomeObjTree } from './Data';
import {InfoSection} from "../../components"

function Home() {
    return (
        <div>
            <InfoSection {...HomeObjOne}/>
            <InfoSection {...HomeObjTwo}/>
            <InfoSection {...HomeObjTree}/>
        </div>
    )
}

export default Home;
