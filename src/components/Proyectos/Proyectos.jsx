import * as React from 'react';
import { Container, Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';

// CSS
import './Proyectos.css';

// TRADUCTOR
import i18n from './../../i18n';

export default function Proyectos() {
    return (
        <div id="proyectos">
            <div id="proyectosTitulo"></div>
        
            <Grid className={i18n.t('gridProyectos')} display="flex" flexDirection="column" justifyContent="center" alignContent="center" flexWrap="wrap">
                <Container>
                    <Grid pt={{xs: 5, sm: 5, md: 0}}>
                        <h1><span>{i18n.t('Mis')}</span> {i18n.t('proyectos')}</h1>
                    </Grid>

                    <div className='lineaTituloProyectos'></div>

                    <Grid container display="flex" flexDirection={{xs: "column", sm: "row"}} justifyContent="center" columnGap={{sm: 3}} pb={{xs: 5, sm: 5, md: 0}} flexWrap="wrap">
                        <Grid item xs={12} sm={5.5} md={3.5}>
                            <Card className='cardExperiencia' style={{marginBottom: 2 + 'em', height: 250 + 'px', display:'flex', justifyContent:'center', flexDirection: 'column', flexWrap: 'wrap', alignContent: 'center'}}>
                                <CardContent className='cardContent'>
                                    <img src={require("./imgs-proyectos/rym.png")} alt="web rick and morty" />

                                    <h2 className='titleExperiencia2'>Rick & Morty Madness</h2>

                                    <p>{i18n.t('Descubre_todos_los_personajes_de_la_serie_y_disfruta_sus_aventuras_intergalácticas')}.</p>
                                    
                                    <CardActionArea>
                                        <Button href="https://rickandmortymadness.vercel.app/" target="_blank" className='verMas'>{i18n.t('visitar_sitio')}</Button>
                                    </CardActionArea>
                                </CardContent>

                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={5.5} md={3.5}>
                            <Card className='cardExperiencia' style={{marginBottom: 2 + 'em', height: 250 + 'px', display:'flex', justifyContent:'center', flexDirection: 'column', flexWrap: 'wrap', alignContent: 'center'}}>
                                <CardContent className='cardContent'>
                                    <img src={require("./imgs-proyectos/sky.png")} alt="web sky above" />

                                    <h2 className='titleExperiencia2'>Sky Above</h2>

                                    <p>{i18n.t('Obtén_información_instantánea_sobre_el_clima_de_cualquier_ciudad_del_mundo')}.</p>

                                    <CardActionArea>
                                        <Button href="https://skyabove.vercel.app/" target="_blank" className='verMas'>{i18n.t('visitar_sitio')}</Button>
                                    </CardActionArea>
                                </CardContent>

                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </div>
    )
}