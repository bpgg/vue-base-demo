import Layout from "@/views/Layout/index.vue"

const routes = [
    {
        path: "/",
        id: "1",
        meta: {

            name: "vue的各类小demo",
            icon: "el-icon-tickets"
        },
        children: [
            {
                path: "/todolist",
                id: "1.1",
                meta: {

                    name: "todoList",
                    icon: "el-icon-tickets"
                },
                component: () =>
                    import(/* webpackChunkName: "about" */ "../views/TodoListPage.vue")
            },
            {
                path: "/test",
                id: "1.2",
                meta: {

                    name: "test",
                    icon: "el-icon-tickets"
                },
                component: () =>
                    import(/* webpackChunkName: "about" */ "../views/Main.vue")
            },
        ],
        component: Layout
    },

];


export default routes;