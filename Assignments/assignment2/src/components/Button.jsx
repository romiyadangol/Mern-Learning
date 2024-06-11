import React from 'react'
import '../assets/css/components/button.css';


class Button extends React.Component{
    render(){
        return(
            <div>
                <button className='start' onClick={this.props.onStart}>Start</button>
                <button className='stop' onClick={this.props.onStop}>Stop</button>
                <button className='reset' onClick={this.props.onReset}>Reset</button>
            </div>
        );
    }
}
export default Button;