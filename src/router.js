import { createRouter, createWebHistory } from "vue-router";
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import UsersFooter from './components/users/UsersFooter.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' }, // we can use alias instead if redirect
        // { path: '/teams', component: TeamsList, alias: '/' },
        {
            path: '/teams',
            name: 'teams',
            meta: { needsAuth: true },
            components: {
                default: TeamsList,
                footer: TeamsFooter,
            },
            children: [
                {
                    name: "team-members",
                    path: ':teamId',
                    component: TeamMembers,
                    props: true
                },
            ]
        },
        {
            path: '/users',
            components: {
                default: UsersList,
                footer: UsersFooter,
            },
            beforeEnter: (_, _2, next) => {
                console.log("User BeforeEnter")
                next();
            }
        },
        { path: '/:notFound(.*)', component: NotFound },
    ],
    linkActiveClass: "active", // for making a custom class rather then router-link-active
    // scrollBehavior (to, from, savedPosition) {
    scrollBehavior(_, _2, savedPosition) { // _, _2 tells that there are 2 args which we are not using but are there
        // console.log("to", to);
        // console.log("from", from);
        // console.log("savedPosition", savedPosition);
        if (savedPosition) {
            return savedPosition;
        }
        return { left: 0, top: 0 };
    }
});

router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    console.log("Gloabal BeforeEach")
    // console.log("to", to);
    // console.log("from", from);
    // next(); // to allow all
    // next(false); // to disallow all routes 
    if (to.meta.needsAuth) {
        console.log('Needs auth!');
        next();
    } else {
        next();
    }
    // bellow code will redirect any other page the else section
    // if (to.name === "team-members") {
    //     next();
    // } else {
    //     next({ name: "team-members", params: { teamId: "t2" } });
    // }
});

export default router;
