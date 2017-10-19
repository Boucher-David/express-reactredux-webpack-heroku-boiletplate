import * as Redux from 'redux';

const appAction = require('./actions/appAction.js');
// import actions here

const dispatch = function mapDispatchToProps(dispatch) {
    const result = {
      actions: Redux.bindActionCreators(
        Object.assign({},
            //paste imported actions here
            appAction
      ), dispatch)
    };
  
    return result;
  };
  
  export default dispatch;