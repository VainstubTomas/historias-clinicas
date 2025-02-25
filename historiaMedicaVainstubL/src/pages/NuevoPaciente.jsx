import Navbar from "../components/Navbar";
import { Box, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"

const NuevoPaciente = () => {
    const navigate = useNavigate()

    const Home = () => {
        navigate('/')
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
            placeholder="Nombre"
            fullWidth
            required
            sx={{ width: "700px", mt: "30px" }} // Asegura que se expanda al máximo permitido
          />
          <TextField
            variant="outlined"
            placeholder="Sexo"
            fullWidth
             required
            sx={{ width: "700px", mt: "30px" }} // Asegura que se expanda al máximo permitido
          />
          <TextField
            variant="outlined"
            placeholder="Prestador"
            fullWidth
             required
            sx={{ width: "700px", mt: "30px" }} // Asegura que se expanda al máximo permitido
          />
          <TextField
            variant="outlined"
            placeholder="Numero de afiliado"
            fullWidth
             required
            sx={{ width: "700px", mt: "30px" }} // Asegura que se expanda al máximo permitido
          />
          <Box sx={{mt: "50px"}}>
            <Button variant="contained" sx={{ width: "300px", height: "80px", fontSize: "20px", marginRight: "30px" }} onClick={Home}>Guardar</Button>
            <Button variant="contained" sx={{ width: "300px", height: "80px", fontSize: "20px", marginLeft: "30px" }} onClick={Home}>Cancelar</Button>
          </Box>

        </Box>


      </>
    );
  };
  
  export default NuevoPaciente;