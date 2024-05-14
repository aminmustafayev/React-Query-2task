import ClientRoot from "../components/ClientRoot";
import AddPages from "../pages/AddPages/AddPages";
import Detail from "../pages/Detail/Detail";
import Sliders from "../pages/Sliders/Sliders";



export const Routes =[
    //Movies Root
    {
        path:"/",
        element:<ClientRoot/>,
        children:[
            {
                index: true,
                element:<Sliders/>
            },
            {
                path:"/:id",
                element:<Detail/>
            },
            {
                path:"addpages",
                element:<AddPages />
            },
        ]
    }
] 
