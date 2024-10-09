// REACT
import * as React from 'react';
import { Grid, Stack } from '@mui/material';

// ICONS
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BookIcon from '@mui/icons-material/Book';
import PublicIcon from '@mui/icons-material/Public';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

// CSS
import './Bienvenido.css';

// TRADUCTOR
import i18n from './../../i18n';

export default function Bienvenido() {
  return (
    <>
        <div id="bienvenidosTitulo"></div>

        <div id="presentacionDiv" className={i18n.t('presentacionDiv')}>
            <Grid container display="flex" flexDirection={{xs: "column", md: "row"}}>
                <Grid display="flex" flexDirection="column" justifyContent="center" alignContent={{xs: "center", md: "flex-end"}} item xs={12} md={7} flexWrap="wrap" pr={{xs: 0, sm: 0, md: 5}} pt={{xs: 7, sm: 7, md: 0}} pb={{xs: 7, sm: 7, md: 0}}> 
                    <Grid textAlign={{xs: "center", md: "left"}} pr={{xs: 2, sm: 0}} pl={{xs: 2, sm: 0}}>
                        <h1><span>¡{i18n.t('Hola')}!</span> {i18n.t('Soy')} Mailen</h1>

                        <div className='lineaTitulo'></div>

                        <p id="meConsidero">{i18n.t('Me_considero_una_persona_profundamente_comprometida_con_la_excelencia_en_todo_lo_que_hago_Creo_firmemente_que_la_Graduada_en_Diseño_y_Desarrollo_Web_me_apasiona_la_tecnología_y_crear_soluciones_innovadoras_para_simplificar_las_tareas_diarias_Busco_oportunidades_para_aprender_de_manera_continua_y_constante')}</p>
                    </Grid>

                    <Grid display="flex" flexDirection="row" columnGap={2} id="habilidadesGrid" justifyContent={{xs: "center", md: "flex-start"}} alignContent={{xs: "center", md: "flex-start"}} flexWrap="wrap">
                        <Grid className='boxHabilidades'>
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

                        <Grid className='boxHabilidades'>
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
                </Grid>

                <Grid id="imgBienvenido" item xs={12} md={5}>
                    <img src={require("./imgs-bienvenido/programacion.jpg")} alt="programación" />
                </Grid>
            </Grid>
        </div>
    </>
  );
}