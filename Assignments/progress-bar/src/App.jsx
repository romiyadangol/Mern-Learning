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
      showError: false,
    }
  }
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     progress : this.state.value,
  //   })
  
  // }
  onchange = (e) => {
    const inputValue = e.target.value;
    if (inputValue >= 0 && inputValue <= 100) {
      this.setState({ 
        value: inputValue, 
        showError: false 
      });
    } else {
      this.setState({ 
        showError: true 
      });
    }
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
        // handleSubmit={this.handleSubmit}
        value={this.state.value}
        onchange={this.onchange}
        handleClick={this.handleClick}
        error={this.state.showError}
        />
      </div>
    )
  }
}
export default App;