import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
});

export default function App() {
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <RouterProvider router={router} />
                <CssBaseline />
            </ThemeProvider>
            
        </>
    )
}