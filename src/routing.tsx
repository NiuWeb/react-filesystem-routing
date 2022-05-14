import React from "react";
// the module context
const context = require.context('./pages', true, /\.(t|j)sx$/);
// list of scanned routes
const routes: {
    readonly path: string,
    readonly component: React.FunctionComponent
}[] = [];
// scan the filesystem for routes
context.keys().forEach(key => {
    const path = formatRoute(key);
    const component = context(key);
    if (path) {
        routes.push({
            path,
            component: component.default
        });
    }
});
/**
 * Formats a filesystem path to a React router path.
 * @param path The filesystem path to format.
 * @returns The formatted React router path.
 */
function formatRoute(path: string) {
    // replace multiple slashes with single slash
    path = path.replace(/\/+/g, '/');
    // Remove leading slash and trailing slash
    path = path.replace(/^\.\//, '/').replace(/\.\w+$/, '');
    // replace template names [x] with :x
    path = path.replace(/\[(\w+)\]/g, ":$1");
    // remove index from the end of the route
    path = path.replace(/(\/|^)index$/, '');
    // replace empty string with '/'
    path = path.replace(/^$/, '/');
    return path;
}
console.log(context.keys().map(x => formatRoute(x)));

/**
 * Gets the list of routes.
 * @returns The list of scanned routes.
 */
export function getRoutes() {
    return routes;
}