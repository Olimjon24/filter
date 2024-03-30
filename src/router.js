import {
    createRouter,
    createWebHistory
} from "vue-router";
import CarouselItem from './components/CarouselItem'
export default createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/CarouselItem',
            name: 'Home',
            component: CarouselItem
        },
        {
            path: '/airFilter',
            name: 'AirFilter',
            component: () => import('./components/filters/AirFilter.vue')
        },
        {
            path: '/oilFilter',
            name: 'OilFilter',
            component: () => import('./components/filters/OilFilter.vue')
        },
        {
            path: '/filter3',
            name: 'Filter3',
            component: () => import('./components/filters/Filter3.vue')
        },
        {
            path: '/filter4',
            name: 'Filter4',
            component: () => import('./components/filters/Filter4.vue')
        },
        {
            path: '/filter5',
            name: 'Filter5',
            component: () => import('./components/filters/Filter5.vue')
        },
        {
            path: '/generator1',
            name: 'Generator1',
            component: () => import('./components/generator/Generator1.vue')
        },
        {
            path: '/generator2',
            name: 'Generator2',
            component: () => import('./components/generator/Generator2.vue')
        },
        {
            path: '/generator3',
            name: 'Generator3',
            component: () => import('./components/generator/Generator3.vue')
        },
        {
            path: '/generator4',
            name: 'Generator4',
            component: () => import('./components/generator/Generator4.vue')
        },
        {
            path: '/generator5',
            name: 'Generator5',
            component: () => import('./components/generator/Generator5.vue')
        },
        {
            path: '/compressor1',
            name: 'Compressor1',
            component: () => import('./components/compressors/Compressor1.vue')
        },
        {
            path: '/compressor2',
            name: 'Compressor2',
            component: () => import('./components/compressors/Compressor2.vue')
        },
        {
            path: '/compressor3',
            name: 'Compressor3',
            component: () => import('./components/compressors/Compressor3.vue')
        },
        {
            path: '/panel1',
            name: 'Panel1',
            component: () => import('./components/panels/Panel1.vue')
        },
        {
            path: '/textile1',
            name: 'Textile1',
            component: () => import('./components/textiles/Textile1.vue')
        },
        {
            path: '/textile2',
            name: 'Textile2',
            component: () => import('./components/textiles/Textile2.vue')
        },
        {
            path: '/textile3',
            name: 'Textile3',
            component: () => import('./components/textiles/Textile3.vue')
        },
        {
            path: '/textile4',
            name: 'Textile4',
            component: () => import('./components/textiles/Textile4.vue')
        },
        {
            path: '/textile5',
            name: 'Textile5',
            component: () => import('./components/textiles/Textile5.vue')
        },

    ]
})