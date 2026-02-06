import * as React from 'react';
import { Container, Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import { useRef } from "react";

// CSS
import './Proyectos.css';

// TRADUCTOR
import i18n from './../../i18n';

// FRAMER
import { motion } from "framer-motion";

export default function Proyectos() {
    const ref = useRef(null);
    // const isInView = useInView(ref, {
    //     amount: "all",
    // });

    return (
        <div id="proyectos" ref={ref}>
            <div id="proyectosTitulo"></div>
        
            <Grid className={i18n.t('gridProyectos')} display="flex" flexDirection="column" justifyContent="center" alignContent="center" flexWrap="wrap">
                <Container>
                    <motion.div
                        initial={{opacity:0, x:75}}
                        whileInView={{opacity:1, x:0}}
                        viewport={{
                            margin:"-200px",
                            once:true,
                        }}
                        transition={{duration:0.5, delay:0.25}}
                    >
                        <Grid pt={{xs: 5, sm: 5, md: 0}}>
                            <h1><span>{i18n.t('Mis')}</span> {i18n.t('proyectos')}</h1>
                        </Grid>

                        <div className='lineaTituloProyectos'></div>
                    </motion.div>

                    <Grid container display="flex" flexDirection={{xs: "column", sm: "row"}} justifyContent="center" columnGap={{sm: 3}} pb={{xs: 5, sm: 5, md: 0}} flexWrap="wrap">
                        <Grid item xs={12} sm={5.5} md={3.5}>
                            <motion.div
                                initial={{opacity:0, x:75}}
                                whileInView={{opacity:1, x:0}}
                                viewport={{
                                    margin:"-200px",
                                    once:true,
                                }}
                                transition={{duration:0.5, delay:0.25}}
                            >
                                <Card className='cardExperiencia' style={{marginBottom: 2 + 'em', height: 300 + 'px', display:'flex', justifyContent:'center', flexDirection: 'column', flexWrap: 'wrap', alignContent: 'center'}}>
                                    <CardContent className='cardContent'>
                                        <img src={require("./imgs-proyectos/rym.png")} alt="web rick and morty" />

                                        <h2 className='titleExperiencia2'>Rick & Morty Madness</h2>

                                        <p>{i18n.t('Descubre_todos_los_personajes_de_la_serie_y_disfruta_sus_aventuras_intergalácticas')}.</p>
                                        
                                        <CardActionArea>
                                            <Button href="https://github.com/maigomez19/rick-and-morty-madness.git" target="_blank" className='verMas verMas-git'>{i18n.t('ver_codigo')}</Button>

                                            <Button href="https://rickandmortymadness.vercel.app/" target="_blank" className='verMas'>{i18n.t('visitar_sitio')}</Button>
                                        </CardActionArea>
                                    </CardContent>

                                </Card>
                            </motion.div>
                        </Grid>

                        <Grid item xs={12} sm={5.5} md={3.5}>
                            <motion.div
                                initial={{opacity:0, x:75}}
                                whileInView={{opacity:1, x:0}}
                                viewport={{
                                    margin:"-200px",
                                    once:true,
                                }}
                                transition={{duration:0.5, delay:0.25}}
                            >
                                <Card className='cardExperiencia' style={{marginBottom: 2 + 'em', height: 300 + 'px', display:'flex', justifyContent:'center', flexDirection: 'column', flexWrap: 'wrap', alignContent: 'center'}}>
                                    <CardContent className='cardContent'>
                                        <img src={require("./imgs-proyectos/sky.png")} alt="web sky above" />

                                        <h2 className='titleExperiencia2'>Sky Above</h2>

                                        <p>{i18n.t('Obtén_información_instantánea_sobre_el_clima_de_cualquier_ciudad_del_mundo')}.</p>

                                        <CardActionArea>
                                            <Button href="https://github.com/maigomez19/sky-above.git" target="_blank" className='verMas verMas-git'>{i18n.t('ver_codigo')}</Button>

                                            <Button href="https://skyabove.vercel.app/" target="_blank" className='verMas'>{i18n.t('visitar_sitio')}</Button>
                                        </CardActionArea>
                                    </CardContent>

                                </Card>
                            </motion.div>
                        </Grid>

                        <Grid item xs={12} sm={5.5} md={3.5}>
                            <motion.div
                                initial={{opacity:0, x:75}}
                                whileInView={{opacity:1, x:0}}
                                viewport={{
                                    margin:"-200px",
                                    once:true,
                                }}
                                transition={{duration:0.5, delay:0.25}}
                            >
                                <Card className='cardExperiencia' style={{marginBottom: 2 + 'em', height: 300 + 'px', display:'flex', justifyContent:'center', flexDirection: 'column', flexWrap: 'wrap', alignContent: 'center'}}>
                                    <CardContent className='cardContent'>
                                        <img src={require("./imgs-proyectos/snapent.png")} alt="web sky above" />

                                        <h2 className='titleExperiencia2'>Snapent</h2>

                                        <p>{i18n.t('snapent_detalle')}.</p>

                                        <CardActionArea>
                                            <Button href="https://drive.google.com/drive/folders/1toxHnXNI9fbMw406PIpmE1xIHgB5ezrY?usp=drive_link" target="_blank" className='verMas verMas-git ultimo'>{i18n.t('ver_ux')}</Button>

                                            {/* <Button href="https://skyabove.vercel.app/" target="_blank" className='verMas'>{i18n.t('visitar_sitio')}</Button> */}
                                            <p>{i18n.t('proyecto_disponible_local')}.</p>
                                        </CardActionArea>
                                    </CardContent>

                                </Card>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </div>
    )
}