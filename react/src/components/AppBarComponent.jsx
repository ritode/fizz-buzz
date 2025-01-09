import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import ShareIcon from '@mui/icons-material/Share';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function AppBarComponent() {
  const [anchorElPage2, setAnchorElPage2] = React.useState(null);
  const [anchorElPage3, setAnchorElPage3] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Utility to determine active tab from URL
  const currentPath = location.pathname.split('/'); // e.g., ['dashboard', 'page2', 'option-1']

  const handleOpenPage2Menu = (event) => {
    setAnchorElPage2(event.currentTarget);
  };

  const handleOpenPage3Menu = (event) => {
    setAnchorElPage3(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleClosePage2Menu = () => {
    setAnchorElPage2(null);
  };

  const handleClosePage3Menu = () => {
    setAnchorElPage3(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: '#333', mb: '10px' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <IconButton size="small" color="inherit" sx={{ mr: 2 }}>
            <img
              src="/assets/logo.png"
              alt="Logo"
              style={{ height: '30px', width: 'auto' }}
              onClick={() => handleNavigation('/dashboard')}
            />
          </IconButton>

          {/* Navigation */}
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <Button
              sx={{ my: 2, color: '#333' }}
              onClick={() => handleNavigation('/dashboard/page-1')}
              variant={currentPath[1] === 'page1' ? 'contained' : 'text'}
            >
              Page 1
            </Button>

            {/* Page 2 Dropdown */}
            <Button
              sx={{ my: 2, color: '#333' }}
              onClick={handleOpenPage2Menu}
              variant={currentPath[1] === 'page2' ? 'contained' : 'text'}
            >
              Page 2
              <ArrowDropDownIcon />
            </Button>
            <Menu
              anchorEl={anchorElPage2}
              open={Boolean(anchorElPage2)}
              onClose={handleClosePage2Menu}
            >
              <MenuItem
                onClick={() => {
                  handleNavigation('/dashboard/page-2/option-1');
                  handleClosePage2Menu();
                }}
              >
                Option 1
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleNavigation('/dashboard/page-2/option-2');
                  handleClosePage2Menu();
                }}
              >
                Option 2
              </MenuItem>
            </Menu>

            {/* Page 3 Dropdown */}
            <Button
              sx={{ my: 2, color: '#333' }}
              onClick={handleOpenPage3Menu}
              variant={currentPath[1] === 'page3' ? 'contained' : 'text'}
            >
              Page 3
              <ArrowDropDownIcon />
            </Button>
            <Menu
              anchorEl={anchorElPage3}
              open={Boolean(anchorElPage3)}
              onClose={handleClosePage3Menu}
            >
              <MenuItem
                onClick={() => {
                  handleNavigation('/dashboard/page-3/sub-option-1');
                  handleClosePage3Menu();
                }}
              >
                Sub-Option 1
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleNavigation('/dashboard/page-3/sub-option-2');
                  handleClosePage3Menu();
                }}
              >
                Sub-Option 2
              </MenuItem>
            </Menu>
          </Box>

          {/* Search Bar, Share, and User Menu */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              sx={{ backgroundColor: 'white', borderRadius: 1 }}
            />
            <IconButton color="inherit">
              <ShareIcon />
            </IconButton>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default AppBarComponent;
