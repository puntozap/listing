import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import Items from "./Items";
import { BsFillPlusCircleFill } from "react-icons/bs";
import AddEdit from "./AddEdit";
import Delete from "./Delete";



const Listing=({data,loading,fetchAgain})=>{
    const [open,setOpen]=useState(false);
    const [openDelete,setOpenDelete]=useState(false);
    const [addEdit,setAddEdit]=useState(false);
    const [id,setId]=useState({});

    const list=[
        {
            id:1,
            name:"test",
            start_date:"2021-10-01",
            end_date:"2021-10-30",
            number_week:4
        },
    ]
    const newRegister=()=>{
        open==true?setOpen(false):setOpen(true)
        setAddEdit(true)
    }
    const editRegister=(edit)=>{
        setId(edit)
        open==true?setOpen(false):setOpen(true)
        setAddEdit(false)
    }
    

    
    const deleteRegister=(id)=>{
        setId(id)
        openDelete==true?setOpenDelete(false):setOpenDelete(true)
    }
    return(
        <>
            
            <Table striped bordered hover>
                <thead>
                    <tr >
                        <th>Name</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Number of Week</th>
                        <th onClick={newRegister}><BsFillPlusCircleFill   /></th> 
                    </tr>
                </thead>
                {loading?"loading":""}
                {!loading && data.length==0?"No rows, add a new register":""}
                <tbody>
                    {!loading && !data.length==0 && data.map((item)=><Items key={item.id} item={item} editRegister={editRegister} deleteRegister={deleteRegister} />)}
                </tbody>
            </Table>
            {open==true?<AddEdit open={open} setOpen={setOpen} status={addEdit} fetchAgain={fetchAgain} item={id} />:""}
            {openDelete==true?<Delete openDelete={openDelete} setOpenDelete={setOpenDelete} item={id} fetchAgain={fetchAgain}/>:""}
        </>
    )
}

export default Listing