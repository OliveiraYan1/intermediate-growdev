import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./configs/global/GlobalStyles"
import { AppRoutes } from "./configs/routes/AppRoutes"
import { lightTheme } from "./configs/themes"



function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
