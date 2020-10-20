import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './header'
import Repo from './repo'
import RepoList from './repolist'
import Main from './main'

const Home = () => {
  return (
    <div>
      <Header />

      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <Switch>
            <Route exact path="/" component={() => <Main />} />
            <Route exact path="/:userName" component={() => <RepoList />} />
            <Route exact path="/:userName/:repoName" component={() => <Repo />} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
