import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  SvgIcon
} from '@material-ui/core';
import Logo from 'src/components/Logo';
import { THEMES } from 'src/constants';

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 100,
    ...theme.name === THEMES.LIGHT ? {
      boxShadow: 'none',
      backgroundColor: theme.palette.primary.main
    } : {},
  },
  toolbar: {
    minHeight: 64
  }
}));

const TopBar = ({
  className,
  onMobileNavOpen,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <AppBar
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onMobileNavOpen}
          >
            <SvgIcon fontSize="small">
              <MenuIcon />
            </SvgIcon>
          </IconButton>
        </Hidden>
        <Hidden mdDown>
          <RouterLink to="/">
            <Logo />
          </RouterLink>
        </Hidden>
        <Box
          ml={2}
          flexGrow={1}
        />
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

TopBar.defaultProps = {
  onMobileNavOpen: () => {}
};

export default TopBar;
