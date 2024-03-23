import React, { Suspense, lazy } from 'react';
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

const Home = lazy(() => import('./pages/Home'));
const Check = lazy(() => import('./pages/Check'));
const Event = lazy(() => import('./pages/Event'));
const EventDetail = lazy(() => import('./pages/EventDetail'));
const Mentor = lazy(() => import('./pages/Mentor'));
const MentorDetail = lazy(() => import('./pages/MentorDetail'));
const Notice = lazy(() => import('./pages/Notice'));
const NoticeDetail = lazy(() => import('./pages/NoticeDetail'));
const Showcase = lazy(() => import('./pages/Showcase'));
const Counseling = lazy(() => import('./pages/Counseling'));
const Policy = lazy(() => import('./pages/Policy'));
// const MentorUpload = lazy(() => import('./pages/MentorUpload'));
const Error = lazy(() => import('./pages/Error'));

function App() {

  return (
    <div className='App'>
      <RecoilRoot>
        <BrowserRouter>
          <Suspense fallback={<LoadingSpinner />}>
            <ScrollTop />
            <Header />
            <Routes>
              <Route path='/' element={<Mentor />} caseSensitive />
              <Route element={<MainLayout />}>
                {/* <Route path='/upload/mentor' element={<MentorUpload />} caseSensitive /> */}
                <Route path='/check' element={<Check />} caseSensitive />
                <Route path='/mentor' element={<Mentor />} caseSensitive />
                <Route path='/mentor/detail/:id' element={<MentorDetail />} caseSensitive />
                <Route path='/notice' element={<Notice />} caseSensitive />
                <Route path='/notice/detail/:id' element={<NoticeDetail />} caseSensitive />
                <Route path='/event/detail/:id' element={<EventDetail />} caseSensitive />
                <Route path='/showcase' element={<Showcase />} caseSensitive />
                <Route path='/support/counseling' element={<Counseling />} caseSensitive />
                <Route path='/support/policy' element={<Policy />} caseSensitive />
                <Route path='/event' element={<Event />} caseSensitive />
                {/* <Route path='*' element={<Error />} /> */}
              </Route>
            </Routes>
            <ScrollTopButton />
            <WorldTime />
            <AlertContainer />
            <Footer />
          </Suspense>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;