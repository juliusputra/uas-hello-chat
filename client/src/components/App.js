import React, { useEffect } from 'react'
import $ from 'jquery';
import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom';
import Login from './Login'
import useLocalStorage from '../hooks/useLocalStorage';
import Dashboard from './Dashboard'
import { ContactsProvider } from '../contexts/ContactsProvider'
import { ConversationsProvider } from '../contexts/ConversationsProvider';
import { SocketProvider } from '../contexts/SocketProvider';
import styles from './App.module.css';
import Navbar from './Navbar';
import About from './About';
import Error from './Error';

function App() {
  useEffect(() => {
    // $('body').removeClass().addClass(styles.background)
  })

  const [id, setId] = useLocalStorage('id')

  const dashboard = (
    <div className='container py-5'>
      <SocketProvider id={id}>
        <ContactsProvider>
          <ConversationsProvider id={id}>
            <Dashboard id={id} />
          </ConversationsProvider>
        </ContactsProvider>
      </SocketProvider>
    </div>
  )

  return (
    <Router>
      <Navbar />

      <div className='container py-5'>
        <Routes>
          <Route path="/" element={id ? dashboard : <Login onIdSubmit={setId} />} />
          <Route path="/home" element={id ? dashboard : <Login onIdSubmit={setId} />} />
          <Route path="/about" element={<About />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App