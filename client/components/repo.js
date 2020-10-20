import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import axios from 'axios'

const ReactMarkdown = require('react-markdown')

const Repo = () => {
  const { userName, repoName } = useParams()
  const [fileData, setFileData] = useState('')
  useState(() => {
    async function getRepoReadme(username, reponame) {
      const content = await axios(
        `https://api.github.com/repos/${username}/${reponame}/contents`
      ).then(({ data }) => data)
      const readmeinfo = content.find((file) => file.name === 'README.md')
      const readmecontent = await axios(readmeinfo.download_url).then(({ data }) => data)
      setFileData(readmecontent)
    }
    getRepoReadme(userName, repoName)
  }, [])

  return (
    <div>
      <div id="description">
        <ReactMarkdown source={fileData} />
      </div>
    </div>
  )
}

Repo.propTypes = {}
export default Repo
