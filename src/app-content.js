import { Router } from "@vaadin/router";
import "./home/home.js";
export const router = new Router(document.getElementById("outlet"));

router.setRoutes([
    {
        path: "/",
        component: "app-home",
        action: async () => {
            await import("./home/home.js");
        },
    },
    {
        path: "/about",
        component: "app-about",
        action: async () => {
            await import("./about/about.js");
        },
    },
    {
        path: "/solutions",
        component: "app-solutions",
        action: async () => {
            await import("./solutions/solutions.js");
        },
    },
    {
        path: "/services",
        component: "app-services",
        action: async () => {
            await import("./services/services.js");
        },
    },
    {
        path: "/projects",
        component: "app-projects",
        action: async () => {
            await import("./projects/projects.js");
        },
    },
    {
        path: "/awards",
        component: "app-awards",
        action: async () => {
            await import("./awards/awards.js");
        },
    },
    {
        path: "/contacts",
        component: "app-contacts",
        action: async () => {
            await import("./contacts/contacts.js");
        },
    },
]);
