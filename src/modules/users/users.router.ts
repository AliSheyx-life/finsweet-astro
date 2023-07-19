import SideMenu from "@/layouts/SideMenu/SideMenu.vue";

export default [
  {
    path: "/users",
    name: "",
    component: SideMenu,
    children: [
      {
        path: "",
        name: "users",
        // component: () => import("./views/DashboardPage.vue"),
        component: () => import("./views/UsersPage.vue"),
      },
    ],
  },
];
