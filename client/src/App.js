import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lightTheme } from "./utils/Theme";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const Container = styled.div``;

function App() {
  return <ThemeProvider theme={lightTheme}>
    <BrowserRouter>
    <Container>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </Container>
    </BrowserRouter>
  </ThemeProvider>
}

export default App;
