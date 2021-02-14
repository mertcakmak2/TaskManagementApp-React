import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MessageIcon from '@material-ui/icons/Message';
import PeopleIcon from '@material-ui/icons/People';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ShareIcon from '@material-ui/icons/Share';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Divider from '@material-ui/core/Divider';
import WorkIcon from '@material-ui/icons/Work';
import { makeStyles } from '@material-ui/core/styles';
import DateRangeIcon from '@material-ui/icons/DateRange';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import grey from '@material-ui/core/colors/grey';

import '../css/drawerList.css'

const useStyles = makeStyles((theme) => ({  
    itemText: {
        maxWidth: 345,
        marginLeft:"6%"
    },
    buttonColor: {
      color:"#303f9f"
    },
    itemText: {
      color:"#black",
    }
}));

export default function DrawerList(props) {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

    return (
        <div>
          <List>
              <ListItem selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0) } button>
              <ListItemIcon >
                <DashboardIcon className={classes.buttonColor} />
              </ListItemIcon>
              <ListItemText className={classes.itemText} primary="Dashboard" />
            </ListItem>

            <ListItem selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1) } button>
              <ListItemIcon>
                <WorkIcon className={classes.buttonColor}/>
              </ListItemIcon>
              <ListItemText className={classes.itemText} primary="Tüm İşler" />
            </ListItem>

            <ListItem selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2) } button>
              <ListItemIcon>
                <NotificationsIcon className={classes.buttonColor}/>
              </ListItemIcon>
              <ListItemText className={classes.itemText} primary="Bildirimler" />
            </ListItem>

            <ListItem selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3) } button>
              <ListItemIcon>
                <DateRangeIcon className={classes.buttonColor}/>
              </ListItemIcon>
              <ListItemText className={classes.itemText} primary="Takvim" />
            </ListItem>

            <ListItem selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4) } button>
              <ListItemIcon>
                <EqualizerIcon className={classes.buttonColor}/>
              </ListItemIcon>
              <ListItemText className={classes.itemText} primary="Grafik" />
            </ListItem>

            <ListItem selected={selectedIndex === 5}
              onClick={(event) => handleListItemClick(event, 5) } button>
              <ListItemIcon>
                <PeopleIcon className={classes.buttonColor}/>
              </ListItemIcon>
              <ListItemText className={classes.itemText} primary="Grup" />
            </ListItem>

            <ListItem selected={selectedIndex === 6}
              onClick={(event) => handleListItemClick(event, 6) } button>
                <ListItemIcon>
                    <ShareIcon className={classes.buttonColor}/>
                </ListItemIcon>
                <ListItemText className={classes.itemText} primary="Paylaşımlar" />
            </ListItem>

            <ListItem selected={selectedIndex === 7}
              onClick={(event) => handleListItemClick(event, 7) } button>
              <ListItemIcon>
                <MessageIcon className={classes.buttonColor}/>
              </ListItemIcon>
              <ListItemText className={classes.itemText} primary="Mesaj" />
            </ListItem>

            <Divider />

            <ListItem selected={selectedIndex === 8}
              onClick={(event) => handleListItemClick(event, 8) } button>
                <ListItemIcon>
                    <AssignmentIcon className={classes.buttonColor}/>
                </ListItemIcon>
            <ListItemText className={classes.itemText} primary="Current month" />
            </ListItem>
            
            <ListItem selected={selectedIndex === 9}
              onClick={(event) => handleListItemClick(event, 9) } button>
                <ListItemIcon>
                    <AssignmentIcon className={classes.buttonColor}/>
                </ListItemIcon>
            <ListItemText className={classes.itemText} primary="Last quarter" />
            </ListItem>
          </List>           
      </div>
    );
}

