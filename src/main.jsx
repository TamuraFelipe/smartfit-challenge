import React from 'react'
import ReactDOM from 'react-dom/client'

import { Header } from './components/Header/index.jsx'
import { Form } from './components/Form/index.jsx'
import { Legend } from './components/Legend/index.jsx'
import { Card } from './components/Card/index.jsx'
import { Footer } from './components/Footer/index.jsx'

/* import App from './App.jsx' */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Form />
    <Legend />
    <Card />
    <Footer />
    {/* <App /> */}
  </React.StrictMode>,
)
