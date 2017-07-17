import './Root.css'
import MainSection from './components/MainSection'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect, Provider } from 'react-redux'
import * as Actions from './actions/CounterActions'

class Root extends Component {
  render() {
    const { store, actions, counter } = this.props
    return (
      <Provider store={store}>  
        <div className="container">
          <MainSection counter={counter} {...actions}></MainSection>
        </div>
      </Provider>
    )
  }
}

function select(state) {
  return {
    counter: state.counter
  }
}
function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(select, mapDispatch)(Root)