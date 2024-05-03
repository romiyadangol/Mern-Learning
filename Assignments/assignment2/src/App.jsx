import React from 'react';
import Header from './components/Header';
import Button from './components/Button';
import './assets/css/index.css';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      time: 0,
      isOn: false,
    };
    this.timer = null;
  }
  
  handleStart = () => {
    this.setState({
      isOn: true
    });
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      });
    }, 1000);
  }
  handleStop = () => {
    this.setState({
      isOn: false
    });
    clearInterval(this.timer);
  }
  handleReset = () => {
    this.setState({
      time: 0,
      isOn: false
    });
    clearInterval(this.timer);
  }
  
  render(){
    return(
      <div className='container'>
        <Header title="Timer"/>
        <h1>{Math.floor(this.state.time / 60)} mins {this.state.time % 60} secs</h1>
        <Button
        onStart = {this.handleStart}
        onStop = {this.handleStop}
        onReset = {this.handleReset}
        />
      </div>
    )
  }
}
export default App;