import { type RouteConfig, index, route} from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
    route("menu", "routes/menu.tsx")
    // route("home","routes/home.tsx"),
    // route("about","routes/about.tsx"),
    // route("navbar","routes/navbar.tsx"),
    // route("app","routes/app.tsx"),
    // route("notfound","routes/notfound.tsx")
] satisfies RouteConfig;
