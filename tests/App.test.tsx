import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import App from '../src/App'
import { describe, it } from 'vitest'

describe('App', () => {
    it('renders the App component', () => {
        render(<App />)

        screen.debug(); // prints out the jsx in the App component unto the command line
    })
})