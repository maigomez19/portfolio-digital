// REACT
import * as React from 'react';
import { Container, Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';

// ICONS
import CloseIcon from '@mui/icons-material/Close';
import IntegrationInstructionsTwoToneIcon from '@mui/icons-material/IntegrationInstructionsTwoTone';
import FilterDramaTwoToneIcon from '@mui/icons-material/FilterDramaTwoTone';
import DonutSmallTwoToneIcon from '@mui/icons-material/DonutSmallTwoTone';

// CSS
import './Experiencia.css';

// TRADUCTOR
import i18n from './../../i18n';

// ESTILOS MODAL
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '600px',
    maxHeight: '450px',
    bgcolor: 'background.paper',
    border: '1px solid #cdcdcd',
    boxShadow: 24,
    p: 4,
    borderRadius: '7px',
    width: '70%',
    overflowY: 'auto',
    overflowX: 'hidden',
};

export default function Experiencia() {
    // MODALES
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    const [open3, setOpen3] = React.useState(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);

    return (
        <>
            <div id="conocimientosTitulo"></div>

            <Grid id="gridExperiencia" className={i18n.t('gridExperiencia')} display="flex" flexDirection="column" justifyContent="center" alignContent="center" flexWrap="wrap">
                <Container>
                    <Grid pt={{xs: 5, sm: 5, md: 0}}>
                        <h1><span>{i18n.t('Conocimientos')}</span> {i18n.t('informáticos')}</h1>
                    </Grid>

                    <div className='lineaTitulo2'></div>

                    <Grid container display="flex" flexDirection={{xs: "column", sm: "row"}} justifyContent="center" columnGap={{sm: 3}} pb={{xs: 5, sm: 5, md: 0}}>
                        <Grid item xs={12} sm={5.5} md={3.5}>
                            <Card className='cardExperiencia' style={{marginBottom: 2 + 'em'}}>
                                <CardContent className='cardContent'>
                                    <IntegrationInstructionsTwoToneIcon p={0} m={0} className='iconConocimientos'/>

                                    <h2 className='titleExperiencia'>{i18n.t('Lenguajes_de')} {i18n.t('programación')}</h2>
                                </CardContent>

                                <CardActionArea>
                                    <Button onClick={handleOpen} className='verMas'>{i18n.t('ver_más')}</Button>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={5.5} md={3.5}>
                            <Card className='cardExperiencia' style={{marginBottom: 2 + 'em'}}>
                                <CardContent className='cardContent'>
                                    <FilterDramaTwoToneIcon p={0} m={0} className='iconConocimientos'/>

                                    <h2 className='titleExperiencia'>{i18n.t('Programas_de')} {i18n.t('Adobe')}</h2>
                                </CardContent>

                                <CardActionArea>
                                    <Button onClick={handleOpen2} className='verMas'>{i18n.t('ver_más')}</Button>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={5.5} md={3.5}>
                            <Card className='cardExperiencia'>
                                <CardContent className='cardContent'>
                                    <DonutSmallTwoToneIcon p={0} m={0} className='iconConocimientos'/>

                                    <h2 className='titleExperiencia'>{i18n.t('Programas_de2')} {i18n.t('Office')}</h2>
                                </CardContent>

                                <CardActionArea>
                                    <Button onClick={handleOpen3} className='verMas'>{i18n.t('ver_más')}</Button>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>

                    {/* MODALES */}
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        className="modales"
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                            backdrop: {
                                timeout: 500,
                            },
                        }}
                        id="programacionModal"
                    >
                        <Fade in={open}>
                            <Box sx={style}>
                                <Grid display="flex" flexDirection="row" justifyContent="end" p={0} m={0}>
                                    <Button onClick={handleClose} className='close' p={0} m={0} style={{maxWidth: 30 + 'px', minWidth: 30 + 'px'}}>
                                        <CloseIcon p={0} m={0}/>
                                    </Button>
                                </Grid>

                                <h2 className='titleModal'><span>{i18n.t('Lenguajes_de')}</span> {i18n.t('programación')}</h2>

                                <Grid container display="flex" flexDirection="row" justifyContent="center" columnGap={3}>
                                    <Grid textAlign="center">
                                        <div className='imgHabilidades'>
                                            <img src={require("./imgsExperiencia/logos/html.png")} alt="logo html" />
                                        </div>
                                        
                                        <p className='textoHabilidades'>HTML</p>
                                    </Grid>

                                    <Grid textAlign="center">
                                        <div className='imgHabilidades'>
                                            <img src={require("./imgsExperiencia/logos/css.png")} alt="logo css" />
                                        </div>

                                        <p className='textoHabilidades'>CSS</p>
                                    </Grid>

                                    <Grid textAlign="center">
                                        <div className='imgHabilidades'>
                                            <img src={require("./imgsExperiencia/logos/javascript.png")} alt="logo javascript" />
                                        </div>

                                        <p className='textoHabilidades'>Javascript</p>
                                    </Grid>

                                    <Grid textAlign="center">
                                        <div className='imgHabilidades'>
                                            <img src={require("./imgsExperiencia/logos/php.png")} alt="logo php" />
                                        </div>

                                        <p className='textoHabilidades'>PHP</p>
                                    </Grid>

                                    <Grid textAlign="center">
                                        <div className='imgHabilidades'>
                                            <img src={require("./imgsExperiencia/logos/mysql.png")} alt="logo mysql" />
                                        </div>

                                        <p className='textoHabilidades'>MYSQL</p>
                                    </Grid>

                                    <Grid textAlign="center">
                                        <div className='imgHabilidades'>
                                            <img src={require("./imgsExperiencia/logos/laravel.png")} alt="logo laravel" />
                                        </div>

                                        <p className='textoHabilidades'>Laravel</p>
                                    </Grid>

                                    <Grid textAlign="center">
                                        <div className='imgHabilidades'>
                                            <img src={require("./imgsExperiencia/logos/mongodb.png")} alt="logo mongodb" />
                                        </div>
                                        
                                        <p className='textoHabilidades'>MongoDB</p>
                                    </Grid>

                                    <Grid textAlign="center">
                                        <div className='imgHabilidades'>
                                            <img src={require("./imgsExperiencia/logos/react.png")} alt="logo react" />
                                        </div>

                                        <p className='textoHabilidades'>React</p>
                                    </Grid>

                                    <Grid textAlign="center">
                                        <div className='imgHabilidades'>
                                            <img src={require("./imgsExperiencia/logos/bootstrap.png")} alt="logo bootstrap" />
                                        </div>

                                        <p className='textoHabilidades'>Bootstrap</p>
                                    </Grid>

                                    <Grid textAlign="center">
                                        <div className='imgHabilidades'>
                                            <img src={require("./imgsExperiencia/logos/material.png")} alt="logo material" />
                                        </div>

                                        <p className='textoHabilidades'>Material UI</p>
                                    </Grid>

                                    <Grid textAlign="center">
                                        <div className='imgHabilidades'>
                                            <img src={require("./imgsExperiencia/logos/python.png")} alt="logo material" />
                                        </div>

                                        <p className='textoHabilidades'>Python</p>
                                    </Grid>

                                    <Grid textAlign="center">
                                        <div className='imgHabilidades'>
                                            <img src={require("./imgsExperiencia/logos/django.png")} alt="logo material" />
                                        </div>

                                        <p className='textoHabilidades'>Django</p>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Fade>
                    </Modal>

                    <Modal
                        open={open2}
                        onClose={handleClose2}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        className='modales'
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                            backdrop: {
                                timeout: 500,
                            },
                        }}
                    >
                        <Fade in={open2}>
                            <Box sx={style}>
                                <Grid display="flex" flexDirection="row" justifyContent="end" p={0} m={0}>
                                    <Button onClick={handleClose2} className='close' style={{maxWidth: 30 + 'px', minWidth: 30 + 'px'}}>
                                        <CloseIcon/>
                                    </Button>
                                </Grid>

                                <h2 className='titleModal'><span>{i18n.t('Programas_de')}</span> {i18n.t('Adobe')}</h2>

                                <Grid container display="flex" flexDirection="row" justifyContent="center" columnGap={3}>
                                    <Grid textAlign="center">
                                        <div className='imgHabilidades'>
                                            <img src={require("./imgsExperiencia/logos/photoshop.png")} alt="logo photoshop" />
                                        </div>

                                        <p className='textoHabilidades'>Photoshop</p>
                                    </Grid>

                                    <Grid textAlign="center">
                                        <div className='imgHabilidades'>
                                            <img src={require("./imgsExperiencia/logos/illustrator.png")} alt="logo illustrator" />
                                        </div>

                                        <p className='textoHabilidades'>Illustrator</p>
                                    </Grid>

                                    <Grid textAlign="center">
                                        <div className='imgHabilidades'>
                                            <img src={require("./imgsExperiencia/logos/aftereffects.png")} alt="logo after effects" />
                                        </div>

                                        <p className='textoHabilidades'>After Effects</p>
                                    </Grid>

                                    <Grid textAlign="center">
                                        <div className='imgHabilidades'>
                                            <img src={require("./imgsExperiencia/logos/adobexd.png")} alt="logo adobe xd" />
                                        </div>

                                        <p className='textoHabilidades'>Adobe XD</p>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Fade>
                    </Modal>

                    <Modal
                        open={open3}
                        onClose={handleClose3}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        className='modales'
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                        }}
                    >
                        <Fade in={open3}>
                            <Box sx={style}>
                                <Grid display="flex" flexDirection="row" justifyContent="end" p={0} m={0}>
                                    <Button onClick={handleClose3} className='close' style={{maxWidth: 30 + 'px', minWidth: 30 + 'px'}}>
                                        <CloseIcon/>
                                    </Button>
                                </Grid>

                                <h2 className='titleModal'><span>{i18n.t('Programas_de2')}</span> {i18n.t('Office')}</h2>

                                <Grid container display="flex" flexDirection="row" justifyContent="center" columnGap={3}>
                                    <Grid textAlign="center">
                                        <div className='imgHabilidades'>
                                            <img src={require("./imgsExperiencia/logos/word.png")} alt="logo word" />
                                        </div>

                                        <p className='textoHabilidades'>Word</p>
                                    </Grid>

                                    <Grid textAlign="center">
                                        <div className='imgHabilidades'>
                                            <img src={require("./imgsExperiencia/logos/excel.png")} alt="logo excel" />
                                        </div>

                                        <p className='textoHabilidades'>Excel</p>
                                    </Grid>

                                    <Grid textAlign="center">
                                        <div className='imgHabilidades'>
                                            <img src={require("./imgsExperiencia/logos/powerpoint.png")} alt="logo powerpoint" />
                                        </div>

                                        <p className='textoHabilidades'>PowerPoint</p>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Fade>
                    </Modal>
                </Container>
            </Grid>
        </>
    );
  }