import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import logo from "./../../images/logo.png";

const drawerWidth = 240;

const MenuContainer = styled(Box)({
  display: 'flex',
});

const DrawerHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  backgroundColor: '#030E32',
  color: 'white',
  justifyContent: 'center',
  fontWeight: 'bold',
}));

const StyledDrawer = styled(Drawer)({
  '.MuiDrawer-paper': {
    backgroundColor: '#030E32',
    color: 'white',
    width: drawerWidth,
  },
});

const ListItemStyled = styled(ListItem)({
  '&:hover': {
    backgroundColor: '#3A3A55',
  },
});

const Menu = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <DrawerHeader>
        <img width={30} src={logo} alt="FinanceScope logo" />
        <Typography variant="h6">FinanceScope</Typography>
      </DrawerHeader>
      <Divider />
      <List>
        <ListItemStyled button>
          <ListItemIcon>
            <HomeIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Профиль" />
        </ListItemStyled>
        <ListItemStyled button>
          <ListItemIcon>
            <DataUsageIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Данные" />
        </ListItemStyled>
        <ListItemStyled button>
          <ListItemIcon>
            <AssessmentIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Анализ" />
        </ListItemStyled>
        <ListItemStyled button>
          <ListItemIcon>
            <ShowChartIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Графики" />
        </ListItemStyled>
        <ListItemStyled button>
          <ListItemIcon>
            <BarChartIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Диаграммы" />
        </ListItemStyled>
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Typography variant="body2" color="textSecondary">
          &copy; 2024 FinanceScope
        </Typography>
      </Box>
    </>
  );

  return (
    <MenuContainer>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <StyledDrawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
          }}
        >
          {drawer}
        </StyledDrawer>
        <StyledDrawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
          }}
          open
        >
          {drawer}
        </StyledDrawer>
      </Box>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
    </MenuContainer>
  );
};

export default Menu;