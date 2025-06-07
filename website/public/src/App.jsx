import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components"
import { BrowserRouter, Routes, Route } from "react-router"

import Header from "./common/Header"
import Footer from "./common/Footer"

import Main from "./pages/Main"
import Achivments from "./pages/Achivments"
import Technologies from "./pages/Technologies"
import Projects from "./pages/Projects"

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const ContentWrapper = styled.main`
  flex: 1;
`;

export default function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Header />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/achievements" element={<Achivments />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </ContentWrapper>
        <Footer />
      </AppContainer>
    </BrowserRouter>
  );
}
