import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import axios from 'axios'

const ReactMarkdown = require('react-markdown')

const Repo = () => {
  const { userName, repoName } = useParams()
  const [fileData, setFileData] = useState('')

  useEffect(() => {
    axios(`https://raw.githubusercontent.com/${userName}/${repoName}/master/README.md`).then(
      (it) => {
        setFileData(it.data)
      }
    )
  }, [userName, repoName])

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
