import { useEffect, useState } from 'react';
function GoogleLocation() {
    const [lan,setLan]=useState("");
    const [lon,setLong]=useState("");
    const [location,setLocation]=useState({});
    useEffect(()=>{
    const geo=navigator.geolocation;
        geo.getCurrentPosition(useLocationData);
        async function useLocationData(data){
          try {
            var latData=data.coords.latitude;
            var lonData=data.coords.longitude;
            if(latData) return setLan(latData);
            if(lonData) return setLong(lonData);
            if(latData && lonData)
              {
                const url=`https://api.opencagedata.com/geocode/v1/json?key=ac57901dacff4fc4a0aef24faa8bf134&q=${latData}%2C+${lonData}&pretty=1&no_annotations=1`;
                const responseData=await fetch(url);
                const dataData=await responseData.json();
                setLocation(dataData?.results[0]?.components)
              }
          } catch (error) {
            
          }
        }
    },[lan,lon])
  return {lan,lon,location};
}
export default GoogleLocation