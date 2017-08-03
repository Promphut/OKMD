import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'

import { HomePage,Template,Page } from 'components'

import theme from './themes/default'

injectGlobal`
  body {
    margin: 0;
  }
  a:active{
    text-decoration:none;
  }
  a:hover{
    text-decoration:none;
  }
  .active{
    color:white !important;
    background:#1999A3 !important;
    text-decoration:none !important;
  }
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Template>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/seramic" component={Page} exact />
          <Route path="/horsecar" component={Page} exact />
        </Switch>
      </Template>
    </ThemeProvider>
  )
}

export default App
