import Navbar from "../components/Navbar";
import BuscadorPacientes from "../components/buscadorPacientes";
import { Box, Divider, Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"
import "./Home.css"

const Home = () => {
    const navigate = useNavigate()

    const PaginaPaciente = () => {
        navigate('/Paciente')
    }

    const NuevoPaciente = () => {
      navigate('/NuevoPaciente')
  }

    return (
      <>
        <Navbar/>

        <Box display="flex" justifyContent="center" mt={4}>
            <BuscadorPacientes />
        </Box>

        <Divider sx={{ my: 2 }} />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
              <Box sx={{ ml: 15 }}>
                <Typography variant="h4" fontWeight="Regular">
                Nombre paciente
                </Typography>

                <Typography variant="h6" fontWeight="light" className="nombre-paciente" onClick={PaginaPaciente}>
                Paciente de prueba *
                </Typography>
                <Typography variant="h6" fontWeight="light" className="nombre-paciente">
                Paciente de prueba
                </Typography>
                <Typography variant="h6" fontWeight="light" className="nombre-paciente">
                Paciente de prueba
                </Typography>
                <Typography variant="h6" fontWeight="light" className="nombre-paciente">
                Paciente de prueba
                </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box
             sx={{
              display: "flex",
              flexDirection: "column", // Alinea los botones en columna
              gap: 2, // Espaciado entre botones
              alignItems: "center", // Centra los botones horizontalmente
              }}>
              <Button variant="contained" sx={{ width: "300px", height: "80px", fontSize: "20px" }} onClick={NuevoPaciente}>Nuevo paciente</Button>
            </Box>
          </Grid>
        </Grid>

      </>
    );
  };
  
  export default Home;