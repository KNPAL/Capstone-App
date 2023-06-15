
import { render, screen } from '@testing-library/react';
import LoginForm from './loginForm';

describe("LoginForm", () => {
    it('renders Sign Up For TenantManagement link', () => {
        render(<LoginForm />);
        const linkElement = screen.getByText(/Sign Up For TenantManagement/i);
        expect(linkElement).toBeInTheDocument();
    });

    it('renders Login button', () => {
        render(<LoginForm />);
        const buttonElement = screen.getByText('Log In');
        expect(buttonElement).toBeInTheDocument();
    });

    it('renders input User name on component', () => {
        render(<LoginForm />);
        const buttonElement = screen.getByPlaceholderText('Username');
        expect(buttonElement).toBeInTheDocument();
    });

    it('renders input password on component', () => {
        render(<LoginForm />);
        const buttonElement = screen.getByPlaceholderText('Password');
        expect(buttonElement).toBeInTheDocument();
    });
})

