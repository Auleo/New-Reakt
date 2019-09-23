
import React from 'react'; 8.5
immport 

const TodoList =({list=todoList})=>{

  const mapCallback = (element, key) =>{
    return (
      <li> {element} </li>
    )
  }

  return (<ul>
          {list.map(mapCallback)}
          </ul>)
          }

}

