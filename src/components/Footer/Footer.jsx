// REACT
import { Container, Grid } from "@mui/material";

// CSS
import './Footer.css';

// TRADUCTOR
import i18n from './../../i18n';

// ICONS
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
    return (
      <div id="footerDiv">
          <Container>
              <Grid display="flex" container flexDirection={{xs: "column", sm: "row", md: "row"}} justifyContent={{xs: "center", sm: "space-between", md: "space-between"}} pt={2} alignItems="center">
                <Grid textAlign={{xs: "center", sm: "left", md: "left"}}>
                    <p><b>{i18n.t('Contacto')}</b></p>

                    <a href="mailto:maichu19.mg@gmail.com"><EmailIcon className="icono-contacto"/></a>
                    <a href="https://www.linkedin.com/in/mailen-gomez19/" target="_blank"><LinkedInIcon className="icono-contacto"/></a>
                    <a href="https://github.com/maigomez19" target="_blank"><GitHubIcon className="icono-contacto"/></a>
                </Grid>

                <Grid textAlign={{xs: "center", sm: "right", md: "right"}} display="flex" flexDirection={{xs: "row", sm: "column"}} justifyContent={{xs: "center", sm: "right"}} marginTop={{xs:1, sm:0, md:0}}>
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