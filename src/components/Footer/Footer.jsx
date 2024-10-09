// REACT
import { Container, Grid } from "@mui/material";

// CSS
import './Footer.css';

// TRADUCTOR
import i18n from './../../i18n';

export default function Footer() {
    return (
      <div id="footerDiv">
          <Container>
              <Grid display="flex" container flexDirection={{xs: "column", sm: "row", md: "row"}} justifyContent={{xs: "center", sm: "space-between", md: "space-between"}} pt={2}>
                <Grid textAlign={{xs: "center", sm: "left", md: "left"}}>
                    <p><b>{i18n.t('Contacto')}</b></p>
                    <p><a href="mailto:maichu19.mg@gmail.com">maichu19.mg@gmail.com</a></p>
                </Grid>

                <Grid textAlign={{xs: "center", sm: "right", md: "right"}} display="flex" flexDirection={{xs: "row", sm: "column"}} justifyContent={{xs: "center", sm: "right"}}>
                    <p className="footerTexto" id="portfolioFooter">{i18n.t('Portfolio')}</p>
                    <p className="footerTexto">{i18n.t('Digital')}.</p>
                </Grid>
              </Grid>

              <Grid textAlign="center" id="copyright" mt={2} pb={2}>
                <p><b>&copy; Mailen Gomez 2024</b> - {i18n.t('Todos_los_derechos_reservados')}.</p>
              </Grid>
          </Container>
      </div>
    );
  }