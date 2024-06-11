import React from 'react'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageURL:"",
    };
  }
  componentDidMount(){
    fetch("https://dog.ceo/api/breeds/image/random").then((response) => {
      response.json().then((data) => {
        this.setState({
          imageURL:data.message,
        });
      });
    });
  }
  render() {
    return(
      <div>
        {/* <h1>Welcome, {this.ishuman ? "Human" : "Bot"}</h1> */}

        {/* <button onClick={() => {
          this.setState({
            isClicked : !this.state.isClicked,
          });
        }}style={{ color: this.state.isClicked ? "green" : "red" }}>
          {this.state.isClicked ? "It is clicked!" : "It is not clicked yet"}
        </button> */}

        <h1>Welcome</h1>
        {/* <img src={this.state.imageURL} alt="" />
         */}
        {this.state.imageURL ? <img src={this.state.imageURL} /> : "Loading...."} 


      </div>
    );
  }
}
export default App;