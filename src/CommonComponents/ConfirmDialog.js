import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({

}));

export default function ConfirmDialog({open, title, contentText, handleClose}) {
    const classes = useStyles();

    return (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
             {contentText}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() =>handleClose(false)} color="primary">
              İptal
            </Button>
            <Button onClick={() =>handleClose(true)} color="primary" autoFocus>
              Onayla
            </Button>
          </DialogActions>
        </Dialog>
    );

}