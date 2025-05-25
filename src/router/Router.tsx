import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { lazy } from "react";

const Home = lazy(() => import("@/pages/Home").then((m) => ({ default: m.Home })));
const TemplateConfigurator = lazy(() => import("@/pages/TemplateConfigurator").then((m) => ({ default: m.TemplateConfigurator })));
const Template = lazy(() => import("@/pages/Template").then((m) => ({ default: m.Template })));
const NotFound = lazy(() => import("@/pages/NotFound").then((m) => ({ default: m.NotFound })));
const ComingSoon = lazy(() => import("@/pages/ComingSoon").then((m) => ({ default: m.ComingSoon })));

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
                path: 'configurator/:id?',
                element: <TemplateConfigurator />,
            },
            {
                path: 'configurator/:id/templates',
                element: <Template />,
            },
            {
                path: 'coming-soon',
                element: <ComingSoon />,
            }
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);