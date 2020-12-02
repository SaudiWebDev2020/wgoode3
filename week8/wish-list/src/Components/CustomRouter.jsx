import React from 'react'

const CustomRouter = (props) => {
  console.log(props.children);

  return (
    <div className="card my-5">
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.children.filter(element => element.props.path === props.currentRoute)}
      </div>
    </div>
  )
}

export default CustomRouter
