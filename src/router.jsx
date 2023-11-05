import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Dashboard from "./pages/Dashboard";
import Itens from "./pages/Itens";
import Item from "./pages/Item";
import ItemEdit from "./pages/ItemEdit";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [{
            index: true,
            element: <Dashboard />
        }, {
            path: "itens",
            element: <Itens />
        }, {
            path: "itens/:itemId",
            element: <Item />
        }, {
            path: "itens/:itemId/edit",
            element: <ItemEdit />
        }]
    }
])

export default router