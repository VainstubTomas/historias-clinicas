import Navbar from "../components/Navbar";
import { Typography, Grid, Divider, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"
import "./Paciente.css"

const Paciente = () => {

    const navigate = useNavigate();

    const volverInicio = () => {
        navigate("/");
    }

    return (
      <>
        <Navbar/>

        <Grid container spacing={2} alignItems="center" className="grid-info-paciente" sx={{mt: "10px"}}>
            {/* Columna izquierda con el texto */}
            <Grid item xs={12} sm={3} sx={{
                display: "flex",
                flexDirection:"column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
            }}>
                <Typography variant="h6" fontWeight="regular">
                Nombre completo
                </Typography>
                <Typography variant="h6" fontWeight="light">
                Paciente de prueba
                </Typography>
            </Grid>

            <Grid item xs={12} sm={3} sx={{
                display: "flex",
                flexDirection:"column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%"
            }}>
                <Typography variant="h6" fontWeight="regular">
                Sexo
                </Typography>
                <Typography variant="h6" fontWeight="light">
                Masculino
                </Typography>
            </Grid>

            <Grid item xs={12} sm={3} sx={{
                display: "flex",
                flexDirection:"column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
            }}>
                <Typography variant="h6" fontWeight="regular">
                Prestador
                </Typography>
                <Typography variant="h6" fontWeight="light">
                Sancor
                </Typography>
            </Grid>

            <Grid item xs={12} sm={3} sx={{
                display: "flex",
                flexDirection:"column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
            }}>
                <Typography variant="h6" fontWeight="regular">
                Nro°
                </Typography>
                <Typography variant="h6" fontWeight="light">
                1234
                </Typography>
            </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />

        <Grid container spacing={2}>
            {/* Columna 1 */}
            <Grid item xs={12} sm={6}>
                <Typography variant="h3" fontWeight="light" sx={{ ml: 15 , mb: 5}}>
                    Historial
                </Typography>

                <Box>
                    <Typography variant="h5" fontWeight="bold" sx={{ ml: 15 }}>
                            Fecha - 21/02/2025
                    </Typography>
                    <Typography variant="h6" fontWeight="light" sx={{ ml: 15 }}>
                            Descripción: Dolor de cabeza.
                    </Typography>
                    <Typography variant="h6" fontWeight="light" sx={{ ml: 15 }}>
                            Prescripción: Ibuprofeno 600 cada 6hs.
                    </Typography>
                    <Typography variant="h6" fontWeight="light" sx={{ ml: 15 }}>
                            Comentarios: Saco turno para 2 semanas
                    </Typography>
                </Box>
            </Grid>

            {/* Columna 2 */}
            <Grid item xs={12} sm={6}>
                <Box
                    sx={{
                    display: "flex",
                    flexDirection: "column", // Alinea los botones en columna
                    gap: 2, // Espaciado entre botones
                    alignItems: "center", // Centra los botones horizontalmente
                    }}
                >
                    <Button variant="contained" sx={{ width: "300px", height: "80px", fontSize: "20px" }}>Registro de consultas</Button>
                    <Button variant="contained" sx={{ width: "300px", height: "80px", fontSize: "20px" }}>Editar paciente</Button>
                    <Button variant="contained" sx={{ width: "300px", height: "80px", fontSize: "20px" }} onClick={volverInicio}>Volver al inicio</Button>
                </Box>
            </Grid>

        </Grid>
        
      </>
    );
  };
  
  export default Paciente;