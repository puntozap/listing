import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

import axios from "./../api/jsonPH"
import useAxiosFunction from "./../hooks/useAxiosFunction"


const period={
    name:"",
    start_date:"",
    end_date:"",
    number_week:""
}
const AddEdit=({open,setOpen,status,fetchAgain,item})=>{
    const [show, setShow] = useState(open);
    const [stoped, setStoped] = useState(false);
    const [form,setForm]=useState(period)
    const [data,error, loading,axiosFetch] = useAxiosFunction()
    

    const handleClose = () =>{ setOpen(false); setShow(false)};
    const handleShow = () => setShow(true);
    const [stop,setStop]=useState(false);

    const setAllForm=(e)=>{
        
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(form,edit);
    }
 
    const save=()=>{
        axiosFetch({
            axiosInstance:axios,
            method:"post",
            url:"financial-periods",
            requestConfig:{...form}
        })
        fetchAgain()
        handleClose()
    }
    const edit=(id)=>{
        axiosFetch({
            axiosInstance:axios,
            method:"put",
            url:"financial-periods/"+item.id,
            requestConfig:{...form}
        })
        fetchAgain()
        handleClose()
    }
    useEffect(()=>{
        if(status==false){
           if(stoped==false){
                setForm(item)
                
                setStoped(true)

           }
            
            
    
        }
        
        /* if(!loading){
            if(stop==false){
            setForm({})
            setForm(data)
            setStop(true)
            }

        } */
    })
    
    /* if(loading){
        console.log(data,"ddddd",loading)
    }
    if(!loading){
        console.log(data,"ddddd",loading)
    } */
    console.log(form,data)

    return (
        <>
            <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            >
                    <Modal.Header closeButton>
                    <Modal.Title>{status?"Create":"Edit"} Financial Period</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-md-12">
                                <label>Name</label>
                                <input className="form-control" name="name" id="name" value={form.name} onChange={setAllForm}/>
                            </div>
                            <div className="col-md-6">
                                <label>Start Date</label>
                                <input className="form-control" type={"date"} name="start_date" id="start_date" value={form.start_date} onChange={setAllForm}/>
                            </div>
                            <div className="col-md-6">
                                <label>End Date</label>
                                <input className="form-control" type={"date"} name="end_date" id="end_date" value={form.end_date} onChange={setAllForm}/>
                            </div>
                            <div className="col-md-12">
                                <label>Number of Weeks</label>
                                <input className="form-control" name="number_week" id="number_week" value={form.number_week} onChange={setAllForm}/>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={status?save:()=>edit(item)}>{status?"Save":"Edit"}</Button>
                    </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddEdit