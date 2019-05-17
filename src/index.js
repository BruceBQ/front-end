import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { SnackbarProvider } from 'notistack'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Notifier from './components/Notifier'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store'
import './assets/styles/app.scss'
import routes from './routes/route_index'

ReactDOM.render(
  <Provider store={store}>
    <SnackbarProvider
      maxSnack={6}
      autoHideDuration={2000}
      action={[
        <IconButton key={Math.random()} aria-label="Close" color="inherit">
          <CloseIcon />
        </IconButton>,
      ]}
    >
      <Router>{routes}</Router>
      <Notifier />
    </SnackbarProvider>
  </Provider>,
  document.getElementById('centic'),
)
