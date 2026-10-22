import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import App from '../../App';

describe('Integração: Login e Favoritos', () => {
  it('teste 1: renderiza tela de login corretamente', async () => {
    const { getByTestId } = render(<App />);
    await waitFor(() => {
      expect(getByTestId('login-screen')).toBeTruthy();
    });
  });

  it('teste 2: realiza login e navega para a home', async () => {
    const { getByTestId } = render(<App />);

    await waitFor(() => {
      expect(getByTestId('login-screen')).toBeTruthy();
    });

    fireEvent.changeText(getByTestId('login-email-input'), 'aluno@puc.br');
    fireEvent.changeText(getByTestId('login-password-input'), '1234');
    fireEvent.press(getByTestId('login-submit-button'));

    await waitFor(() => {
      expect(getByTestId('home-screen')).toBeTruthy();
    });
  });

  it('teste 3: favorita um filme após o login', async () => {
    const { getByTestId } = render(<App />);

    await waitFor(() => {
      expect(getByTestId('login-screen')).toBeTruthy();
    });

    fireEvent.changeText(getByTestId('login-email-input'), 'aluno@puc.br');
    fireEvent.changeText(getByTestId('login-password-input'), '1234');
    fireEvent.press(getByTestId('login-submit-button'));

    await waitFor(() => {
      expect(getByTestId('home-screen')).toBeTruthy();
    });

    fireEvent.press(getByTestId('movie-item-0'));

    await waitFor(() => {
      expect(getByTestId('favorite-button')).toBeTruthy();
    });

    fireEvent.press(getByTestId('favorite-button'));
  });
});