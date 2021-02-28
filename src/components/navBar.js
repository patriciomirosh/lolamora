import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import logoMME from './images/MME.jpg'

export default function NavBar() {
  const [anchorInstitucional, setAnchorInstitucional] = React.useState(null);
  const [anchorEducacion, setAnchorEducacion] = React.useState(null);
  const [anchorNoticias, setAnchorNoticias] = React.useState(null);
  const [anchorPlatform, setAnchorPlatform] = React.useState(null);


  const setAnchorEducacions = (event) => {
    setAnchorEducacion(event.currentTarget);
  };
  const setAnchorInstitucionals = (event) => {
    setAnchorInstitucional(event.currentTarget);
  };
  const setAnchorNoticiass = (event) => {
    setAnchorNoticias(event.currentTarget);
  };
  const setAnchorPlatforms = (event) => {
    setAnchorPlatform(event.currentTarget);
  };
  const handleClose = (setAnchorEl) => {
    setAnchorEl(null);
  };

  return (
    <div className='row'>
       <div className="col"><img  src={logoMME} alt={"logo"} width="50px" height="50px"/>     </div>
      <div className="col"><Button aria-controls="simple-Institucional" aria-haspopup="true" onClick={setAnchorInstitucionals}>
        Institucional
      </Button>
      <Menu
        id="simple-Institucional"
        anchorEl={anchorInstitucional}
        keepMounted
        open={Boolean(anchorInstitucional)}
        onClose={()=>handleClose(setAnchorInstitucional)}
      >
        <MenuItem onClick={()=>handleClose(setAnchorInstitucional)}>Profile</MenuItem>
        <MenuItem onClick={()=>handleClose(setAnchorInstitucional)}>My account</MenuItem>
        <MenuItem onClick={()=>handleClose(setAnchorInstitucional)}>Logout</MenuItem>
        <MenuItem onClick={()=>handleClose(setAnchorInstitucional)}>Profile</MenuItem>
        <MenuItem onClick={()=>handleClose(setAnchorInstitucional)}>Profile</MenuItem>
        <MenuItem onClick={()=>handleClose(setAnchorInstitucional)}>Profile</MenuItem>



      </Menu>
      </div>
      <div className="col"><Button aria-controls="simple-Educacion" aria-haspopup="true" onClick={setAnchorEducacions}>
        Educacion
      </Button>
      <Menu
        id="simple-Educacion"
        anchorEl={anchorEducacion}
        keepMounted
        open={Boolean(anchorEducacion)}
        onClose={()=>handleClose(setAnchorEducacion)}
      >   
        <MenuItem onClick={()=>handleClose(setAnchorEducacion)}>Profile</MenuItem>
        <MenuItem onClick={()=>handleClose(setAnchorEducacion)}>My account</MenuItem>
        <MenuItem onClick={()=>handleClose(setAnchorEducacion)}>Logout</MenuItem>
      </Menu>
      </div>
      <div className="col"><Button aria-controls="simple-Noticias" aria-haspopup="true" onClick={setAnchorNoticiass}>
        Noticias
      </Button>
      <Menu
        
        id="simple-Noticias"
        anchorEl={anchorNoticias}
        keepMounted
        open={Boolean(anchorNoticias)}
        onClose={()=>handleClose(setAnchorNoticias)}
      >
        <MenuItem onClick={()=>handleClose(setAnchorNoticias)}>sa</MenuItem>
        <MenuItem onClick={()=>handleClose(setAnchorNoticias)}>My as</MenuItem>
        <MenuItem onClick={()=>handleClose(setAnchorNoticias)}>Logout</MenuItem>
      </Menu>
      </div>
      <div className="col">
      <Button aria-controls="simple-platform" aria-haspopup="true" onClick={setAnchorPlatforms}>
        Plataforma Virtual
      </Button>
      <Menu
        id="simple-platform"
        anchorEl={anchorPlatform}
        keepMounted
        open={Boolean(anchorPlatform)}
        onClose={()=>handleClose(setAnchorPlatform)}
      >
        <MenuItem onClick={()=>handleClose(setAnchorPlatform)}>Profile</MenuItem>
        <MenuItem onClick={()=>handleClose(setAnchorPlatform)}>My account</MenuItem>
        <MenuItem onClick={()=>handleClose(setAnchorPlatform)}>Logout</MenuItem>
      </Menu> 
      </div>

        <button className="col-sm btn-primary " id="btn-primaryNav">Contacto</button>
    </div>
  );
}