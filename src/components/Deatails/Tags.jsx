import React from 'react'

const Tags = (props) => {
  return (
    <div className="flex items-center">
    <div
      className="rounded-full bg-cover h-12 w-12 mr-6 text-3xl text-center"
    >{props.tag}</div>
    <div>
      <p className="font-semibold text-xl my-1">
        {props.title}
      </p>
      <p className="text-lg text-gray-600">
      {props.subtitle}
      </p>
    </div>
  </div>
  )
}

export default Tags