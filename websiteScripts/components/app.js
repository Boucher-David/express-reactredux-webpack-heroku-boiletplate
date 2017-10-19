import overallActions from '../combinedActions.js';
import React, {Component} from 'react';
import { connect } from 'react-redux';

class App extends React.Component {

    constructor(props) {
      super(props);
      console.log(props);
    }
    
    render() {
      return (
        <div>Testing</div>
      );
    }
  }
  
  const mapDispatchToActions = overallActions;
  const mapStateToProps = (allState) => allState;
  const AppContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToActions
  )(App);
  
  export default AppContainer;