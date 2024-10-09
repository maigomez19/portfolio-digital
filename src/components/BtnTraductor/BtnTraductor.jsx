// REACT
import Button from '@mui/material/Button';
import banderaEsp from "./imgsTraductor/español.png";
import banderaIng from "./imgsTraductor/ingles.png";
import Box from '@mui/material/Box';

// ICONS
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

// CSS
import './BtnTraductor.css';

export default function BtnTraductor() {
    return (
        <Box display="flex" flexDirection="column" id="btns">
            <Button id="btnTraductor3" p={0} href='#inicio'>
                <ArrowCircleUpIcon id="volverArriba"/>
            </Button>

            <Button id="btnTraductor2" variant="contained" p={0} href='/en/'>
                <img src={banderaIng} alt="bandera inglés"/>
            </Button>


            <Button id="btnTraductor" variant="contained" p={0} href='/es/'>
                <img src={banderaEsp} alt="bandera español"/>
            </Button>
        </Box>
    );
}