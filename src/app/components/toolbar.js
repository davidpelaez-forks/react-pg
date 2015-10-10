import React from 'react';
import Debug from 'debug';

var log = Debug('Toolbar');

import { connect } from 'react-redux';

class Toolbar extends React.Component {

  render () {
    return <div className="toolbar">{this.props.currentAccount}</div>;
  }
}

function mapStateToProps(state){
  log("Setting props from state", state);
  console.log("Mapping state to Toolbar props",state);
  return {currentAccount: state.currentAccount||"abc"};
}

export default connect(mapStateToProps)(Toolbar);
//export default Toolbar;
