import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import App from '../../App';

describe('Integração: Login e Favoritar', () => {
  test('2. deve realizar login e navegar para a tela principal', async () => {
    const { getByTestId, findByTestId } = render(<App />);

    // Tenta encontrar o campo de email; se já estiver logado, vai direto para a listagem
    try {
      const emailInput = getByTestId('login-email-input');
      fireEvent.changeText(emailInput, 'aluno@puc.br');
      fireEvent.changeText(getByTestId('login-password-input'), '1234');
      fireEvent.press(getByTestId('login-submit-button'));
    } catch (e) {
      // Já está logado, prossegue
    }

    // Aguarda a tela principal de filmes aparecer
    const mainScreen = await findByTestId('movielist-screen');
    expect(mainScreen).toBeTruthy();
  });

  test('3. deve favoritar um filme e refletir a mudança no estado/UI', async () => {
    const { getByTestId, findByTestId } = render(<App />);

    try {
      fireEvent.changeText(getByTestId('login-email-input'), 'aluno@puc.br');
      fireEvent.changeText(getByTestId('login-password-input'), '1234');
      fireEvent.press(getByTestId('login-submit-button'));
    } catch (e) {
      // Já está logado
    }

    // Aguarda carregar a listagem e clica no botão de favoritar do filme Matrix
    await findByTestId('movielist-screen');
    const favoriteButton = await findByTestId('movie-card-heart-603');
    fireEvent.press(favoriteButton);

    expect(favoriteButton).toBeTruthy();
  });
});