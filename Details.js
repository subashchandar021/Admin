import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';

import {Grid} from '@material-ui/core';

import useStyles from './style.js';

const Details =()=>{
    const classes = useStyles();
    return(
        <Grid container spacing={0} alignItems="center" justify="center" style={{height:'50vh' , gap:"50px"}}>
        <Card className={classes.earnings}>
            <Grid item xs={12} sm={4}>
            <CardHeader title="Earnings(Monthly)"/>
            <CardContent>
                <Typography variant="h5">$10000</Typography>
            </CardContent>
            </Grid>
            </Card>

         <Card className={classes.earningsanual}>
            <Grid item xs={12} sm={4}>
            <CardHeader title="Earnings(Anual)"/>
            <CardContent>
                <Typography variant="h5">$120000</Typography>
            </CardContent>
            </Grid>
            </Card>
            <Card className={classes.task}>
            <Grid item xs={12} sm={4}>
            <CardHeader title="Task "/>
            <CardContent>
                <Typography variant="h5">50%</Typography>
            </CardContent>
            </Grid>
            </Card>
            <Card className={classes.pending}>
            <Grid item xs={12} sm={4}>
            <CardHeader title="Pending "/>
            <CardContent>
                <Typography variant="h5">18</Typography>
            </CardContent>
            </Grid>
            </Card>
          </Grid>        
    )
}
export default  Details