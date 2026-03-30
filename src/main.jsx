// --- GLOBAL SHIM: Always define window.Activity safely ---
// if (typeof window !== 'undefined' && !window.Activity) {
//   window.Activity = {};
// }
// --------------------------------------------------------

import React, { lazy, Suspense, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import './index.css'
import { HelmetProvider } from "react-helmet-async";

console.log('🚀 main.jsx: Script loading started')

// Lazy load App
const App = lazy(() => {
  console.log('📦 Lazy loading App.jsx...')
  return import('./App.jsx')
})

// Loading component
const PageLoading = () => (
  <div className="app-loading">
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚇</div>
      <h2>Delhi Metro Route Planner</h2>
      <p>Loading...</p>
    </div>
  </div>
)

// Simple Root Component
function Root() {
  useEffect(() => {
    console.log('✅ Root component mounted')
  }, [])
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <HelmetProvider>
          <Suspense fallback={<PageLoading />}>
            <App />
          </Suspense>
        </HelmetProvider>
      </BrowserRouter>
    </Provider>
  )
}

// Mount React - NO ERROR SUPPRESSION
console.log('🔍 Looking for root element:', document.getElementById('root'))

const root = ReactDOM.createRoot(document.getElementById('root'))

console.log('✨ About to render React app...')

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)

console.log('📡 React render call complete')
