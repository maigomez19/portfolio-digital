// REACT
import { Container, Grid } from "@mui/material";

// CSS
import './Footer.css';

// TRADUCTOR
import i18n from './../../i18n';

export default function Footer() {
    return (
      <div id="footerDiv">
          <Grid textAlign="center">
              <p className="footerTexto" id="portfolioFooter">{i18n.t('Portfolio')} {i18n.t('Digital')}.</p>
          </Grid>

          <Grid textAlign="center" id="copyright" mt={2}>
              <p><b>&copy; Mailen Gomez 2024</b> - {i18n.t('Todos_los_derechos_reservados')}.</p>
          </Grid>
      </div>
    );
  }