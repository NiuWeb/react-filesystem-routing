import React from "react";
import { Route, Routes } from "react-router-dom";

type FC = React.FC<{ children: React.ReactNode }>;

/**
 * Route basic data
 */
interface IRouteData {
    /**
     * The title of the route
     */
    title: string;
    /**
     * The path of the route
     */
    route: string;
}
/**
 * Route render data
 */
interface IRouteComponents {
    /**
     * The page component
     */
    fc: FC | null;
    /**
     * The layout component
     */
    layout: FC | null;
}
/**
 * Route full data
 */
type IRoute = IRouteData & IRouteComponents;
/**
 * The page routes
 */
const routes: {
    [x: string]: IRoute
} = {};
/**
 * The pages scanner
 */
const context = require.context('./pages', true, /\.(t|j)sx$/);

// Scan the pages!
context.keys().forEach(path => {
    // get the module from context
    const module = context(path);
    // get react component from the file
    const component: FC = module.default;
    // path is lowercase
    path = path.toLowerCase();
    // replace relative path with absolute path
    path = path.replace(/^\.\//, '/');
    // remove extension
    path = path.replace(/\.(t|j)sx$/, '');
    // replace [x] format by url param
    path = path.replace(/\[(\w+)\]/g, ":$1");

    // get path segments
    const segments = path.split('/');
    // get path endpoint
    const endpoint = segments.pop();
    // get path parent
    const parent = (() => {
        const parent = segments.join('/');
        if (parent === "") return "/";
        return parent;
    })();

    // get the route title
    const title = module.title ?? endpoint;

    // create routes if not exists
    if (!routes[parent]) routes[parent] = {
        title,
        route: parent,
        fc: null,
        layout: null
    };

    // set the index entry
    if (endpoint === 'index') {
        routes[parent].fc = component;
        routes[parent].title = title;
    }
    // set the layout entry
    else if (endpoint === '_layout') {
        routes[parent].layout = component;
    }
    // set the page entry
    else {
        if (!routes[path]) routes[path] = {
            title,
            route: path,
            fc: null,
            layout: null
        };
        routes[path].fc = component;
    }
});
/**
 * Gets the parent route of the given path in the routes object
 * @param path The path to get the parent of
 * @returns The parent route
 */
function getParent(path: string) {
    if (path === "/") return undefined;
    const segments = path.split('/');
    segments.pop();
    const parent =  (() => {
        const parent = segments.join('/');
        if (parent === "") return "/";
        return parent;
    })();
    const parentRoute = routes[parent];
    if(parentRoute) return parentRoute;
    return undefined;
}
/**
 * Gets all the parent routes of the given path in the routes object
 * @param path The path to get the routes of
 * @returns The parent routes of the given path
 */
function getAllParents(path: string) {
    const parents: IRoute[] = [];
    let parent = getParent(path);
    while (parent) {
        parents.push(parent);
        parent = getParent(parent.route);
    }
    return parents;
}

/**
 * Gets the basic data of the routes
 */
export function getRoutesData(): IRouteData[] {
    return Object.values(routes).map(route => ({
        title: route.title,
        route: route.route
    }));
}
/**
 * Gets the list of scanned routes with their layout and page components
 */
export function getRoutes() {
    const elements: {path: string, element: React.ReactNode}[] = [];
    Object.keys(routes).forEach(path => {
        // get the route
        const route = routes[path];
        // get all the parent routes
        const parents = getAllParents(path);
        // get the layout components from the parents and the current route
        const layouts = [route.layout].concat(parents.map(p => p.layout)).filter(x => !!x);
        // the page component of the current route
        const fc = route.fc ?? (() => null);
        // create the page element from the component
        let element = React.createElement(fc);
        // and include it in the layout components (from in to out)
        for (let i = 0; i < layouts.length; i++) {
            const layout = layouts[i] ?? (() => null);
            element = React.createElement(layout, null, element);
        }
        elements.push({ path, element });
    });
    return elements;
}
/**
 * Gets the react-router-dom <Routes> element with the scanned routes
 * @returns The <Routes> element with the scanned routes
 */
export function RoutesComponent() {
    const routes = getRoutes();
    return <Routes>
        {routes.map(({ path, element }) => <Route key={path} path={path} element={element} />)}
    </Routes>
}
/**
 * Gets the title of the route with the specified path
 * @param path The path to get the route of
 * @returns The title
 */
export function getTitle(path: string) {
    const route = routes[path];
    if (route) return route.title;
    return "";
}

/**
 * Get the child routes from a parent route
 * @param route The parent route
 * @returns The child routes
 */
export function getChildRoutes(route: string, deep = 1) {
    // get all the paths relative to the parent
    const paths = Object.keys(routes)
        // filter the paths that are not relative to the parent
        .filter(path => path.startsWith(route))
        // remove the parent path
        .map(path => path.substring(route.length))
        // filter the paths that are not in the deep level
        .filter(path => path.split('/').length <= deep)
        // get the routes
        .map(path => routes[route + path]);
    // return the routes
    return paths;
}