import React from 'react';

//Material Ui Library
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import MtButton from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import Typography from '@material-ui/core/Typography';
import PowerOffIcon from '@material-ui/icons/PowerOff';
import BugReportIcon from '@material-ui/icons/BugReport';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Divider from '@material-ui/core/Divider';
import { Button, notification, Space } from 'antd';


//Components
import ConfirmDialog from '../../CommonComponents/ConfirmDialog'

import '../css/Card.css'

const useStyles = makeStyles((theme) => ({  
    card: {
        maxWidth: 345,
        marginLeft:"6%",
        marginTop: "5%",
    },
    cardHeader: {
        backgroundColor:"white",
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    button: {
        color:"#F64336",
        borderColor:"#F64336",
        marginLeft:"10px"
    },
    taskIcon:{
        color:"#F64336"
    },
    bottomIcon: {
        color:"#F64336",
        borderColor:"#F64336"
    }
}));

export default function RequestCard() {
    const classes = useStyles();
    var [isConfirmOpen, setIsConfirm] = React.useState(false)
    var [isConfirmPauseOpen, setIsConfirmPauseOpen] = React.useState(false)

    const confirmAction = () => {
        setIsConfirm(true);
    }

    const confirmClose = (bool) => {
        if(bool) {
            openNotificationWithIcon("success", "bottomRight", "Başarılı", "Teste taşıma işlemi başarıyla gerçekleştirildi.")
        } else {
            openNotificationWithIcon("error", "bottomRight", "Hata", "Teste taşıma işlemi sırasında bir hata oluştu.")
        }
        setIsConfirm(false);
    }

    const confirmPauseAction = () => {
        setIsConfirmPauseOpen(true);
    }

    const confirmClosePause = (bool) => {
        if(bool) {
            openNotificationWithIcon("success", "bottomRight", "Başarılı", "Duraklatma işlemi başarıyla gerçekleştirildi.")
        } else {
            openNotificationWithIcon("error", "bottomRight", "Hata", "Duraklatma işlemi sırasında bir hata oluştu.")
        }
        setIsConfirm(false);
        setIsConfirmPauseOpen(false);
    }

    const openNotificationWithIcon = (type, placement, title, text) => {
        notification[type]({
          message: title,
          placement,
          description: text,
        });
      };

    return (
        <Card className={classes.card}>
            <CardHeader className={classes.cardHeader}
                avatar={ <Avatar aria-label="recipe"  src="https://cdn0.iconfinder.com/data/icons/avatar-78/128/12-512.png"/> }
                action={  <IconButton disabled={true} >  <AssignmentIcon className={classes.taskIcon} /> </IconButton> }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016" />

            <Divider/>

            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>

            <CardActions disableSpacing>
                   <div>
                        <MtButton
                            variant="outlined"
                            // color="primary"
                            className={classes.bottomIcon}
                            size="small"
                            onClick={confirmPauseAction}
                            startIcon={<PowerOffIcon  />} >
                            Duraklat
                        </MtButton>
                        <ConfirmDialog open={isConfirmPauseOpen} handleClose={confirmClosePause} title="Duraklat" contentText="Bu görevi duraklatmak istediğinize emin misiniz?" />
                    </div>
                
                
                    <div >
                        <MtButton
                            variant="outlined"
                            // color="primary"
                            size="small"
                            onClick={confirmAction}
                            className={classes.button}
                            startIcon={<BugReportIcon />} >
                            Test
                        </MtButton>
                        <ConfirmDialog open={isConfirmOpen} handleClose={confirmClose} title="Test" contentText="Bu görevi teste almak istediğinizden emin misiniz?" />
                    </div>

                              
                <IconButton
                    className={classes.expand } >
                    <CancelIcon  className={classes.bottomIcon }/>
                </IconButton>
            </CardActions>

        </Card>
    );
}

