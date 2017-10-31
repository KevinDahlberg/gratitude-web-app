import React, { Component } from 'react'

export default class header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Gratitude App',
      subtitle: 'I am Happy and Gratefull for...'
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.subtitle}</p>
      </div>
    )
  }
}
