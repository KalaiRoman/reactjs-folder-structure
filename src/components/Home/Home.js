import React, { useEffect } from 'react'
import useAxios from '../../config/AxiosAnotherMethod';
import { EnvLables } from './../../middleware/EnvDatas/EnvLabals';
import GoogleLocation from '../../middleware/googlelocation/GoogleLocation';
import Hoc from './../../Hoc/Hoc';
function Home({value}) {
  const { response, error, loading, fetchData } = useAxios();

  const {lan,lon}=GoogleLocation();
  const getData=async()=>{
    fetchData({ url: "/posts", method: "GET" });
  }
  useEffect(() => {
    getData();
  }, [lan]);

  console.log(lan,'l')

  return (
    <div>Home {value?.name} {lan}  {loading?"...Loading":null}
    {EnvLables.BASE_URL_DEVELOPMENT}
    <div>
      {/* {response?.map((item,index)=>{
        return(
          <div>
            {index+1}
          </div>
        )
      })} */}
      </div>
      <div>
      lan : {lan}
      </div>
      </div>
  )
}

export default Hoc(Home)