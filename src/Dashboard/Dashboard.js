import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import MaterialDrawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import BugReportIcon from '@material-ui/icons/BugReport';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import FiberNew from '@material-ui/icons/FiberNew';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Avatar from '@material-ui/core/Avatar';

//Components
import DrawerList from './components/DrawerList';
import RequestCard from './components/RequestCard';
import InProcessCard from './components/InProcessCard';
import CompletedCard from './components/CompletedCard';
import AddTaskDialog from './components/AddTaskDialog';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        backgroundColor: "white",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        backgroundColor: "white",
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        backgroundColor: "white",
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    paperHeaderNew: {
        backgroundColor: "#F64336",
        paddingTop: "2%",
        paddingLeft: "7%",
        paddingBottom: "2%",
        display: "flex"
    },
    paperHeaderProcess: {
        backgroundColor: "#FB8B02",
        paddingTop: "2%",
        paddingLeft: "7%",
        paddingBottom: "2%",
        display: "flex"
    },
    paperHeaderCompleted: {
        backgroundColor: "#FFB302",
        paddingTop: "2%",
        paddingLeft: "7%",
        paddingBottom: "2%",
        display: "flex"
    },
    iconHeader: {
        marginTop: "1%",
        color: "white"
    },
    textHeader: {
        color: "white",
        marginLeft: "2%"
    },
    paperHeaderNewBackground: {
        backgroundColor: "#EBE0DF",
        paddingBottom: "5%"
    },
    paperHeaderProcessBackground: {
        backgroundColor: "#EFE5D8",
        paddingBottom: "5%"
    },
    paperHeaderCompBackground: {
        backgroundColor: "#EEEAD9",
        paddingBottom: "5%"
    },
    logo: {
        marginRight: "13%"
    },
    grid: {
        marginTop: "1%"
    }
}));

export default function Dashboard() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
  
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>

                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)} >
                        <MenuIcon color="primary" />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        {/* TodoList */}
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon color="action" />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>

            <MaterialDrawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>

                    <Avatar
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Breezeicons-apps-48-flow.svg/1200px-Breezeicons-apps-48-flow.svg.png" />
                    <Typography component="h1" variant="h6" color="inherit" noWrap >
                        WorkFlow
                    </Typography>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon color="inherit" />
                    </IconButton>
                </div>

                <DrawerList />

            </MaterialDrawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container className={classes.container}>
                    <AddTaskDialog/>
                    <Grid container spacing={3} className={classes.grid}>
                        <Grid item xs={12} md={4} lg={4}>
                            <Paper className={classes.paperHeaderNewBackground}>
                                <div className={classes.paperHeaderNew}>
                                    <FiberNew className={classes.iconHeader} color="primary" />
                                    <Typography className={classes.textHeader} variant="h6" gutterBottom>
                                        İşler
                                    </Typography>
                                </div>
                                <RequestCard className={classes.card}></RequestCard>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={4} lg={4}>
                            <Paper className={classes.paperHeaderProcessBackground}>
                                <div className={classes.paperHeaderProcess}>
                                    <BugReportIcon className={classes.iconHeader} color="primary" />
                                    <Typography className={classes.textHeader} variant="h6" gutterBottom>
                                        Süreç İçinde
                                    </Typography>
                                </div>
                                <InProcessCard className={classes.card}></InProcessCard>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={4} lg={4}>
                            <Paper className={classes.paperHeaderCompBackground}>
                                <div className={classes.paperHeaderCompleted}>
                                    <CheckCircleIcon className={classes.iconHeader} color="primary" />
                                    <Typography className={classes.textHeader} variant="h6" gutterBottom>
                                        Tamamlandı
                                    </Typography>
                                </div>
                                <CompletedCard></CompletedCard>
                            </Paper>
                        </Grid>

                    </Grid>
                </Container>
            </main>
        </div>
    );
}