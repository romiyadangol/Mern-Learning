import React from 'react';
import '../assets/css/components/card.css';

class Card extends React.Component {
  render() {
    // const { username, email, avatar, age, gender, city } = this.props.user;
    
    return (
      <div className="container"> 
      <div className="user-card">
        <img src={this.props.user.avatar} alt={this.props.user.username} />
        <div className='content'>
          <h2>{this.props.user.username}</h2>
          <p>Email: {this.props.user.email}</p>
          <p>Age: {this.props.profile.age}</p>
          <p>Gender: {this.props.profile.gender}</p>
          <p>City: {this.props.profile.city}</p>
        </div>
      </div>
      </div> 
    );
  }
}

export default Card;
