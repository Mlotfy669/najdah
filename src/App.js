// react , redux import
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll/modules';
// locale components
import Loader from './components/compound/loader'
// react icon 
import { BsArrowUp } from 'react-icons/bs'
// locale styles
import './App.scss';
// lazy loading routes
const LazyHome = React.lazy(() => import('./pages/Home'))

function App() {
  // get locale and direction from redux
  const locale = useSelector(state => state.locale.value.lang)
  const dir = useSelector(state => state.locale.value.dir)

  // show and hidden go to up button
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  }
  window.addEventListener('scroll', toggleVisible);

  return (
    <div className={`App ${locale} ${dir}`}>
      <Routes>
        <Route path='/' element={
          <React.Suspense fallback={<Loader />}>
            <LazyHome />
          </React.Suspense>
        }></Route>
      </Routes>
      {/* button with gototop function */}
      <button
        className='gototop'
        id='gototop'
        style={{ display: visible ? 'flex' : 'none' }}
        onClick={() => scroll.scrollToTop()}>
        <BsArrowUp />
      </button>
    </div>
  );
}

export default App;
