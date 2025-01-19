
// // // import * as React from 'react';
// // // import { extendTheme, styled } from '@mui/material/styles';
// // // import DashboardIcon from '@mui/icons-material/Dashboard';
// // // import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// // // import BarChartIcon from '@mui/icons-material/BarChart';
// // // import DescriptionIcon from '@mui/icons-material/Description';
// // // import LayersIcon from '@mui/icons-material/Layers';
// // // import { AppProvider } from '@toolpad/core/AppProvider';
// // // import { DashboardLayout } from '@toolpad/core/DashboardLayout';
// // // import { PageContainer } from '@toolpad/core/PageContainer';
// // // import Grid from '@mui/material/Grid2';
// // // import SummarizePage from '../pages/Products/SummarizePage'; // Ensure correct path


// // // const NAVIGATION = [
// // //   {
// // //     kind: 'header',
// // //     title: 'Main items',
// // //   },
// // //   {
// // //     segment: 'dashboard',
// // //     title: 'Dashboard',
// // //     icon: <DashboardIcon />,
// // //   },
// // //   {
// // //     segment: 'summarizer',
// // //     title: 'Page Summarizer',
// // //     icon: <SummarizeIcon />,  // You can use any icon you prefer
// // //   },
// // //   {
// // //     kind: 'divider',
// // //   },
// // //   {
// // //     kind: 'header',
// // //     title: 'Analytics',
// // //   },
// // //   {
// // //     segment: 'reports',
// // //     title: 'Reports',
// // //     icon: <BarChartIcon />,
// // //     children: [
// // //       {
// // //         segment: 'sales',
// // //         title: 'Sales',
// // //         icon: <DescriptionIcon />,
// // //       },
// // //       {
// // //         segment: 'traffic',
// // //         title: 'Traffic',
// // //         icon: <DescriptionIcon />,
// // //       },
// // //     ],
// // //   },
// // //   {
// // //     segment: 'integrations',
// // //     title: 'Integrations',
// // //     icon: <LayersIcon />,
// // //   },
// // // ];

// // // const demoTheme = extendTheme({
// // //   colorSchemes: { light: true, dark: true },
// // //   colorSchemeSelector: 'class',
// // //   breakpoints: {
// // //     values: {
// // //       xs: 0,
// // //       sm: 600,
// // //       md: 600,
// // //       lg: 1200,
// // //       xl: 1536,
// // //     },
// // //   },
// // // });

// // // function useDemoRouter(initialPath) {
// // //   const [pathname, setPathname] = React.useState(initialPath);

// // //   const router = React.useMemo(() => {
// // //     return {
// // //       pathname,
// // //       searchParams: new URLSearchParams(),
// // //       navigate: (path) => setPathname(String(path)),
// // //     };
// // //   }, [pathname]);

// // //   return router;
// // // }

// // // const Skeleton = styled('div')(({ theme, height }) => ({
// // //   backgroundColor: theme.palette.action.hover,
// // //   borderRadius: theme.shape.borderRadius,
// // //   height,
// // //   content: '" "',
// // // }));

// // // export default function ServicesDrawer(props) {
// // //   const { window } = props;

// // //   const router = useDemoRouter('/dashboard');

// // //   // Remove this const when copying and pasting into your project.
// // //   const demoWindow = window ? window() : undefined;

// // //   return (
// // //     <AppProvider
// // //       navigation={NAVIGATION}
// // //       router={router}
// // //       theme={demoTheme}
// // //       window={demoWindow}
// // //     >
// // //       <DashboardLayout>
// // //         <PageContainer>
// // //           <Grid container spacing={1}>
// // //             <Grid size={5} />
// // //             <Grid size={12}>
// // //               <Skeleton height={14} />
// // //             </Grid>
// // //             <Grid size={12}>
// // //               <Skeleton height={14} />
// // //             </Grid>
// // //             <Grid size={4}>
// // //               <Skeleton height={100} />
// // //             </Grid>
// // //             <Grid size={8}>
// // //               <Skeleton height={100} />
// // //             </Grid>

// // //             <Grid size={12}>
// // //               <Skeleton height={150} />
// // //             </Grid>
// // //             <Grid size={12}>
// // //               <Skeleton height={14} />
// // //             </Grid>

