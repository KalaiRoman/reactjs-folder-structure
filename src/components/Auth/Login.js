import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginUser } from '../../redux/Reducer/Login_Reducer';
import UserData from '../../reuseableComponents/UserData';
import AllJavascriptMethods from '../../reuseableComponents/AllJavascriptMethods';
import Home from '../Home/Home';
function Login() {
  const dispatch=useDispatch();
  const state=useSelector((state)=>state?.login);
  const {data,listData}=UserData();
  const {flatMathodChange}=AllJavascriptMethods();
  useEffect(()=>{
    const data={
      name:"bala",
      address:"chennai"
    }
    if(data){
      dispatch(LoginUser(data));
    }
  },[])
  return (
    <div>Login
{data} <div>
  {listData?.map((item,index)=>item)}
</div>
<Home/>
    </div>
  )
}
export default Login