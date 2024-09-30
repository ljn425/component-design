import Vue from "vue";
import VueRouter from "vue-router";
import CommonView from "@/views/CommonView.vue";
import SlotView from "@/views/SlotView.vue";
import ControllView from "@/views/ControllView.vue";
import RenderlessView from "@/views/RenderlessView.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/common',
        },
        {
            path: '/common',
            component: CommonView,
        },
        {
            path: '/slot',
            component: SlotView,
        },
        {
            path: '/controll',
            component: ControllView,
        },
        {
            path: '/render',
            component: RenderlessView,
        },
    ]
});