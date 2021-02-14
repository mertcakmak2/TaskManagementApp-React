import React from 'react';

//Material Ui Library
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import Typography from '@material-ui/core/Typography';
import PowerOffIcon from '@material-ui/icons/PowerOff';
import Button from '@material-ui/core/Button';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Divider from '@material-ui/core/Divider';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles((theme) => ({  
    card: {
        maxWidth: 345,
        marginLeft:"6%",
        marginTop: "5%"
    },
    cardHeader: {
        // backgroundColor:"#EFE5D8"
        backgroundColor:"white"
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
        color:"#FB8B02",
        borderColor:"#FB8B02",
        marginLeft:"10px"
    },
    taskIcon:{
        color:"#FB8B02"
    },
    bottomIcon: {
        color:"#FB8B02",
        borderColor:"#FB8B02"
    }
}));

export default function InProcessCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardHeader className={classes.cardHeader}
                avatar={ <Avatar aria-label="recipe" className={classes.avatar} src="https://cdn0.iconfinder.com/data/icons/avatar-78/128/12-512.png"/> }
                action={  <IconButton disabled={true}>  <AssignmentIcon className={classes.taskIcon} /> </IconButton> }
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
                {/* <IconButton aria-label="add to favorites">
                    <FavoriteIcon color="primary" />
                </IconButton>
                
                <IconButton aria-label="share">
                    <CheckCircleIcon color="primary"/>
                </IconButton> */}

                    <div>
                        <Button
                            variant="outlined"
                            // color="primary"
                            className={classes.bottomIcon}
                            size="small"
                            startIcon={<PowerOffIcon />}
                        >
                            Duraklat
                        </Button>
                    </div>
                
                
                    <div >
                        <Button
                            variant="outlined"
                            size="small"
                            className={classes.button}
                            startIcon={<CheckCircleIcon />} >
                            Tamamlandı
                        </Button>
                    </div>  
                
                <IconButton
                    className={classes.expand} >
                    <CancelIcon className={classes.bottomIcon} />
                </IconButton>
            </CardActions>

        </Card>
    );
}

