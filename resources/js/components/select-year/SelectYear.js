import React from "react";
import { Form } from "react-bootstrap";

const SelectYear=({years,selected})=>{
    const Selected=(e)=>{
        console.log(e.target.value)
        selected(e.target.value)
    }
    return (
        <>
             <Form.Select name="year" id="year" onChange={Selected}>
                <option>Select</option>
                {years.map((item,i)=><option key={i} value={item}>{item}</option>)}
            </Form.Select>
        </>
    )
}

export default SelectYear