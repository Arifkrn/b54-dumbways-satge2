// import HomePage from "./pages/Home-page"
// import LoginPage from "./pages/Login-page"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home-page"
import LoginPage from "./pages/Login-page"


function App() {
  const theme = extendTheme({
    styles : {
      global : {
        body : {
          bg : "#242424",
          color : "white"
        }
      }
    }
  })
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        {/* <HomePage/> */}
        {/* <LoginPage/> */}
        </Routes>
    </ChakraProvider>
  )
}

export default App
