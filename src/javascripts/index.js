import React from 'react'
import App from './containers/App'
import ReactDOM from 'react-dom'

export default function(props) {
  ReactDOM.render(<App client={props} />, document.getElementById('root'))
}
