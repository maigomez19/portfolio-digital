// REACT
import * as React from 'react';
import { Grid, Container } from '@mui/material';
import { useRef } from "react";

// CSS
import './Educacion.css';

// TRADUCTOR
import i18n from './../../i18n';

// FRAMER
import { motion } from "framer-motion";

export default function Educacion() {
    const ref = useRef(null);
    // const isInView = useInView(ref, {
    //     amount: "all",
    // });

  return (
    <>
        <div id="educacionTitulo"></div>

        <Grid ref={ref} id="educacion" className={i18n.t('educacion2')} display="flex" flexDirection="column" justifyContent="center" alignContent="center" flexWrap="wrap" pt={{xs: 4, sm: 4, md: 0}} pb={{xs: 4, sm: 4, md: 0}}>
            <Container>
                <Grid textAlign="center" pt={{xs: 5, sm: 5, md: 0}}>
                    <motion.div
                        initial={{opacity:0, x:75}}
                        whileInView={{opacity:1, x:0}}
                        viewport={{
                            margin:"-200px",
                            once:true,
                        }}
                        transition={{duration:0.5, delay:0.25}}
                    >
                        <h1><span>{i18n.t('Formación')}</span> {i18n.t('académica')}</h1>

                        <div className='lineaTitulo4'></div>
                    </motion.div>
                </Grid>

                <Grid container display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignContent="center" justifyContent="center" flexWrap="wrap" pb={{xs: 5, sm: 5, md: 0}} textAlign='center'>
                    <Grid item xs={12} sm={12} md={4} marginBottom={4}>
                        <motion.div
                            initial={{opacity:0, x:75}}
                            whileInView={{opacity:1, x:0}}
                            viewport={{
                                margin:"-200px",
                                once:true,
                            }}
                            transition={{duration:0.5, delay:0.25}}
                        >
                            <p className="fechas">{i18n.t('Octubre')} 2025 - {i18n.t('Noviembre')} 2025</p>

                            <h2>EducacionIT</h2>

                            <p>{i18n.t('Curso_MYSQL')}</p>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={4} marginBottom={4}>
                        <motion.div
                            initial={{opacity:0, x:75}}
                            whileInView={{opacity:1, x:0}}
                            viewport={{
                                margin:"-200px",
                                once:true,
                            }}
                            transition={{duration:0.5, delay:0.25}}
                        >
                            <p className="fechas">{i18n.t('Mayo')} 2024 - {i18n.t('Agosto')} 2024</p>

                            <h2>Coderhouse</h2>

                            <p>{i18n.t('Curso_Python')}</p>
                        </motion.div>
                    </Grid>
                    
                    <Grid item xs={12} sm={12} md={4} marginBottom={4}>
                        <motion.div
                            initial={{opacity:0, x:75}}
                            whileInView={{opacity:1, x:0}}
                            viewport={{
                                margin:"-200px",
                                once:true,
                            }}
                            transition={{duration:0.5, delay:0.25}}
                        >
                            <p className="fechas">{i18n.t('Marzo')} 2019 - {i18n.t('Diciembre')} 2023</p>

                            <h2>Escuela Da Vinci</h2>

                            <p>{i18n.t('Tecnicatura_en_Diseño_y_Desarrollo_Web')}</p>
                        </motion.div>
                    </Grid>

                    <Grid item  xs={12} sm={12} md={4} marginBottom={4}>
                        <motion.div
                            initial={{opacity:0, x:75}}
                            whileInView={{opacity:1, x:0}}
                            viewport={{
                                margin:"-200px",
                                once:true,
                            }}
                            transition={{duration:0.5, delay:0.25}}
                        >
                            <p className="fechas">{i18n.t('Enero')} 2019 - {i18n.t('Febrero')} 2019</p>

                            <h2>EF New York</h2>

                            <p>{i18n.t('Curso_de_inglés_escrito_y_oral_completado_con_nivel_avanzado')} (C1).</p>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                        <motion.div
                            initial={{opacity:0, x:75}}
                            whileInView={{opacity:1, x:0}}
                            viewport={{
                                margin:"-200px",
                                once:true,
                            }}
                            transition={{duration:0.5, delay:0.25}}
                        >
                            <p className="fechas">{i18n.t('Diciembre')} 2018</p>

                            <h2>Certificate in Advanced English</h2>

                            <p>{i18n.t('Examen_internacional_aprobado')}</p>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    </>
  );
}