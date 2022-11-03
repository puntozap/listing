import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "./../api/jsonPH"
import useAxiosFunction from "./../hooks/useAxiosFunction"
const Delete=({openDelete,setOpenDelete,item,fetchAgain})=>{
    const [show, setShow] = useState(openDelete);

    const handleClose = () =>{ setOpenDelete(false); setShow(false)};
    const handleShow = () => setShow(true);
    const [data,error, loading,axiosFetch] = useAxiosFunction()

    const Deleted=(item)=>{
        axiosFetch({
            axiosInstance:axios,
            method:"delete",
            url:"financial-periods/"+item.id,
            requestConfig:{}
        })
        fetchAgain()
        handleClose()
    }

    return (
        <>
            <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            >
                    <Modal.Header closeButton>
                    <Modal.Title>Delete Period</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                     Are you sure delete the Period {item.name}?
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="danger" onClick={()=>Deleted(item)}>Yes</Button>
                    </Modal.Footer>
            </Modal>
        </>
    )
}

export default Delete