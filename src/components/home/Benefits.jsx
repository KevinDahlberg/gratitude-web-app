import React, { Component } from 'react'

export default class Benefits extends Component {
  constructor(props){
    super(props)

    this.state = {
      heading: 'Gratitude:',
      benefitsArray: [
        'Opens the door for new relationships',
        'Improves physical health',
        'Improves psychological health',
        'Enhances empathy and reduces aggression',
        'Improves sleep',
        'Improves self-esteem',
        'Increases mental strength'
      ],
      source: 'forbes.com',
      url: 'https://www.forbes.com/sites/amymorin/2014/11/23/7-scientifically-proven-benefits-of-gratitude-that-will-motivate-you-to-give-thanks-year-round/#50b8dcad183c'
    }
  }

  render() {
    return (
      <div className="benefits-url" href="{this.state.url}">
        <h2 className="blue-text">{this.state.heading}</h2>
        <ul>
          {this.state.benefitsArray.map((item, idx) => {
            return (
              <li key={idx}>{item}</li>
            )
          })}
        </ul>
        <p>
          {this.state.source}
        </p>
      </div>
    )
  }
}
