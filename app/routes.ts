import { type RouteConfig, index, route} from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
    route("menu", "routes/menu.tsx"),
    route("reservation", "routes/reservation.tsx"),
    route("cart", "routes/cart.tsx"),
    route("checkout", "routes/checkout.tsx" ),
    route("contactus","routes/contactus.tsx"),
    route("about","routes/about.tsx"),
    route("confirmationpage","routes/confirmationpage.tsx"),
    route("mainpage","./mainpage.tsx"),
    route("faqSection","routes/faqSection.tsx"),
    route("hero","routes/hero.tsx")
] satisfies RouteConfig;
