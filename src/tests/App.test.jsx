import { render, screen } from '@testing-library/react';
import * as userEvent from '@testing-library/user-event';
import App from '../App';

// Tests if App renders without issues
it('App Component Renders Without Error', () => {
    render(<App />);
});