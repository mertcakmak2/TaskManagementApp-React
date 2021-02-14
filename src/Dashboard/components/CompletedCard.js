import React from 'react';

//Material Ui Library
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import Tooltip from '@material-ui/core/Tooltip';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({  
    card: {
        maxWidth: 345,
        marginLeft:"6%",
        marginTop: "5%"
    },
    cardHeader: {
        // backgroundColor:"#EEEAD9"
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
        marginLeft:"5px",
        color: "#FFB302"
    },
    taskIcon: {
        color: "#FFB302",
    },
    bottomIcon: {
        color:"#FFB302",
        borderColor:"#FFB302"
    }
}));

export default function CompletedCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardHeader className={classes.cardHeader}
                avatar={ <Avatar aria-label="recipe" className={classes.avatar} src="https://cdn0.iconfinder.com/data/icons/avatar-78/128/12-512.png"/> }
                action={  <IconButton disabled={true} aria-label="settings">  <AssignmentIcon className={classes.taskIcon}/> </IconButton> }
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
               
                
                {/* <IconButton aria-label="share">
                    <DoneAllIcon color="primary"/>
                </IconButton> */}
                 {/* <div>
                        <Button
                            variant="outlined"
                            color="primary"
                            size="small"
                            className={classes.expand }
                            startIcon={<DoneAllIcon color="primary" />}
                        >
                            Duraklat
                        </Button>
                    </div>
                
                 */}
                   
                              
                   <Tooltip title="Okundu Olarak İşaretle" >
                        <IconButton
                            className={classes.expand } >
                            <DoneAllIcon className={classes.bottomIcon} />
                        </IconButton>
                    </Tooltip>
               
            </CardActions>

        </Card>
    );
}

