import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import Header from './header'

const RepoList = () => {
  const { userName } = useParams()
  const [repos, setRepos] = useState('')
  useEffect(() => {
    async function getUserRepos(username) {
      const userRepos = await axios(`https://api.github.com/users/${username}/repos`).then(
        ({ data }) => data
      )
      setRepos(
        userRepos.map((repo) => (
          <Link key={`/${username}/${repo.name}`} to={`/${username}/${repo.name}`}>
            <p>{repo.name}</p>
          </Link>
        ))
      )
    }
    getUserRepos(userName)
  }, [userName])

  return (
    <div>
      <Header />
      {repos}
    </div>
  )
}

RepoList.propTypes = {}
export default RepoList
