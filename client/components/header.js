import React from 'react'
import { useParams, Link } from 'react-router-dom'

const Header = () => {
  const { userName, userRepo } = useParams()

  return (
    <div>
      <p>Username: {userName}</p>
      <Link id="go-back" to="/">
        Go to Homepage
      </Link>
      {userRepo ? (
        <Link id="go-repository-list" to={`/${userName}`}>
          Go to Repository list
        </Link>
      ) : null}
    </div>
  )
}

export default React.memo(Header)
