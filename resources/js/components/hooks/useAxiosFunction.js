import { useEffect, useState } from "react"

const useAxiosFunction=()=>{
    const [response,setResponse]=useState([])
    const [error,setError]=useState('')
    const [loading,setLoading]=useState(true)
    const [controller,setController]=useState()

    const axiosFetch = async (configObject) =>{
        const {
            axiosInstance,
            method,
            url,
            requestConfig = {}
        } = configObject;
        console.log(configObject)
        try{
            setLoading(true)
            const ctrl= new AbortController()
            setController(ctrl)
            const res= await axiosInstance[method.toLowerCase()](url,{
                ...requestConfig,
                signal:ctrl.signal
            })
            console.log(res)
            setResponse(res.data)
        }catch(err){
            console.log(err.message)
            setError(err.message)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        
        console.log(controller)
        return ()=> controller && controller.abort();
    },[controller])

    return [response,error,loading,axiosFetch]
}

export default useAxiosFunction