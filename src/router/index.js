import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import PPGLayout from '../views/PPG/PPGLayout.vue';
import Profil from '../views/PPG/Profil.vue';
import Artefak from '../views/PPG/Artefak.vue';
import Analisis from '../views/PPG/Analisis.vue';
import ModelGuru from '../views/PPG/ModelGuru.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/ppg',
    component: PPGLayout,
    children: [
      {
        path: '',
        name: 'PPGProfil',
        component: Profil,
      },
      {
        path: 'artefak',
        name: 'PPGArtefak',
        component: Artefak,
      },
      {
        path: 'analisis',
        name: 'PPGAnalisis',
        component: Analisis,
      },
      {
        path: 'model-guru',
        name: 'PPGModelGuru',
        component: ModelGuru,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
