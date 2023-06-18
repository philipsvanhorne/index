/* Yurki Montero Montero (2023) */


import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Homepage from "./pages/home"
import "./styles/dev.css"
import "./styles/defaults.css"


const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
})


export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="*" element={<Homepage />} />
      </Routes>
    </Router>
  </ChakraProvider>
)