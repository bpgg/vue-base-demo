import Layout from "@/views/Layout/index.vue"

const routes = [
    {
        path: "/",
        id: "1",
        meta: {

            name: "组件基础及组件注册",
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
        ],
        component: Layout
    },
    {
        path: "/vmodel",
        id: "2",
        meta: {

            name: "双向绑定和单向数据流",
            icon: "el-icon-tickets"
        },
        children: [
            {
                path: "/vmodel/demo01",
                id: "2.1",
                meta: {
                    name: "demo01",
                    icon: "el-icon-tickets"
                },
                component: () =>
                    import(/* webpackChunkName: "about" */ "../views/VModelPage.vue")
            },
        ],
        component: Layout
    },
    {
        path: "/md",

        id: "3",
        meta: {

            name: "markDown 解析",
            icon: "el-icon-tickets"
        },
        children: [
            {
                path: "/md/demo01",
                id: "3.1",
                meta: {
                    name: "md_demo01",
                    icon: "el-icon-tickets"
                },
                component: () =>
                    import(/* webpackChunkName: "about" */ "../views/MarkDownPage.vue")
            },
        ],
        component: Layout
    },
    {
        path: "/upload",

        id: "4",
        meta: {

            name: "文件上传/导出",
            icon: "el-icon-tickets"
        },
        children: [
            {
                path: "/upload/demo01",
                id: "4.1",
                meta: {
                    name: "upload_demo01",
                    icon: "el-icon-tickets"
                },
                component: () =>
                    import(/* webpackChunkName: "about" */ "../views/Upload/UploadPage.vue")
            },
        ],
        component: Layout
    },
    {
        path: "/table",

        id: "5",
        meta: {

            name: "表格",
            icon: "el-icon-tickets"
        },
        children: [
            {
                path: "/table/demo01",
                id: "5.1",
                meta: {
                    name: "table_demo01",
                    icon: "el-icon-tickets"
                },
                component: () =>
                    import(/* webpackChunkName: "about" */ "../views/Table/TablePage.vue")
            },
        ],
        component: Layout
    },



];


export default routes;