import React from 'react'
import { Link } from 'react-router-dom'
import {SiFacepunch} from "react-icons/si";

const Error = () => {
  return (
    <div className="text-center">
        <div className="m-5">
            <h2>Page not found</h2>
            <h2>a bit too many cocktails <SiFacepunch/></h2>
        </div>
    </div>
  )
}

export default Error
