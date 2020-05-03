import InvoiceLayout from "../../layout/Invoices";

const Home = () => import("./Home");
const Detail = () => import("./Detail");

export default [
  {
    path: "/invoices",
    component: InvoiceLayout,
    children: [
      {
        path: "",
        name: "invoice",
        component: Home,
        children: [
          {
            path: ":invoice_id",
            name: "invoice-detail",
            component: Detail,
          },
        ],
      },
    ],
  },
];
