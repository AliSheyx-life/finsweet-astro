import SideMenu from "@/layouts/SideMenu/SideMenu.vue";

export default [
  {
    path: "/branches",
    name: "",
    component: SideMenu,
    children: [
      {
        path: "",
        name: "branches",
        component: () => import("./views/BranchesPage.vue"),
      },
    ],
  },
];
