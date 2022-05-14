import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getRoutes } from "./routing"

export default () => {
    const routes = getRoutes();

    return <BrowserRouter>
        <Routes>
            {routes.map(route => {
                const component = React.createElement(route.component);
                return <Route
                    key={route.path}
                    path={route.path}
                    element={component}
                />
            })}
        </Routes>
    </BrowserRouter>
}