// // //             <Grid size={3}>
// // //               <Skeleton height={100} />
// // //             </Grid>
// // //             <Grid size={3}>
// // //               <Skeleton height={100} />
// // //             </Grid>
// // //             <Grid size={3}>
// // //               <Skeleton height={100} />
// // //             </Grid>
// // //             <Grid size={3}>
// // //               <Skeleton height={100} />
// // //             </Grid>
// // //           </Grid>
// // //         </PageContainer>
// // //       </DashboardLayout>
// // //     </AppProvider>
// // //   );
// // // }
// // import * as React from 'react';
// // import { extendTheme, styled } from '@mui/material/styles';
// // import DashboardIcon from '@mui/icons-material/Dashboard';
// // import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// // import BarChartIcon from '@mui/icons-material/BarChart';
// // import DescriptionIcon from '@mui/icons-material/Description';
// // import LayersIcon from '@mui/icons-material/Layers';
// // import SummarizeIcon from '@mui/icons-material/Summarize';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import IconButton from '@mui/material/IconButton';
// // import { AppProvider } from '@toolpad/core/AppProvider';
// // import { DashboardLayout } from '@toolpad/core/DashboardLayout';
// // import { PageContainer } from '@toolpad/core/PageContainer';
// // import Grid from '@mui/material/Grid2';
// // import Drawer from '@mui/material/Drawer';
// // import List from '@mui/material/List';
// // import ListItem from '@mui/material/ListItem';
// // import ListItemIcon from '@mui/material/ListItemIcon';
// // import ListItemText from '@mui/material/ListItemText';
// // import Divider from '@mui/material/Divider';
// // import Typography from '@mui/material/Typography';
// // import Box from '@mui/material/Box';
// // import useMediaQuery from '@mui/material/useMediaQuery';
// // import SummarizePage from '../pages/Products/SummarizePage'; // Ensure correct path

// // const NAVIGATION = [
// //   {
// //     kind: 'header',
// //     title: 'Main items',
// //   },
// //   {
// //     segment: 'dashboard',
// //     title: 'Dashboard',
// //     icon: <DashboardIcon />,
// //   },
// //   {
// //     segment: 'summarizer',
// //     title: 'Page Summarizer',
// //     icon: <SummarizeIcon />,
// //   },
// //   {
// //     kind: 'divider',
// //   },
// //   {
// //     kind: 'header',
// //     title: 'Analytics',
// //   },
// //   {
// //     segment: 'reports',
// //     title: 'Reports',
// //     icon: <BarChartIcon />,
// //     children: [
// //       {
// //         segment: 'sales',
// //         title: 'Sales',
// //         icon: <DescriptionIcon />,
// //       },
// //       {
// //         segment: 'traffic',
// //         title: 'Traffic',
// //         icon: <DescriptionIcon />,
// //       },
// //     ],
// //   },
// //   {
// //     segment: 'integrations',
// //     title: 'Integrations',
// //     icon: <LayersIcon />,
// //   },
// // ];

// // const drawerWidth = 240;

// // const demoTheme = extendTheme({
// //   palette: {
// //     mode: 'dark',
// //     primary: {
// //       main: '#90caf9',
// //     },
// //     background: {
// //       default: '#0a1929',
// //       paper: '#001e3c',
// //     },
// //   },
// //   colorSchemes: { light: true, dark: true },
// //   colorSchemeSelector: 'class',
// //   breakpoints: {
// //     values: {
// //       xs: 0,
// //       sm: 600,
// //       md: 600,
// //       lg: 1200,
// //       xl: 1536,
// //     },
// //   },
// // });

// // function useDemoRouter(initialPath) {
// //   const [pathname, setPathname] = React.useState(initialPath);

// //   const router = React.useMemo(() => {
// //     return {
// //       pathname,
// //       searchParams: new URLSearchParams(),
// //       navigate: (path) => setPathname(String(path)),
// //     };
// //   }, [pathname]);

// //   return router;
// // }

// // const Skeleton = styled('div')(({ theme, height }) => ({
// //   backgroundColor: theme.palette.action.hover,
// //   borderRadius: theme.shape.borderRadius,
// //   height,
// //   content: '" "',
// // }));

// // export default function ServicesDrawer(props) {
// //   const { window } = props;
// //   const [mobileOpen, setMobileOpen] = React.useState(false);
// //   const [activePage, setActivePage] = React.useState('dashboard');
// //   const isMobile = useMediaQuery(demoTheme.breakpoints.down('lg'));

// //   const router = useDemoRouter('/dashboard');
// //   const demoWindow = window ? window() : undefined;

// //   const handleDrawerToggle = () => {
// //     setMobileOpen(!mobileOpen);
// //   };

// //   const handleNavigation = (segment) => {
// //     setActivePage(segment);
// //     router.navigate(`/${segment}`);
// //     if (isMobile) {
// //       setMobileOpen(false);
// //     }
// //   };

