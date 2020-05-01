import InvoiceLayout from "../../layout/Invoices";

const List = () => import("./List");
const Detail = () => import("./Detail");

export default [
  {
    path: "/invoices",
    component: InvoiceLayout,
    children: [
      {
        path: "",
        component: List,
      },
      {
        path: ":id",
        component: Detail,
      },
    ],
  },
];
