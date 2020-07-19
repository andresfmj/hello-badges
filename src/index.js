import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css'
import './global.css'
import Badge from './components/Badge'
import BadgeNew from './pages/BadgeNew'
import Badges from './pages/Badges'

const element = (
  <div>
    <h1>Hola, soy Fernando</h1>
    <p>Soy Ingeniero de Software</p>
  </div>
)
const container = document.getElementById('root')

// ReactDOM.render(<Badge 
//   firstName="Andres" 
//   lastName="Fernando" 
//   jobTitle="Frontend Engineer"
//   twitter="andresf_mj"
//   avatarUrl="https://www.gravatar.com/avatar?d=identicon"
//    />, container)
ReactDOM.render(<Badges />, container)