// //   const drawer = (
// //     <Box sx={{ bgcolor: 'background.paper', height: '100%' }}>
// //       <Typography variant="h6" sx={{ p: 2, color: 'primary.main' }}>
// //         Admin Panel
// //       </Typography>
// //       <Divider />
// //       <List>
// //         {NAVIGATION.map((item, index) => {
// //           if (item.kind === 'header') {
// //             return (
// //               <Typography
// //                 key={index}
// //                 variant="overline"
// //                 sx={{ px: 2, py: 1, display: 'block', color: 'text.secondary' }}
// //               >
// //                 {item.title}
// //               </Typography>
// //             );
// //           }
// //           if (item.kind === 'divider') {
// //             return <Divider key={index} />;
// //           }
// //           return (
// //             <React.Fragment key={item.segment}>
// //               <ListItem
// //                 button
// //                 selected={activePage === item.segment}
// //                 onClick={() => handleNavigation(item.segment)}
// //               >
// //                 <ListItemIcon sx={{ color: 'primary.main' }}>{item.icon}</ListItemIcon>
// //                 <ListItemText primary={item.title} />
// //               </ListItem>
// //               {item.children?.map((child) => (
// //                 <ListItem
// //                   key={child.segment}
// //                   button
// //                   selected={activePage === child.segment}
// //                   onClick={() => handleNavigation(child.segment)}
// //                   sx={{ pl: 4 }}
// //                 >
// //                   <ListItemIcon sx={{ color: 'primary.main' }}>{child.icon}</ListItemIcon>
// //                   <ListItemText primary={child.title} />
// //                 </ListItem>
// //               ))}
// //             </React.Fragment>
// //           );
// //         })}
// //       </List>
// //     </Box>
// //   );

// //   const renderContent = () => {
// //     switch (activePage) {
// //       case 'summarizer':
// //         return <SummarizePage />;
// //       default:
// //         return (
// //           <Grid container spacing={1}>
// //             <Grid xs={5} />
// //             <Grid xs={12}>
// //               <Skeleton height={14} />
// //             </Grid>
// //             <Grid xs={12}>
// //               <Skeleton height={14} />
// //             </Grid>
// //             <Grid xs={4}>
// //               <Skeleton height={100} />
// //             </Grid>
// //             <Grid xs={8}>
// //               <Skeleton height={100} />
// //             </Grid>
// //             <Grid xs={12}>
// //               <Skeleton height={150} />
// //             </Grid>
// //             <Grid xs={12}>
// //               <Skeleton height={14} />
// //             </Grid>
// //             <Grid xs={3}>
// //               <Skeleton height={100} />
// //             </Grid>
// //             <Grid xs={3}>
// //               <Skeleton height={100} />
// //             </Grid>
// //             <Grid xs={3}>
// //               <Skeleton height={100} />
// //             </Grid>
// //             <Grid xs={3}>
// //               <Skeleton height={100} />
// //             </Grid>
// //           </Grid>
// //         );
// //     }
// //   };

// //   return (
// //     <AppProvider
// //       navigation={NAVIGATION}
// //       router={router}
// //       theme={demoTheme}
// //       window={demoWindow}
// //     >
// //       <Box sx={{ display: 'flex', bgcolor: 'background.default', minHeight: '100vh' }}>
// //         <IconButton
// //           color="inherit"
// //           aria-label="open drawer"
// //           edge="start"
// //           onClick={handleDrawerToggle}
// //           sx={{ mr: 2, display: { lg: 'none' }, position: 'fixed', top: 8, left: 8, zIndex: 1300 }}
// //         >
// //           <MenuIcon />
// //         </IconButton>
        
// //         <Box
// //           component="nav"
// //           sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}
// //         >
// //           {/* Mobile drawer */}
// //           <Drawer
// //             variant="temporary"
// //             open={mobileOpen}
// //             onClose={handleDrawerToggle}
// //             ModalProps={{
// //               keepMounted: true, // Better open performance on mobile.
// //             }}
// //             sx={{
// //               display: { xs: 'block', lg: 'none' },
// //               '& .MuiDrawer-paper': { 
// //                 boxSizing: 'border-box', 
// //                 width: drawerWidth,
// //                 bgcolor: 'background.paper',
// //               },
// //             }}
// //           >
// //             {drawer}
// //           </Drawer>
          
// //           {/* Desktop drawer */}
// //           <Drawer
// //             variant="permanent"
// //             sx={{
// //               display: { xs: 'none', lg: 'block' },
// //               '& .MuiDrawer-paper': { 
// //                 boxSizing: 'border-box', 
// //                 width: drawerWidth,
// //                 bgcolor: 'background.paper',
// //               },
// //             }}
// //             open
// //           >
// //             {drawer}
// //           </Drawer>
// //         </Box>

