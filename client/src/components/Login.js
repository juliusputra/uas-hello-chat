import React, { useRef } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'

export default function Login({ onIdSubmit }) {
  const idRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()

    onIdSubmit(idRef.current.value)

    window.location.href = '/'
  }

  function createNewId() {
    onIdSubmit(uuidV4())

    window.location.href = '/'
  }

  return (
    <Container className="align-items-center d-flex" style={{ height: '100vh' }}>
      <Form onSubmit={handleSubmit} className="w-25 mx-auto">
        <Form.Group>
          <Form.Label>Enter Your ID</Form.Label>
          <Form.Control type="text" ref={idRef} required autoFocus />
        </Form.Group>
        <Button type="submit" className="mr-2">Login</Button>
        <Button onClick={createNewId} variant="secondary">Create Random ID</Button>
      </Form>
    </Container>
  )
}
