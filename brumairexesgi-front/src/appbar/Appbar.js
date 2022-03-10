import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const pages = ['RETOUR CLIENTS', 'FAQ'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleNavigation = () => {
    
  };




  return (

        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, marginRight: 10}}
          >
            <img className={"img"} src={require('../brumaire.png')} height="15" width="100" alt="logo"/>        
          </Typography>

         

        
        
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleNavigation}
                sx={{ my: 2, color: 'black', display: 'block', font: "Montserrat, sans-serif"
            }}
              >
                {page}
              </Button>
            ))}
          </Box>  
        </Toolbar>
  );
};
export default ResponsiveAppBar;
