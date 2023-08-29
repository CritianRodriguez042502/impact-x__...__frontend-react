import React from 'react'
import {Helmet} from "react-helmet"

export function InitialDashboard() {
  return (
    <main>          
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Dashboard / user </title>
      </Helmet>

      <div>
        <h1> Dashboard </h1>
      </div>
    </main>
  )
}
