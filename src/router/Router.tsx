import { createBrowserRouter, Navigate } from "react-router-dom";

import { RootLayout } from "../layouts/RootLayout";
import { Home } from "../pages/Home";
import { TemplateGenerator } from "@/pages/TemplateGenerator";
import { Template } from "@/pages/Template";

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
                path: 'generator/:id?',
                element: <TemplateGenerator />,
            },
            {
                path: 'generator/:id/templates',
                element: <Template />,
            },
        ],
    },
    {
        path: "*",
        element: <Navigate to={'/'} />,
    },
]);