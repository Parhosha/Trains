import React from 'react';
import './App.css';
import MainPage from './MainPage';
import { connect } from 'react-redux';
import { setTaskAC } from './Redux/form-reducer';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1> Train Scheduele</h1>
        <MainPage exercise={this.props.exercise} setTaskAC={this.props.setTaskAC} />
      </div>
    );
  }
}
let mapStateToProps = (state) => ({
  exercise: state.MainPage.exercise,
});
export default connect(mapStateToProps, { setTaskAC })(App);
/*
+mapstatetoprops
+BrowserRouter
*/
