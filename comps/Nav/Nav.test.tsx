import React from 'react';
import { render, screen } from '@testing-library/react'
import Nav from './'

it('renders application name', ()=>{
  render(<Nav />)
  const appName = screen.getByText(/Typing Speed Test Challenge/i)
  expect(appName).toBeInTheDocument();
})
