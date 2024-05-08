import React from 'react'
import '../assets/css/components/progress.css'

class Progress extends React.Component{
    render(){
        return(
            <div className='progress'>
                <div className="progress-bar" style={{width: `${this.props.progress}%`}}>
                    <div className="progress-text">{this.props.progress}%</div>
                </div>
                {this.props.error && <p>Error: Progress should be between 0 and 100</p>}
                <div className='form'>
                <form onSubmit={this.props.handleClick}>
                    <label>Input Percentage: </label>
                    <input
                    className='input' 
                    type="number"
                    value={this.props.value}
                    onChange={this.props.onchange}
                    onClick={this.props.handleClick} />       
                </form>
                </div>
            </div>
        )
    }
}
export default Progress;