import { isObjEmpty } from "../utility/Utils";
import Dasboardq from "../views/dashboard/Dashboardq";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Login from "../views/auth/Login";
import LayoutKosong from "../layouts/LayoutKosong";
import LayoutApp from "../layouts/LayoutApp";

//dashboard
const SemuaRoutes = [
  {
    path: "/login",
    element: <Login />,
    meta: {
      isPublic: true,
      layout: "lay_kosong",
      restricted: true,
    },
  },
  {
    path: "/dashboard",
    element: <Dasboardq />,
  },
];

//Form Referensi

//routesss
const getLayout = {
  blank: <LayoutKosong />,
  lay_app: <LayoutApp />,
};
const getRouteMeta = (route) => {
  if (isObjEmpty(route.element.props)) {
    if (route.meta) {
      return {
        routeMeta: route.meta,
      };
    } else {
      return {};
    }
  }
};
const MergeLayoutRoutes = (layout, defaultLayout) => {
  const LayoutRoutes = [];

  if (SemuaRoutes) {
    SemuaRoutes.filter((route) => {

      //cek jika layout sama dengan parameter masukan
      if (
        (route.meta && route.meta.layout && route.meta.layout === layout) ||
        ((route.meta === undefined || route.meta.layout === undefined) && defaultLayout === layout)
      ) {

        //default is private route
        let RouteTag = PrivateRoute;
        if (route.meta) {
          RouteTag =
            route.meta && route.meta.isPublic ? PublicRoute : PrivateRoute;
        }

        if (route.element) {
          route.element = <RouteTag route={route}> {route.element} </RouteTag>;
        }
      }

      LayoutRoutes.push(route);
      return LayoutRoutes;
    });
  }
  return LayoutRoutes;
};

const getRoutes = () => {
  const defaultLayout = "lay_app";
//   const layouts = ["lay_app", "lay_kosong"];

  const AllRoutes = [];

//   layouts.forEach((layoutItem) => {
    const LayoutRoutes = MergeLayoutRoutes('lay_app', defaultLayout);

    AllRoutes.push({
      path: "/",
      element: getLayout[defaultLayout],//getLayout['lay_app'], //|| getLayout[defaultLayout], //parent ambil sesuai 
      children: LayoutRoutes,
    });
//   });
  return AllRoutes;
};

export { SemuaRoutes, getRoutes };
