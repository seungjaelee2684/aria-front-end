import React, { Suspense, lazy, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from 'react-query';
import { QueryClient } from "react-query";
import { RecoilRoot, useRecoilState } from 'recoil';
import Header from './components/common/Header';
import MainLayout from './components/common/MainLayout';
import ScrollTop from './utils/ScrollTop';
import ScrollTopButton from './components/common/ScrollTop/ScrollTopButton';
import Footer from './components/common/Footer';
import LoadingSpinner from './components/common/LoadingSpinner';
import { AlertModalOpen } from './store/AlertModalOpen';
import AlertContainer from './components/common/AlertContainer';
import WorldTime from './components/common/WorldTime';

const Home = React.lazy(() => import('./pages/Home'));
const Check = React.lazy(() => import('./pages/Check'));
const Event = React.lazy(() => import('./pages/Event'));
const EventDetail = React.lazy(() => import('./pages/EventDetail'));
const Mentor = React.lazy(() => import('./pages/Mentor'));
const Schedule = React.lazy(() => import('./pages/Schedule'));
const MentorDetail = React.lazy(() => import('./pages/MentorDetail'));
const Notice = React.lazy(() => import('./pages/Notice'));
const NoticeDetail = React.lazy(() => import('./pages/NoticeDetail'));
const Showcase = React.lazy(() => import('./pages/Showcase'));
const Counseling = React.lazy(() => import('./pages/Counseling'));
const Policy = React.lazy(() => import('./pages/Policy'));
const MentorUpload = React.lazy(() => import('./pages/MentorUpload'));
const Update = React.lazy(() => import('./pages/Update'));


const queryClient = new QueryClient();

function App() {

  return (
    <div className='App'>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Suspense fallback={<LoadingSpinner />}>
              <ScrollTop />
              <Header />
              <Routes>
                <Route path='/' element={<Home />} caseSensitive />
                <Route element={<MainLayout />}>
                  <Route path='/upload/mentor' element={<MentorUpload />} caseSensitive />
                  <Route path='/check' element={<Check />} caseSensitive />
                  <Route path='/mentor' element={<Mentor />} caseSensitive />
                  <Route path='/mentor/detail/:id' element={<MentorDetail />} caseSensitive />
                  <Route path='/notice' element={<Notice />} caseSensitive />
                  <Route path='/notice/detail/:id' element={<NoticeDetail />} caseSensitive />
                  <Route path='/showcase' element={<Showcase />} caseSensitive />
                  <Route path='/schedule' element={<Schedule />} caseSensitive />
                  <Route path='/support/counseling' element={<Counseling />} caseSensitive />
                  <Route path='/support/policy' element={<Policy />} caseSensitive />
                  <Route path='/event' element={<Event />} caseSensitive />
                  <Route path='/event/detail/:id' element={<EventDetail />} caseSensitive />
                  <Route path='/update/:id' element={<Update />} caseSensitive />
                </Route>
              </Routes>
              <ScrollTopButton />
              <WorldTime />
              <AlertContainer />
              <Footer />
            </Suspense>
          </BrowserRouter>
        </QueryClientProvider>
      </RecoilRoot>
    </div>
  );
}

export default App;
