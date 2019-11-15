import React, { Component } from 'react' /* eslint-disable-line no-unused-vars */
import './App.css'

class App extends Component {
  render () {
    return (
      <div dataTest= "component-app">
        <h1 id= "counter" dataTest= "display-count">0</h1>
        <button id= "button" dataTest= "button-increment" >increment count</button>
      </div>
    )
  }
}

export default App
