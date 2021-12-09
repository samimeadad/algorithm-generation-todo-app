import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const settings = [ 'Profile', 'Account', 'Dashboard', 'Todo App' ];

const Header = () => {
    const [ anchorElNav, setAnchorElNav ] = React.useState( null );
    const [ anchorElUser, setAnchorElUser ] = React.useState( null );

    const handleOpenNavMenu = ( event ) => {
        setAnchorElNav( event.currentTarget );
    };
    const handleOpenUserMenu = ( event ) => {
        setAnchorElUser( event.currentTarget );
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav( null );
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser( null );
    };

    return (
        <AppBar position="static" sx={ { backgroundColor: "#3B4DA0" } }>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={ { display: 'flex', justifyContent: 'space-between' } }>
                    <Link to="/">
                        <img style={ { width: '40px', marginRight: '10px' } } src={ logo } alt="logo" />
                    </Link>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={ { mr: 2, display: { xs: 'none', md: 'flex' } } }
                    >
                        <Link to="/" style={ { textDecoration: 'none', color: 'white', fontWeight: 'bold' } }>Algorithm Generation Todo App</Link>
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={ { flexGrow: 1, display: { xs: 'flex', md: 'none' } } }
                    >
                        <Link to="/" style={ { textDecoration: 'none', color: 'white', fontWeight: 'bold' } }>Algorithm Generation Todo App</Link>
                    </Typography>

                    <Box sx={ { flexGrow: 0 } }>
                        <Tooltip title="Open settings">
                            <IconButton onClick={ handleOpenUserMenu } sx={ { p: 0 } }>
                                <Avatar alt="S" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={ { mt: '45px' } }
                            id="menu-appbar"
                            anchorEl={ anchorElUser }
                            anchorOrigin={ {
                                vertical: 'top',
                                horizontal: 'right',
                            } }
                            keepMounted
                            transformOrigin={ {
                                vertical: 'top',
                                horizontal: 'right',
                            } }
                            open={ Boolean( anchorElUser ) }
                            onClose={ handleCloseUserMenu }
                        >
                            { settings.map( ( setting ) => (
                                <MenuItem key={ setting } onClick={ handleCloseNavMenu }>
                                    <Typography textAlign="center">{ setting }</Typography>
                                </MenuItem>
                            ) ) }
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;