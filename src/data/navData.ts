import { Navigation } from "@toolpad/core";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const NAVIGATION: Navigation = [
    {
      kind: 'header',
      title: 'Main items',
    },
    {
      segment: 'dashboard',
      title: 'Dashboard',
    //   icon: <DashboardIcon />,
    },
    {
      segment: 'orders',
      title: 'Orders',
    //   icon: <ShoppingCartIcon />,
    },
  ];