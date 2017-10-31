import React, { Component } from 'react'

export default class StepsBoxes extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stepsArray: [
        {num: 1, step: 'Create Account'},
        {num: 2, step: 'Add Gratitude'},
        {num: 3, step: 'Schedule Reminders'},
        {num: 4, step: 'Improve Your Life'}
      ]
    }
  }

  box(stepObj) {
    return (
      <div className = "step-box">
        <h2 className = "step-num">{stepObj.num}</h2>
        <span className = "step-text">{stepObj.step}</span>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.state.stepsArray.map((step, idx) => {
          return (
            <div key={idx}>
              {this.box(step)}
            </div>
          )
        })}
      </div>
    )
  }
}
