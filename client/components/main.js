import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  const [input, setInput] = useState('')
  const onChange = (e) => setInput(e.target.value)
  return (
    <div>
      <input id="input-field" type="text" value={input} onChange={onChange} />
      <Link id="search-button" to={`/${input}`}>
        Search
      </Link>
    </div>
  )
}

Main.propTypes = {}

export default Main
