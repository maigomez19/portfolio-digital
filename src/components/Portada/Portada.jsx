// REACT
import * as React from 'react';
import { Grid, Container, Stack } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import Menu from '../Menu/Menu';
import { useRef } from "react";

// CSS
import './Portada.css';

// TRADUCTOR
import i18n from './../../i18n';

// FRAMER
import { motion, useInView } from "framer-motion";

export default function Portada() {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        amount: "all",
    });

    return (
        <div id="portada" ref={ref}>
            <div id="inicio"></div>

            <Container>
                <Grid container display="flex" flexDirection="row" justifyContent={{xs: "center", sm: "space-between"}} pt={2} pb={2}>
                    <Grid className="ubicacion" display={{xs: "none", sm: "block"}}>
                        <p>Mailen Gomez</p>
                    </Grid>

                    <Grid className="ubicacion" display="flex" flexDirection="row" alignItems="center">
                        <Stack direction="row" alignItems="center">
                            <PlaceIcon/>
                            <p>Buenos Aires, Argentina</p>
                        </Stack>

                        <Menu/>
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
