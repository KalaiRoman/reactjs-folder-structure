import toast from "react-hot-toast"
export const ToastSuccess=async(paramsdata)=>{
    return toast.success(paramsdata)
}
export const ToastError=async(paramsdata)=>{
    return toast.error(paramsdata)
}