import BaseLayout from "../../layout/Base";

const Index = () => import("./Index");

export default [
  {
    path: "/",
    component: BaseLayout,
    children: [
      {
        path: "",
        component: Index,
      },
    ],
  },
];
