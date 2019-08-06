import React, { Component } from 'react'
import './List.css';
export default class List extends Component {
    render() {
        console.log(this.props.items)
        return (
            <div className="ul">
            {
              this.props.items.map(function(item) {
                return <div className="li" key={item}>{item.title}</div>
              })
             }
            </div>
          )  
        }
      }