import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IndexChart from '../ChartJS';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function SideBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
            <IndexChart/>
        </main>
    </div>
  );
}




// import React from "react";
// import { Link } from "react-router-dom";
// import clsx from "clsx";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
// import Drawer from "@material-ui/core/Drawer";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import List from "@material-ui/core/List";
// import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import DiamondIcon from '@mui/icons-material/Diamond';
// import PersonIcon from '@mui/icons-material/Person';
// import CategoryIcon from '@mui/icons-material/Category';
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';


// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: "flex",
//     },
//     appBar: {
//         transition: theme.transitions.create(["margin", "width"], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//     },
//     appBarShift: {
//         width: `calc(100% - ${drawerWidth}px)`,
//         marginLeft: drawerWidth,
//         transition: theme.transitions.create(["margin", "width"], {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     hide: {
//         display: "none",
//     },
//     drawer: {
//         width: drawerWidth,
//         flexShrink: 0,
//     },
//     drawerPaper: {
//         width: drawerWidth,
//     },
//     drawerHeader: {
//         display: "flex",
//         alignItems: "center",
//         padding: theme.spacing(0, 1),
//         // necessary for content to be below app bar
//         ...theme.mixins.toolbar,
//         justifyContent: "flex-end",
//     },
//     content: {
//         flexGrow: 1,
//         padding: theme.spacing(3),
//         transition: theme.transitions.create("margin", {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//         marginLeft: -drawerWidth,
//     },
//     contentShift: {
//         transition: theme.transitions.create("margin", {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//         marginLeft: 0,
//     },
// }));

// export default function SideBar() {
//     const classes = useStyles();
//     const theme = useTheme();
//     const [open, setOpen] = React.useState(false);

//     const handleDrawerOpen = () => {
//         setOpen(true);
//     };

//     const handleDrawerClose = () => {
//         setOpen(false);
//     };

//     return (
//         <div className={classes.root}>
//             <CssBaseline />
//             <AppBar
//                 // position="fixed"
//                 className={clsx(classes.appBar, {
//                     [classes.appBarShift]: open,
//                 })}
//             >
//                 <Toolbar>
//                     <IconButton
//                         color="inherit"
//                         aria-label="open drawer"
//                         onClick={handleDrawerOpen}
//                         edge="start"
//                         className={clsx(classes.menuButton, open && classes.hide)}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h6" noWrap>
//                         Agregar el Navbar que ya está listo
//                     </Typography>
//                 </Toolbar>
//             </AppBar>
//             <Drawer
//                 className={classes.drawer}
//                 variant="persistent"
//                 anchor="left"
//                 open={open}
//                 classes={{
//                     paper: classes.drawerPaper,
//                 }}
//             >
//                 <div className={classes.drawerHeader}>
//                     <IconButton onClick={handleDrawerClose}>
//                         {theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//                     </IconButton>
//                 </div>
//                 <Divider />
//                 <List>
//                     {["Dashboard"].map((text) => (
//                         <ListItem component={Link} to="/" button key={text}>
//                             <ListItemIcon>{<DashboardIcon />}</ListItemIcon>
//                             <ListItemText primary={text} />
//                         </ListItem>
//                     ))}
//                 </List>
//                 <List>
//                     {["Productos"].map((text) => (
//                         <ListItem component={Link} to="/productos" button key={text}>
//                             <ListItemIcon>{<DiamondIcon />}</ListItemIcon>
//                             <ListItemText primary={text} />
//                         </ListItem>
//                     ))}
//                 </List>
//                 <List>
//                     {["Usuarios"].map((text) => (
//                         <ListItem button key={text}>
//                             <ListItemIcon>{<PersonIcon />}</ListItemIcon>
//                             <ListItemText primary={text} />
//                         </ListItem>
//                     ))}
//                 </List>
//                 <List>
//                     {["Categorias"].map((text) => (
//                         <ListItem button key={text}>
//                             <ListItemIcon>{<CategoryIcon />}</ListItemIcon>
//                             <ListItemText primary={text} />
//                         </ListItem>
//                     ))}
//                 </List>
//                 <List>
//                     {["Sub Categorias"].map((text) => (
//                         <ListItem button key={text}>
//                             <ListItemIcon>{<AutoAwesomeIcon />}</ListItemIcon>
//                             <ListItemText primary={text} />
//                         </ListItem>
//                     ))}
//                 </List>
//             </Drawer>
//             <main
//                 className={clsx(classes.content, {
//                     [classes.contentShift]: open,
//                 })}
//             ></main>
//         </div>
//     );
// }
