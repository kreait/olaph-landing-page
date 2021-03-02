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
            path: "/imprint",
            name: "imprint",
            component: () => import("./views/Imprint.vue")
        }
    ]
});
