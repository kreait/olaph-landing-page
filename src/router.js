import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const authenticate = (to, from, next) => {

    const loggedIn = localStorage.getItem("user");
    if(!loggedIn){
        return next("/login")
    }
    next()
};

export default new Router({
    mode: 'history',
    routes: [
        {
            path: "",
            name: "home",
            component: Home
        },
        {
            path: "/success",
            name: "success",
            component: () => import("./views/Success.vue")
        }, {
            path: "/beta",
            name: "beta",
            component: () => import("./views/Beta.vue")
        },
        {
            path: "/error",
            name: "error",
            component: () => import("./views/Error.vue")
        },
        {
            path: "/imprint",
            name: "imprint",
            component: () => import("./views/Imprint.vue")
        },
        {
            path: "/feedback",
            name: "feedback",
            component: () => import("./views/Feedback.vue")
        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: () => import("./views/Dashboard.vue")
        },
        {
            path: "/admin",
            name: "admin",
            component: () => import("./views/Admin.vue")
        }
    ]
});
