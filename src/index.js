import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css'
import './global.css'
import Badge from './components/Badge'

const element = (
  <div>
    <h1>Hola, soy Fernando</h1>
    <p>Soy Ingeniero de Software</p>
  </div>
)
const container = document.getElementById('root')

ReactDOM.render(<Badge />, container)