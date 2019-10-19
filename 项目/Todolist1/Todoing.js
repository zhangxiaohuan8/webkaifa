import React, { Component } from 'react'

export default class Todoing extends Component {
    delItem(idx,e){
        this.props.del(idx);
    }
    render() {
        var {todo} = this.props;
        return (
            <div>
                <span>正在进行</span>
                <span>{this.props.t}</span>
                <ul>
                {
                    todo.map((item,idx)=>{
                        if(item.done==false){
                            return(
                                <li key={idx}><input type="checkbox" onChange={()=>this.props.tran(idx)}/>--{item.title}---<button onClick={()=>this.props.del(idx)}>删除</button></li>
                                
                            )
                        }
                    })
                    
                }
                </ul>
                <span>已完成</span>
                <span>{this.props.m}</span>
                <ul>
                {
                    todo.map((item,idx)=>{
                        if(item.done==true){
                            return(
                                <li key={idx}><input type="checkbox" onChange={()=>this.props.trans(idx)}/>---{item.title}---<button onClick={(e)=>this.props.del(idx,e)}>删除</button></li>
                            )
                        }
                    })
                    
                }
                </ul>
            </div>
        )
    }
}
 