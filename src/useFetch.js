import { useState,useEffect } from "react";

const useFetch =(url)=>{

    const[data,setphones]=useState(null);
    const[isPending, setIsPending]=useState(true);
    const[error,setError]=useState(null);

    useEffect(()=>{
        const abortConst = new AbortController();
        fetch(url,{signal:abortConst.signal})
        .then(res=>{
            if(!res.ok){
                throw Error('Could not fetch data ')
            }
            return res.json();
        })
        .then((data)=>{
            console.log(data);
            setphones(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err=>{
            if(err.name=='AbortError'){
                console.log("aborted")
            }else{
            setError(err.message);
            setIsPending(false);
            }
        })

        return()=>abortConst.abort();

    },[url]);
    return { data , isPending , error }
}
export default useFetch; 