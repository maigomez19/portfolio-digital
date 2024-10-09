// REACT
import * as React from 'react';
import { Grid, Container, Stack } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import Menu from '../Menu/Menu';

// CSS
import './Portada.css';

// TRADUCTOR
import i18n from './../../i18n';

export default function Portada() {
    return (
        <div id="portada">
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
                        <Grid>
                            <p className='tituloPortada'>{i18n.t('Portfolio')}</p>
                        </Grid>

                        <Grid>
                            <p className='tituloPortada'>{i18n.t('Digital')}.</p>
                        </Grid>
                    </Container>
                </Grid>
            </Container>
        </div>
    );
}
