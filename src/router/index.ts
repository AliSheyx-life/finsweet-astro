import { createRouter, createWebHistory } from "vue-router";

// I use import.meta.glob to import all the routes from the modules folder.
// This way I don't have to manually import each route file.
// I also use eager: true to make sure the routes are loaded before the app is mounted.
const importedModules: any = import.meta.glob("../modules/**/*.router.ts", {
  eager: true,
});

const modules: any[] = [];

Object.keys(importedModules).forEach((key) => {
  if (importedModules[key]?.default) {
    if (
      Array.isArray(importedModules[key].default) &&
      importedModules[key].default.length
    ) {
      modules.push(...importedModules[key].default);
    }
  }
});

const routes = [
  {
    path: "/",
    name: "home",
    redirect: { name: "dashboard" },
  },
  ...modules,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});

export default router;
