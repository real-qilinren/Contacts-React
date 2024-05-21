import React, {useMemo} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from '@mui/material';
import { useSelector } from 'react-redux';
import themeSettings from './theme';
import {createTheme} from "@mui/material/styles";
import HomePage from "./scenes/homePage";

function App() {
    const mode = useSelector((state) => state.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="App">
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Routes>
                    <Route path={"/"} element={<HomePage />} />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
