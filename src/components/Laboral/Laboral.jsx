// REACT
import * as React from 'react';
import { Grid } from "@mui/material";

// CSS
import './Laboral.css';

// TRADUCTOR
import i18n from './../../i18n';

export default function Laboral() {
    return (
        <>
            <div id="experienciaTitulo"></div>

            <div id="laboralDiv" className={i18n.t('laboralDiv')}>
                <Grid container display="flex" flexDirection={{xs: "column", md: "row"}}>
                    <Grid id="imgLaboral" item xs={12} md={5}>
                        <img src={require("./imgs-laboral/educacion.jpg")} alt="persona programando" />
                    </Grid>

                    <Grid display="flex" flexDirection="column" justifyContent="center" alignContent={{xs: "center", md: "flex-end"}} item xs={12} md={7} flexWrap="wrap" pl={{xs: 0, sm: 0, md: 5}} textAlign={{xs: "center", md: "left"}} pt={{xs: 7, sm: 7, md: 0}} pb={{xs: 7, sm: 7, md: 0}}>
                        <Grid>
                            <h1><span>{i18n.t('Experiencia')}</span> {i18n.t('laboral')}</h1>

                            <div className='lineaTitulo3'></div>
                        </Grid>

                        <Grid container display="flex" flexDirection={{ xs: 'column', md: 'row', lg: 'row', xl: 'row' }} columnGap={2} id="gridLaboral" mt={4} pr={{xs: 2, sm: 0}} pl={{xs: 2, sm: 0}}>
                            
                                <Grid item xs={12} sm={12} md={5} marginBottom={{xs: 2, sm: 2, md: 0}}>
                                    <p className="fechas">{i18n.t('Julio')} 2022 - {i18n.t('Agosto')} 2023</p>

                                    <h2>{i18n.t('Administración_y_Recepción_en_SHHS')}</h2>

                                    <p>{i18n.t('Atención_al_público_reserva_de_turnos_recepción_de_llamadas_facturación_y_archivo_de_documentos')}</p>

                                        <h3 className="tituloAdquiridos">{i18n.t('Habilidades_adquiridas')}:</h3>

                                        <Grid container display="flex" flexDirection="row" columnGap={1} mt={2} justifyContent={{xs:"center", md:"start"}}>
                                            <p className="adquiridos">{i18n.t('Resolucion_eficiente')}</p>
                                            <p className="adquiridos">{i18n.t('Habilidades_de_organizacion')}</p>
                                            <p className="adquiridos">{i18n.t('Atencion_al_detalle')}</p>
                                            <p className="adquiridos">{i18n.t('Estructuracion_de_datos')}</p>
                                        </Grid>
                                </Grid>

                                <Grid item xs={12} sm={12} md={5} mt={{xs: 2, sm: 2, md: 0}}>
                                    <p className="fechas">{i18n.t('Marzo')} 2019 - {i18n.t('Diciembre')} 2019</p>

                                    <h2>{i18n.t('Profesora_de_Inglés')} - {i18n.t('Nivel_Inicial')}</h2>

                                    <p>{i18n.t('Enseñanza_a_niños_de_7_a_10_años_con_conceptos_básicos_acerca_del_idioma')}</p>

                                        <h3 className="tituloAdquiridos">{i18n.t('Habilidades_adquiridas')}:</h3>

                                        <Grid container display="flex" flexDirection="row" columnGap={1} mt={2} justifyContent={{xs:"center", md:"start"}}>
                                            <p className="adquiridos">{i18n.t('Comunicacion_clara')}</p>
                                            <p className="adquiridos">{i18n.t('Compresion_tecnica_en_ingles')}</p>
                                            <p className="adquiridos">{i18n.t('Ingles_avanzado')}</p>
                                        </Grid>
                                </Grid>
                            
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}