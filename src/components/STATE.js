import React, { Component } from 'react'

export default class STATE extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0,
             
        }
    }
handleIncre =()=>{
     this.setState({
         count : this.state.count + 1
     })
}
handledec= ()=>{
     this.setState({
         count : this.state.count - 1
     })
}


    
    render() {
        const {count} = this.state
        return (
            <div>

                <h1>Count Number :</h1>
                <h2 className ='ctext'>{count}</h2>
                <button className='btn1' onClick={this.handleIncre}>+</button>
                <button className='btn2' onClick={this.handledec}>-</button>

               
                
            </div>
        )
    }
}
