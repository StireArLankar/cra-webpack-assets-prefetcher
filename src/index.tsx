import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import(/* webpackPrefetch: true */ './assets/imagesLoader').then(({ default: imagesLoader }) =>
  imagesLoader()
)

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
