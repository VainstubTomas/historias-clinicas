import React from "react";
import { Grid, TextField, Typography, Box} from "@mui/material";

const BuscadorPacientes = () => {
  return (
    <Grid container spacing={2} alignItems="center">
      {/* Columna izquierda con el texto */}
      <Grid item xs={12} sm={4} sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}>
        <Typography variant="h4" fontWeight="bold">
          Historias Médicas
        </Typography>
      </Grid>

      {/* Columna derecha con el buscador */}
      <Grid item xs={12} sm={8} sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "100%", maxWidth: 600 }}>
          <TextField
            variant="outlined"
            placeholder="Buscar paciente"
            fullWidth
            sx={{ width: "100%" }} // Asegura que se expanda al máximo permitido
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default BuscadorPacientes;
