import React, { useEffect } from 'react'
import useAxios from '../../config/AxiosAnotherMethod';
import { EnvLables } from './../../middleware/EnvDatas/EnvLabals';
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
    {EnvLables.BASE_URL_DEVELOPMENT}
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