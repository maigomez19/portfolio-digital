// REACT
import * as React from 'react';
import { Grid, Stack } from '@mui/material';

// ICONS
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BookIcon from '@mui/icons-material/Book';
import PublicIcon from '@mui/icons-material/Public';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { useRef } from "react";

// CSS
import './Bienvenido.css';

// TRADUCTOR
import i18n from './../../i18n';

// FRAMER
import { motion } from "framer-motion";

// ICONS
import PlaceIcon from '@mui/icons-material/Place';

export default function Bienvenido() {
    const ref = useRef(null);
    // const isInView = useInView(ref, {
    //     amount: "all",
    // });

    return (
    <>
        <div id="bienvenidosTitulo"></div>

        <div id="presentacionDiv" className={i18n.t('presentacionDiv')} ref={ref}>
            <Grid container display="flex" flexDirection={{xs: "column", md: "row"}}>
                <Grid display="flex" flexDirection="column" justifyContent="center" alignContent={{xs: "center", md: "flex-end"}} item xs={12} md={7} flexWrap="wrap" pr={{xs: 0, sm: 0, md: 5}} pt={{xs: 7, sm: 7, md: 0}} pb={{xs: 7, sm: 7, md: 0}}> 
                    <Grid textAlign={{xs: "center", md: "left"}} pr={{xs: 2, sm: 0}} pl={{xs: 2, sm: 0}}>
                        <motion.div
                            initial={{opacity:0, x:75}}
                            whileInView={{opacity:1, x:0}}
                            viewport={{
                                margin:"-200px",
                                once:true,
                            }}
                            transition={{duration:0.5, delay:0.25}}
                        >
                            <h1><span>¡{i18n.t('Hola')}!</span> {i18n.t('Soy')} Mailen</h1>

                            <div className='lineaTitulo'></div>
                        </motion.div>

                        <motion.div 
                            className="ubicacion-bienvenidos"
                            initial={{opacity:0, x:75}}
                            whileInView={{opacity:1, x:0}}
                            viewport={{
                                margin:"-200px",
                                once:true,
                            }}
                            transition={{duration:0.5, delay:0.25}}
                        >
                            <Stack direction="row" alignItems="center" justifyContent={{xs: "center", sm: "center", md: "left"}}>
                                <PlaceIcon/>
                                <p>Buenos Aires, Argentina</p>
                            </Stack>
                        </motion.div>

                        <motion.div
                            initial={{opacity:0, x:75}}
                            whileInView={{opacity:1, x:0}}
                            viewport={{
                                margin:"-200px",
                                once:true,
                            }}
                            transition={{duration:0.5, delay:0.25}}
                        >
                            <p id="meConsidero">{i18n.t('Presentacion_bienvenidos')}</p>
                        </motion.div>
                    </Grid>

                    <motion.div
                        initial={{opacity:0, x:75}}
                        whileInView={{opacity:1, x:0}}
                        viewport={{
                            margin:"-200px",
                            once:true,
                        }}
                        transition={{duration:0.5, delay:0.25}}
                    >
                    <Grid display="flex" flexDirection="row" columnGap={2} id="habilidadesGrid" justifyContent={{xs: "center", md: "flex-start"}} alignContent={{xs: "center", md: "flex-start"}} flexWrap="wrap">
                        <Grid className='boxHabilidades habilidadesMargin'>
                            <h2>{i18n.t('Habilidades')}</h2>
                            
                                <ul className="bienvenidoList">
                                    <Grid className='habilidadesIdiomas'>
                                        <li>
                                            <Stack direction="row" alignItems="center" className="itemHI" columnGap={.5}>
                                                <FormatListBulletedIcon className='iconHabilidad'/> {i18n.t('Organización')}
                                            </Stack>
                                        </li>

                                        <li>
                                            <Stack direction="row" alignItems="center" className="itemHI" columnGap={.5}>
                                                <VisibilityIcon className='iconHabilidad'/> {i18n.t('Aprendizaje_continuo')}
                                            </Stack>
                                        </li>

                                        <li>
                                            <Stack direction="row" alignItems="center" className="itemHI" columnGap={.5}>
                                                <BookIcon className='iconHabilidad'/> {i18n.t('Actitud_positiva')}
                                            </Stack>
                                        </li>
                                    </Grid>
                                </ul>
                        </Grid>

                        <Grid className='boxHabilidades idiomasBox'>
                            <h2>{i18n.t('Idiomas')}</h2>

                            <ul className="bienvenidoList">
                                <Grid className='habilidadesIdiomas'>
                                    <li>
                                        <Stack direction="row" alignItems="center" className="itemHI" columnGap={.5}>
                                            <PublicIcon className='iconHabilidad'/> {i18n.t('Español_nativo')}
                                        </Stack>
                                    </li>

                                    <li>
                                        <Stack direction="row" alignItems="center" className="itemHI" columnGap={.5}>
                                            <TravelExploreIcon className='iconHabilidad'/> {i18n.t('Inglés_avanzado')} (C1)
                                        </Stack>
                                    </li>
                                </Grid>
                            </ul>
                        </Grid>
                    </Grid>
                    </motion.div>
                </Grid>

                <Grid id="imgBienvenido" item xs={12} md={5}>
                    <img src={require("./imgs-bienvenido/programacion.jpg")} alt="programación" />
                </Grid>
            </Grid>
        </div>
    </>
  );
}