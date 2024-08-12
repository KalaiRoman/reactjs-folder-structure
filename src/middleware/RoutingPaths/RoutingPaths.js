import Formvalidation from "../../components/formvalidation/Formvalidation";
import ReuseableCode from "../../components/formvalidation/ReuseableCode";
import NotFound from "../../components/notfound/NotFound";
import { BookingTickets, Calculator, Home, Invoice, Learning, Login, QueryParams, Todo } from "../../pages/AllPages";

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
        name:"Query",
        path:"/query",
        exact:false,
        component:<QueryParams/>
    },
    {
        name:"Learning",
        path:"/learning",
        exact:false,
        component:<Learning/>
    },
    {
        name:"Calculator",
        path:"/cal",
        exact:false,
        component:<Calculator/>
    },
    {
        name:"todo",
        path:"/to",
        exact:false,
        component:<Todo/>
    },
    {
        name:"404notfound",
        path:"/*",
        exact:false,
        component:<NotFound/>
    }
]