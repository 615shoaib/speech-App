import './App.css';
import { Paper,ThemeProvider,createTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
// components
import Main from './Components/Main';
import { useState } from 'react';

function App() {
  const [mode,setMode]=useState(false)
  const theme=createTheme({
    palette:{
      mode : mode ? "dark" : "light"
    }
  })
  return (
    <>
    <ThemeProvider theme={theme}>
      <Paper square variant="elevation" color="secondary" sx={{width:"100vw",height:"100vh"}}>
      <Brightness4Icon fontSize="large" onClick={()=>setMode(!mode)} />
      {mode ? " Dark Mode": "Light Mode"}
    <Main />
    </Paper>
    </ThemeProvider>
   </>
  );
}

export default App;
