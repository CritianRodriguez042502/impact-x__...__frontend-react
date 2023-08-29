import React from 'react'
import {Helmet} from "react-helmet"

export function BlogsUser() {
  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Dashboard / yours blogs </title>
      </Helmet>

      <div>
        <h1> Blogs del usuario registrado </h1>
      </div>
    </main>
  )
}
