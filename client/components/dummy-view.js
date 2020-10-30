import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Head from './head'

import Main from './main'
import RepoList from './repolist'
import Repo from './repo'

const Dummy = () => {
  return (
    <div>
      <Head title="Hello" />
      <Switch>
        <Route exact path="/" component={() => <Main />} />
        <Route exact path="/:userName" component={() => <RepoList />} />
        <Route exact path="/:userName/:repoName" component={() => <Repo />} />
      </Switch>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
