import React, { Suspense, lazy, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider } from 'react-query';
import { QueryClient } from "react-query";
import { RecoilRoot, useRecoilState } from 'recoil';
// import Home from './pages/Home';
// import Notice from './pages/Notice';
// import Mentor from './pages/Mentor';
// import Schedule from './pages/Schedule';
import Header from './components/common/Header';
import MainLayout from './components/common/MainLayout';
// import MentorDetail from './pages/MentorDetail';
import ScrollBar from './components/common/ScrollBar';
import ScrollTop from './utils/ScrollTop';
// import Notification from './pages/Notification';
// import NotificationDetail from './pages/NotificationDetail';
// import NoticeDetail from './pages/NoticeDetail';
import ScrollTopButton from './components/common/ScrollTop/ScrollTopButton';
// import Showcase from './pages/Showcase';
// import Check from './pages/Check';
// import SNSMenu from './components/common/SNSMenu';
import Footer from './components/common/Footer';
import LoadingSpinner from './components/common/LoadingSpinner';
import { AlertModalOpen } from './store/AlertModalOpen';
import AlertContainer from './components/common/AlertContainer';
// import Counseling from './pages/Counseling';
// import Policy from './pages/Policy';

const Home = React.lazy(() => import('./pages/Home'));
const Check = React.lazy(() => import('./pages/Check'));
const Notice = React.lazy(() => import('./pages/Notice'));
const Mentor = React.lazy(() => import('./pages/Mentor'));
const Schedule = React.lazy(() => import('./pages/Schedule'));
const MentorDetail = React.lazy(() => import('./pages/MentorDetail'));
const Notification = React.lazy(() => import('./pages/Notification'));
const NotificationDetail = React.lazy(() => import('./pages/NotificationDetail'));
const NoticeDetail = React.lazy(() => import('./pages/NoticeDetail'));
const Showcase = React.lazy(() => import('./pages/Showcase'));
const Counseling = React.lazy(() => import('./pages/Counseling'));
const Policy = React.lazy(() => import('./pages/Policy'));


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
                  <Route path='/check' element={<Check />} caseSensitive />
                  <Route path='/notice' element={<Notice />} caseSensitive />
                  <Route path='/mentor' element={<Mentor />} caseSensitive />
                  <Route path='/showcase' element={<Showcase />} caseSensitive />
                  <Route path='/schedule' element={<Schedule />} caseSensitive />
                  <Route path='/support/counseling' element={<Counseling />} caseSensitive />
                  <Route path='/support/policy' element={<Policy />} caseSensitive />
                  <Route path='/mentor/detail/:id' element={<MentorDetail />} caseSensitive />
                  <Route path='/notice/notification' element={<Notification />} caseSensitive />
                  <Route path='/notice/notification/detail/:id' element={<NotificationDetail />} caseSensitive />
                  <Route path='/notice/detail/:id' element={<NoticeDetail />} caseSensitive />
                </Route>
              </Routes>
              <ScrollTopButton />
              <AlertContainer />
              {/* <Footer /> */}
            </Suspense>
          </BrowserRouter>
        </QueryClientProvider>
      </RecoilRoot>
    </div>
  );
}

export default App;
