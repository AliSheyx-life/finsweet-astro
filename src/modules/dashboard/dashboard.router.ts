import SideMenu from "@/layouts/SideMenu/SideMenu.vue";

export default [
  {
    path: "/dashboard",
    name: "",
    component: SideMenu,
    children: [
      {
        path: "",
        name: "dashboard",
        // component: () => import("./views/DashboardPage.vue"),
        component: () => import("./views/DashboardOverview1.vue"),
      },
    ],
  },
];
