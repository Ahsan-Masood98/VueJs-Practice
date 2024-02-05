import { createRouter, createWebHistory } from 'vue-router';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachesDetails from './pages/coaches/CoachesDetails.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsRecived from './pages/requests/RequestsRecived.vue';
import CoachesRegisteration from './pages/coaches/CoachesRegisteration.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect:'/coaches' },
        { path: '/coaches', component: CoachesList },
        {
            path: '/coaches/:id',
            component: CoachesDetails,
            children: [
                { path: "contact", component: ContactCoach },
            ]
        },
        { path: '/register', component: CoachesRegisteration },
        { path: '/requests', component: RequestsRecived },
        { path: '/:notFound(.*)', component: NotFound },  
    ],
});

export default router;