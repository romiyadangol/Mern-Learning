import React from 'react'
import './assets/css/index.css';
import Header from './components/Header';
import Progress from './components/Progress';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      progress : 50,
      value : 50,
    }
  }
  onchange = (e) => {
    this.setState({
      value : e.target.value,
    })
  }
  handleClick = (e) =>{
    e.preventDefault();
    this.setState({
      progress : this.state.value,
    })
  }
  render(){
    return(
      <div className='main-container'>
        <Header title="Progress Bar"/>
        <Progress 
        progress={this.state.progress}
        value={this.state.value}
        onchange={this.onchange}
        handleClick={this.handleClick}
        />
      </div>
    )
  }
}
export default App;