import React from 'react'
import { Link } from 'react-router-dom'

import confLogo from '../images/platziconf-logo.svg'
import astronauts from '../images/astronauts.svg'

import './styles/Home.css'

function Index() {
    return (
        <div className='Home'>
            <div className="Home__col">
                <div className="row container-fluid">
                    <div className="col-4 offset-2">
                        <img className='img-fluid' width='65%' src={confLogo} alt="confLogo" />
                        <h1 className="Home__confTitle">print your badges</h1>
                        <p>The easiest way to manage your <br /> conference</p>
                        <div className="row">
                            <div className="col-4 offset-2">
                                <Link to='/badges' className='btn btn-primary'>Get Started</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <img className='img-fluid' src={astronauts} alt="Never Stop Learning" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index