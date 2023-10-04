import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from 'react-query';
import { QueryClient } from "react-query";
import { RecoilRoot } from 'recoil';
import Home from './pages/Home';
import Notice from './pages/Notice';
import Mentor from './pages/Mentor';
import Hof from './pages/Hof';
import Support from './pages/Support';
import Header from './components/common/Header';
import MainLayout from './components/common/MainLayout';
import MentorDetail from './pages/MentorDetail';
import ScrollBar from './components/common/ScrollBar';

const queryClient = new QueryClient();

function App() {
  return (
    <div className='App'>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              {/* <Route element={<MainLayout />}> */}
                <Route path='/notice' element={<Notice />} />
                <Route path='/mentor' element={<Mentor />} />
                <Route path='/hof' element={<Hof />} />
                <Route path='/support' element={<Support />} />
                <Route path='/mentor/detail/:id' element={<MentorDetail />} />
              {/* </Route> */}
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </RecoilRoot>
    </div>
  );
}

export default App;
