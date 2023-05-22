import React from "react";
import './Projects.css'

export default function Projects(){
   return(
    <div id='projects-div'>
        <table>
            <tbody>
                <tr>
                    <td>
                        <a href="https://github.com/dszwarc/Battlescript">
                            <h3>BattleScript</h3>
                            <img className="proj-preview" src="https://i.imgur.com/J11b2kZ.png" alt="" />
                        </a>
                    </td>
                   
                   
                    <td>
                        <a href="https://github.com/dszwarc/Racquet-Reviewer">
                            <h3>Racquet-Reviewer</h3>
                            <img className="proj-preview" src="https://camo.githubusercontent.com/bb017c4307610607c9f053c92bc25767c5f5393275b8d5af71d97c41ec225c07/68747470733a2f2f692e696d6775722e636f6d2f614c45706b324c2e6a7067" alt="" />
                        </a>
                    </td>
                    
                </tr>
                <tr>
                    <td>
                        <a href="https://github.com/dszwarc/DEVentful">
                            <h3>DEVentful</h3>
                            <img className="proj-preview" src="https://camo.githubusercontent.com/5d18f8624d3f13e3ab5cdf88766fdc0406445a921c8b74dfb404275d92e761c9/68747470733a2f2f692e696d6775722e636f6d2f386f6c6d34756e2e706e67" alt="" />
                        </a>
                    </td>
                    
                    <td>
                        <a href="https://github.com/dszwarc/PokeTracker">
                            <h3>PokeTracker</h3>
                            <img className="proj-preview" src="https://camo.githubusercontent.com/a248fb2d64ec156f6825e6ee3dfda08faa65db796673b2f46eacfb9c29dd18fc/68747470733a2f2f692e696d6775722e636f6d2f557353365748642e706e67" alt="" />
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
   )
}