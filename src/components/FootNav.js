import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LanguageIcon from '@material-ui/icons/Language';
import FlagIcon from '@material-ui/icons/Flag';
import PieChartIcon from '@material-ui/icons/PieChart';

const useStyles = makeStyles({
  root: {
    position: 'sticky',
    bottom: 0,
    right: 0,
    left: 0,
    marginTop: 40
  },
});

function FootNav({screenConfig}) {
  const classes = useStyles();
  console.log(screenConfig)
  return (
    <BottomNavigation
      className={classes.footer}
      value={screenConfig[0]}
      onChange={(event, newValue) => {
        console.log(newValue)
        screenConfig[1](newValue);
        
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Global States" icon={<LanguageIcon />} />
      <BottomNavigationAction label="Country" icon={<FlagIcon />} />
      <BottomNavigationAction label="Chart" icon={<PieChartIcon />} />
    </BottomNavigation>
  );
}

export default FootNav;