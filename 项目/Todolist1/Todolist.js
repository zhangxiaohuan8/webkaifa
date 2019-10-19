import React, { Component } from 'react'
import Todoinput from './Todoinput'
import Todoing from './Todoing'
export default class Todolist extends Component {
    constructor(){
        super();
         let todo=JSON.parse(localStorage.getItem('todo'))
         if(todo==null){
            this.state = {
                todo:[]
              
            }
         }
         else{
            this.state = {
                todo:todo
              
            }
         }
    }
    delItem=(idx,e)=>{
        let todo=[...this.state.todo] 
        todo.splice(idx,1);
        this.setState({
            todo:todo
        })
        console.log(this.state.todo);
    }
    addItem=(data)=>{
        var data1={"title":data,"done":false}
        this.setState({
            todo:[...this.state.todo,data1]
             
        })
    }
    tranS=(idx)=>{
        let todo=this.state.todo;
        todo[idx].done=true;
        this.setState({
            todo:todo
        })
         
        
    }
    tranSS=(idx)=>{
        let todo=this.state.todo;
        todo[idx].done=false;
        this.setState({
            todo:todo
        })
        
    }
    render() {
         
        let todo=this.state.todo;
        localStorage.setItem('todo',JSON.stringify(todo))
        let num=0;
        let num1=0;
        todo.map((item)=>{
            if(item.done==false){
                num=num+1;
            }
            else{
                num1=num1+1;
            }
        })
        return (
            <div>
                <Todoinput add={this.addItem}/>
                <Todoing del={this.delItem} todo={this.state.todo} num={this.state.num} num1={this.state.num1} tran={this.tranS} trans={this.tranSS} t={num} m={num1}/>
            </div>
        )
    }
}