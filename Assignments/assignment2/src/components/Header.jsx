import React from 'react';
import '../assets/css/components/header.css';

class Header extends React.Component{
  render(){
    return(
      <div>
         <header className='main-header'>
            <h1>{this.props.title}</h1>
         </header>
      </div>
    )
  }
}
export default Header;