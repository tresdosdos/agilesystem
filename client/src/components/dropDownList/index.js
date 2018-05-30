import React from 'react'
import './dropDownList.css'
export default function DropDownList (props) {
    return(<select className="dropDownList" onChange={props.onChange}>
        {props.content.map((item ,i) =>(
             <option value={item} key={i}>{item}</option>
            ))
        }
    </select>)
}