// //         <Box
// //           component="main"
// //           sx={{
// //             flexGrow: 1,
// //             p: 3,
// //             width: { lg: `calc(100% - ${drawerWidth}px)` },
// //             ml: { lg: `${drawerWidth}px` },
// //           }}
// //         >
// //           <PageContainer>
// //             {renderContent()}
// //           </PageContainer>
// //         </Box>
// //       </Box>
// //     </AppProvider>
// //   );
// // }

// import React from 'react';
// import { extendTheme, styled } from '@mui/material/styles';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import DescriptionIcon from '@mui/icons-material/Description';
// import LayersIcon from '@mui/icons-material/Layers';
// import { AppProvider } from '@toolpad/core/AppProvider';
// import { DashboardLayout } from '@toolpad/core/DashboardLayout';
// import { PageContainer } from '@toolpad/core/PageContainer';
// import Grid from '@mui/material/Grid';
// import SummarizePage from '../pages/Products/SummarizePage'; // Ensure correct path

// // Define navigation structure
// const NAVIGATION = [
//   {
//     kind: 'header',
//     title: 'Main items',
//   },
//   {
//     segment: 'dashboard',
//     title: 'Dashboard',
//     icon: <DashboardIcon />,
//   },
//   {
//     segment: 'summarizer',
//     title: 'Page Summarizer',
//     icon: <DescriptionIcon />,  // Set an appropriate icon
//   },
//   {
//     kind: 'divider',
//   },
//   {
//     kind: 'header',
//     title: 'Analytics',
//   },
//   {
//     segment: 'reports',
//     title: 'Reports',
//     icon: <BarChartIcon />,
//     children: [
//       {
//         segment: 'sales',
//         title: 'Sales',
//         icon: <DescriptionIcon />,
//       },
//       {
//         segment: 'traffic',
//         title: 'Traffic',
//         icon: <DescriptionIcon />,
//       },
//     ],
//   },
//   {
//     segment: 'integrations',
//     title: 'Integrations',
//     icon: <LayersIcon />,
//   },
// ];

// // Define a custom theme
// const demoTheme = extendTheme({
//   colorSchemes: { light: true, dark: true },
//   colorSchemeSelector: 'class',
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 960,
//       lg: 1280,
//       xl: 1920,
//     },
//   },
// });

// // Custom router simulation hook
// function useDemoRouter(initialPath) {
//   const [pathname, setPathname] = React.useState(initialPath);

//   const router = React.useMemo(() => ({
//     pathname,
//     searchParams: new URLSearchParams(),
//     navigate: (path) => setPathname(String(path)),
//   }), [pathname]);

//   return router;
// }

// // Skeleton component for placeholder content
// const Skeleton = styled('div')(({ theme, height }) => ({
//   backgroundColor: theme.palette.action.hover,
//   borderRadius: theme.shape.borderRadius,
//   height,
//   content: '" "',
// }));

// // Main ServicesDrawer component
// export default function ServicesDrawer(props) {
//   const { window } = props;

//   const router = useDemoRouter('/dashboard');

//   // Remove this const when copying and pasting into your project.
//   const demoWindow = window ? window() : undefined;

//   return (
//     <AppProvider
//       navigation={NAVIGATION}
//       router={router}
//       theme={demoTheme}
//       window={demoWindow}
//     >
//       <DashboardLayout>
//         <PageContainer>
//           {router.pathname === '/summarizer' ? (
//             <SummarizePage />
//           ) : (
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <Skeleton height={50} />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <Skeleton height={50} />
//               </Grid>
//               <Grid item xs={12} sm={4}>
//                 <Skeleton height={100} />
//               </Grid>
//               <Grid item xs={12} sm={8}>
//                 <Skeleton height={100} />
//               </Grid>
//               <Grid item xs={12}>
//                 <Skeleton height={200} />
//               </Grid>
//               <Grid item xs={12} sm={3}>
//                 <Skeleton height={100} />
//               </Grid>
//               <Grid item xs={12} sm={3}>
//                 <Skeleton height={100} />
//               </Grid>
//               <Grid item xs={12} sm={3}>
//                 <Skeleton height={100} />
//               </Grid>
//               <Grid item xs={12} sm={3}>
//                 <Skeleton height={100} />
//               </Grid>
//             </Grid>
//           )}
//         </PageContainer>
//       </DashboardLayout>
//     </AppProvider>
//   );
// }
