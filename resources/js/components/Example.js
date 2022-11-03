import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './header/Header';
import Layout from './layout/Layout';
import Listing from './Listing/Listing';
import SelectYear from './select-year/SelectYear';
import axios from "./api/jsonPH"
import useAxiosFunction from "./hooks/useAxiosFunction"
const Example=()=> {
    const [data,error, loading,axiosFetch] = useAxiosFunction()
    const [years,error2, loading2,Years] = useAxiosFunction()
    const [stop,setStop]=useState(true);
    const [stopYear,setStopYear]=useState(false);
    const [selecteds,errork, loadingk,Selected] = useAxiosFunction()

    useEffect(()=>{
        if(stop==true){
            axiosFetch({
                axiosInstance:axios,
                method:"get",
                url:"financial-periods",
                requestConfig:{}
            })
            setStop(false)
        }
          
    })
    useEffect(()=>{
        if(stopYear==false){
            Years({
                axiosInstance:axios,
                method:"get",
                url:"years",
                requestConfig:{}
            })
            setStopYear(true)
        }
    })
    const fetchAgain=()=>{
        setStop(true)
        setStopYear(false)

    }

    const selected=(e)=>{
        console.log(e)
        axiosFetch({
            axiosInstance:axios,
            method:"post",
            url:"search",
            requestConfig:{year:e}
        })
        //fetchAgain()
    }
    return (
        <Layout>
            <div className='col-12 mt-4'>
                <Header/>
            </div>
            
            <div className='col-4 mt-4'>
                <SelectYear years={years} selected={selected}/>
            </div>

            <div className='col-12 mt-4'></div>
            
            <div className='col-12'>
                <Listing data={data} loading={loading} fetchAgain={fetchAgain}/>
            </div>

        </Layout>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
