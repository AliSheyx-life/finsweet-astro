import SideMenu from "@/layouts/SideMenu/SideMenu.vue";

export default [
  {
    path: "/order",
    name: "",
    component: SideMenu,
    children: [
      {
        path: "",
        name: "order",
        // component: () => import("./views/DashboardPage.vue"),
        component: () => import("./views/OrderPage.vue"),
      },
    ],
  },
];
