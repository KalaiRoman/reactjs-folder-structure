import React, { useEffect } from 'react'
import useAxios from './../../config/AxiosAnotherMethod';

function Home() {

  


  const { response, error, loading, fetchData } = useAxios();

  const getData=async()=>{
    fetchData({ url: "/posts", method: "GET" });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>Home {error} {loading?"...Loading":null}
    
    <div>
      {response?.map((item,index)=>{
        return(
          <div>
            {index+1}
          </div>
        )
      })}
      </div></div>
  )
}

export default Home