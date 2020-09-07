import React from 'react'
import AuthenticatedGuard from 'src/guards/AuthenticatedGuard'
import Home from 'src/pages/Home/Home'
import { Switch } from 'react-router-dom'
import { PATH } from 'src/constants/paths'

export default function HomeRoutes() {
  return (
    <Switch>
      <AuthenticatedGuard exact path={PATH.HOME} component={Home} />
    </Switch>
  )
}
