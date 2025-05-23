import { createBrowserRouter, Navigate } from "react-router-dom";

import { RootLayout } from "../layouts/RootLayout";
import { Home } from "../pages/Home";
import { TemplateGenerator } from "@/pages/TemplateGenerator";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'template/:id',
                element: <TemplateGenerator />
            }
        ],
    },
    {
        path: "*",
        element: <Navigate to={'/'} />,
    },
]);