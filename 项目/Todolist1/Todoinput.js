import React, { Component } from 'react'
export default class Todoinput extends Component {
    constructor(){
        super();
        this.state={
           
        }
    }
    handleInput=(e)=>{
        if(e.keyCode===13){
            this.props.add(e.target.value);
            console.log(e.target.value);
        }
         
    }
    render() {
        return (
            <div> 
                <input ref={(inp)=>{this.inp=inp}} onKeyDown={this.handleInput} type="text"/>
            </div>
             
        )
    }
}