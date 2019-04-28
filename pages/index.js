/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Card from "../src/card";
import posts from "../src/posts";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    paper: {
        marginBottom: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    grid: {
        padding: theme.spacing.unit * 2,
    },
});

class Index extends React.Component {
    state = {
        open: false,
    };

    handleClose = () => {
        this.setState({
            open: false,
        });
    };

    handleClick = () => {
        this.setState({
            open: true,
        });
    };

    render() {
        const {classes} = this.props;
        const {open} = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar className={classes.grow}>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            jort.world
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid container className={classes.grid} spacing={24}>
                    <Grid  item xs={12}>
                        {posts.posts.map(post => (<Paper className={classes.paper} key={post.title} ><Card className={classes.gridItem}{...post}/></Paper>))}
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Index.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
