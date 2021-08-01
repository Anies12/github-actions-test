import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const HomeView = () => {
  const classes = useStyles();

  return (
    <>Hello</>
  );
};

export default HomeView;
