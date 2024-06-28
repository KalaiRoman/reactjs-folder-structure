import Formvalidation from "../../components/formvalidation/Formvalidation";
import ReuseableCode from "../../components/formvalidation/ReuseableCode";
import NotFound from "../../components/notfound/NotFound";
import { BookingTickets, Home, Login } from "../../pages/AllPages";
import Invoice from "../../reuseableComponents/InvoiceDownload";

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
        name:"BookingTickets",
        path:"/bookingticket",
        exact:false,
        component:<BookingTickets/>
    },
    {
        name:"Formvalidation",
        path:"/form",
        exact:false,
        component:<ReuseableCode/>
    },
    {
        name:"Invoice",
        path:"/invoice",
        exact:false,
        component:<Invoice/>
    },
    {
        name:"404notfound",
        path:"/*",
        exact:false,
        component:<NotFound/>
    }
]