import NotFound from "../../components/notfound/NotFound";
import { Home, Login } from "../../pages/AllPages";

export const PathRoutingLists=[
    {
        name:"Login",
        path:"/",
        exact:true,
        component:<Login/>
    },
    {
        name:"Home",
        path:"/home",
        exact:false,
        component:<Home/>
    },
    {
        name:"404notfound",
        path:"/*",
        exact:false,
        component:<NotFound/>
    }
]