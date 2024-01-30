import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue';
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
            components: {
                default: TeamsList, footer: TeamsFooter,
            },
            children: [
                { name: "team-members", path: ':teamId', component: TeamMembers, props: true },

            ]
        },
        { path: '/users', components: { default: UsersList, footer: UsersFooter, } },
        { path: '/:notFound(.*)', component: NotFound },
    ],
    linkActiveClass: "active", // for making a custom class rather then router-link-active
    scrollBehavior (to, from, savedPosition) {
        console.log("to", to);
        console.log("from", from);
        console.log("savedPosition", savedPosition);
        if(savedPosition){
            return savedPosition;
        }
        return {left: 0, top: 0};
    }
})

const app = createApp(App)

app.use(router);

app.mount('#app');
