// REACT
import * as React from 'react';
import { Container, Grid } from '@mui/material';


// CSS
import './Header.css';

export default function Header() {
  return (
    <div id="headerDiv">
        <div id="lineaHeader">
          <Container>
            <div id="headerIzq"></div>
          </Container>
        </div>

        <Container>
            <Grid p={0} m={0}>
                <p id="tituloHeader">Mailen Gomez</p>
            </Grid>
        </Container>
    </div>
  );
}
