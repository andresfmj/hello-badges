import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Layout from './Layout'

import Index from '../pages/Index'

import BadgeNew from '../pages/BadgeNew'
import BadgeEdit from '../pages/BadgeEdit'
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer'
import Badges from '../pages/Badges'

import NotFound from '../pages/NotFound'


function App() {

    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/badges' component={Badges} />
                    <Route exact path='/badges/new' component={BadgeNew} />
                    <Route exact path='/badges/:badgeId' component={BadgeDetailsContainer} />
                    <Route exact path='/badges/:badgeId/edit' component={BadgeEdit} />
                    <Route exact path='/' component={Index} />
                    <Route path='/404' component={NotFound} />
                    <Redirect from='*' to='/404' />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App