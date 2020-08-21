import React from 'react';
import './App.css';
import MainPage from './MainPage';
import { connect } from 'react-redux';
import { setTaskAC, clearAC } from './Redux/form-reducer';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1> Train Scheduele</h1>
        <MainPage
          exercise={this.props.exercise}
          setTaskAC={this.props.setTaskAC}
          clearAC={this.props.clearAC}
        />
      </div>
    );
  }
}
let mapStateToProps = (state) => ({
  exercise: state.MainPage.exercise,
});
export default connect(mapStateToProps, { setTaskAC, clearAC })(App);
/*
+mapstatetoprops
+BrowserRouter
*/
