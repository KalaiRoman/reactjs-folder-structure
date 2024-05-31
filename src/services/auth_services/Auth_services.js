
import { Apis } from '../../middleware/apicalls/ApiCalls';
import instanceBaseUrl from './../../config/BaseUrl';
export async function loginService(data){
    try {
        const response=await instanceBaseUrl.post(Apis?.login_api,data);
        const datas={
            message:response?.data?.message,
            status:response?.status
        }
        return datas;
    } catch (error) {
        console.log(error);
        throw error;
    }
}