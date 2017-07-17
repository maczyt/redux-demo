import React, { Component } from 'react'

export default class MainSection extends Component {
  render() {
    const { counter, addCount, deleteCount } = this.props
    return (
      <div>
        {this.renderCount()}
        {' '}
        <button onClick={() => addCount()}>+</button>
        {' '}
        <button onClick={() => deleteCount()}>-</button>
        {' '}
        <button onClick={() => { if (counter % 2 === 0) addCount() }}>add if odd</button>
        {' '}
        <button onClick={() => setTimeout(addCount, 1000)}>async 1s add</button>
      </div>
    )
  }

  renderCount() {
    return (
      <span>{ this.props.counter }</span>
    )
  }
}