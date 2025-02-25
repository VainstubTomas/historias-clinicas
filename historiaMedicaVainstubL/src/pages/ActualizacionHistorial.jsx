import Navbar from "../components/Navbar";
import { Box, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"

const ActualizacionHistorial = () => {
  const navigate = useNavigate()

  const Historial = () => {
      navigate('/Paciente')
  }

  return (
    <>
      <Navbar/>

      <Box sx={{ 
        width: "100%",
        display: "flex", 
        flexDirection: "column",
        height: "100vh", 
        justifyContent: "center",
        alignItems:"center" }}>
        <TextField
          variant="outlined"
          placeholder="Fecha"
          fullWidth
          required
          sx={{ width: "700px", mt: "30px" }} // Asegura que se expanda al máximo permitido
        />
        <TextField
          variant="outlined"
          placeholder="Descripción"
          fullWidth
           required
          sx={{ width: "700px", mt: "30px" }} // Asegura que se expanda al máximo permitido
        />
        <TextField
          variant="outlined"
          placeholder="Precripción"
          fullWidth
           required
          sx={{ width: "700px", mt: "30px" }} // Asegura que se expanda al máximo permitido
        />
        <TextField
          variant="outlined"
          placeholder="Comentarios"
          fullWidth
           required
          sx={{ width: "700px", mt: "30px" }} // Asegura que se expanda al máximo permitido
        />
        <Box sx={{mt: "50px"}}>
          <Button variant="contained" sx={{ width: "300px", height: "80px", fontSize: "20px", marginRight: "30px" }} onClick={Historial}>Guardar</Button>
        </Box>

      </Box>
    </>
    );
  };
  
  export default ActualizacionHistorial;