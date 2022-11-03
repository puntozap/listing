import React from "react";
import { BsFillTrashFill,BsFillPencilFill } from "react-icons/bs";

const Items=({item,editRegister,deleteRegister})=>{
    return(
        
            <tr>
                <td>{item.name}</td>
                <td>{item.start_date}</td>
                <td>{item.end_date}</td>
                <td>{item.number_week}</td>
                <td><BsFillPencilFill onClick={()=>editRegister(item)} /><BsFillTrashFill onClick={()=>deleteRegister(item)} /></td>
            </tr>
    )
}
export default Items