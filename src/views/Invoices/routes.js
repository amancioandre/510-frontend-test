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
        path: ":invoice_id",
        name: "invoice-detail",
        component: Detail,
      },
    ],
  },
];
