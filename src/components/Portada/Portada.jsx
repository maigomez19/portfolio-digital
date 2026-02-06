// REACT
import * as React from 'react';
import { Grid, Container, Stack } from '@mui/material';
import Menu from '../Menu/Menu';
import { useRef } from "react";

// CSS
import './Portada.css';

// TRADUCTOR
import i18n from './../../i18n';

// FRAMER
import { motion } from "framer-motion";

// ICONS
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function Portada() {
    const ref = useRef(null);
    // const isInView = useInView(ref, {
    //     amount: "all",
    // });

    return (
        <div id="portada" ref={ref}>
            <div id="inicio"></div>

            <Container>
                <Grid container display="flex" flexDirection="row" justifyContent="space-between" pt={2} pb={2} alignItems="center">
                    <Grid className="ubicacion">
                        <p>Mailen Gomez</p>
                    </Grid>

                    <Grid>
                        <Menu/>
                    </Grid>

                    <Grid className="ubicacion" display={{xs:"none", lg:"block"}}>
                        <Stack direction="row" alignItems="center" marginLeft={1}>
                            <a href="mailto:maichu19.mg@gmail.com"><EmailIcon className="icono-portada"/></a>

                            <a href="https://www.linkedin.com/in/mailen-gomez19/" target="_blank" rel="noopener noreferrer"><LinkedInIcon className="icono-portada"/></a>

                            <a href="https://github.com/maigomez19" target="_blank" rel="noopener noreferrer"><GitHubIcon className="icono-portada"/></a>
                        </Stack>
                    </Grid>
                </Grid>

                <Grid container display="flex" flexDirection="column" justifyContent={{xs: "center", sm: "start"}} id="tituloPortada">
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
                            <p className='tituloPortada'>{i18n.t('Portfolio')}</p>
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
                            <p className='tituloPortada'>{i18n.t('Digital')}.</p>
                        </motion.div>
                    </Container>
                </Grid>
            </Container>
        </div>
    );
}
