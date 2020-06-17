import React, { Component } from 'react'
import { ThemeProvider } from '@zendeskgarden/react-theming'

class App extends Component {
  render() {
 
    return (
      <ThemeProvider>
        Hola
      </ThemeProvider>
    )
  }
}

export default App
