import AdminDashboard from "./admin/AdminDashboard";
import CreateAdmin from "./admin/CreateAdmin";
import CreateFaculty from "./admin/CreateFaculty";
import CreateStudent from "./admin/CreateStudent";

const adminPaths2 = [
  {
    name: "Dashboard",
    label: "/admin/dashboard",
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    name: "User Management",
    Children: [
      {
        name: "Create Admin",
        label: "/admin/create-admin",
        element: <CreateAdmin></CreateAdmin>,
      },
      {
        name: "Create Faculty",
        label: "/admin/create-faculty",
        element: <CreateFaculty></CreateFaculty>,
      },
      {
        name: "Create Student",
        label: "/admin/create-student",
        element: <CreateStudent></CreateStudent>,
      },
    ],
  },
  {
    name: "Course Management",
    Children: [
      {
        name: " Offered Course",
        label: "/admin/offered-course",
        element: <CreateAdmin></CreateAdmin>,
      },
    ],
  },
];

export const adminPaths = [
  {
    path: "dashboard",
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    path: "create-student",
    element: <CreateStudent></CreateStudent>,
  },
  {
    path: "create-admin",
    element: <CreateAdmin></CreateAdmin>,
  },
  {
    path: "create-faculty",
    element: <CreateFaculty></CreateFaculty>,
  },
];
