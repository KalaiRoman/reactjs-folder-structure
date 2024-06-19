// import axios from "axios";
// import { useEffect, useState } from "react";



// const useAxios=async()=>{
//     const [reponse,setReponse]=useState(null);
//     const [error,setError]=useState("");
//     const [loading,setLoading]=useState(false);

//     const axiosIntance=axios.create({
//         baseURL:"https://jsonplaceholder.typicode.com"
//     })

//     // token pass data

//     // axiosIntance.defaults.headers.common['Authorization'] = "AUTH_TOKEN";

//     axiosIntance.interceptors.request.use(function (config) {
//         return config;
//       }, function (error) {
//         return Promise.reject(error);
//       });
    
//       axiosIntance.interceptors.response.use(function (response) {
//         return response;
//       }, function (error) {
//         return Promise.reject(error);
//       });

//       let controller=new AbortController();

//       useEffect(()=>{
// return  ()=>controller.abort();
//       },[])


//     const fetchData=async({url,method,data={},params={}})=>{
//         setLoading(true);
//         controller.abort();
//         controller=new AbortController();
//         try {
// const result=await axiosIntance({
//     url,method,
//     data,
//     params,
//     signal:controller.signal
// });

// setReponse(result?.data);
//         } catch (error) {
//             if(axios.isCancel(error))
//                 {
//                     console.log("Request cancelled ",error?.message)
//                 }
//                 else{
//             setError(error?.reponse?error?.reponse?.data:error?.message);

//                 }
//         }finally{
//             setLoading(false);
//         }
//     }

// return {reponse,error,loading,fetchData};


// }

// export default useAxios;


import { useState, useEffect } from "react";
import axios from "axios";

// Custom hook for API calls with request cancellation and interceptors
const useAxios = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Create an Axios instance
  const axiosInstance = axios.create({
      baseURL:"https://jsonplaceholder.typicode.com"
  });

  // Set up request and response interceptors
  axiosInstance.interceptors.request.use(
    (config) => {
      // Log or modify request here
      console.log("Sending request to:", config.url);
      return config;
    },
    (error) => {
      // Handle request error here
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      // Log or modify response here
      console.log("Received response from:", response.config.url);
      return response;
    },
    (error) => {
      // Handle response error here
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    const source = axios.CancelToken.source();

    return () => {
      // Cancel the request when the component unmounts
      source.cancel("Component unmounted: Request cancelled.");
    };
  }, []);

  // Making the API call with cancellation sup  port
  const fetchData = async ({ url, method, data = {},params={} }) => {
    setLoading(true);
    try {
      const result = await axiosInstance({
        url,
        method,
        data: method.toLowerCase() === "get" ? undefined : data, // Only include data for non-GET requests
        params: method.toLowerCase() === "get" ? data : params, // For GET requests, use data as query params
        cancelToken: axios.CancelToken.source().token,
      });
      setResponse(result.data);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request cancelled", error.message);
      } else {
        setError(error.response ? error.response.data : error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { response, error, loading, fetchData };
};

export default useAxios;