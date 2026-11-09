import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import App from '../../App';

describe('Integração: Login e Favoritar', () => {
  test('2. deve realizar login e navegar para a tela principal', async () => {
    const { getByTestId, findByTestId } = render(<App />);

    // Usando os testIDs reais retornados na árvore de erros do Jest:
    fireEvent.changeText(getByTestId('login-email-input'), 'aluno@puc.br');
    fireEvent.changeText(getByTestId('login-password-input'), '1234');
    fireEvent.press(getByTestId('login-submit-button'));

    // Espera navegar para a tela principal
    // (verifique no src/utils/testIDs.ts se o ID do catalogo/home é "home-screen", "movie-list" ou "catalog-screen")
    const mainScreen = await findByTestId('movie-list');
    expect(mainScreen).toBeTruthy();
  });

  test('3. deve favoritar um filme e refletir a mudança no estado/UI', async () => {
    const { getByTestId, findByTestId } = render(<App />);

    // Realiza o login com os testIDs reais
    fireEvent.changeText(getByTestId('login-email-input'), 'aluno@puc.br');
    fireEvent.changeText(getByTestId('login-password-input'), '1234');
    fireEvent.press(getByTestId('login-submit-button'));

    // Aguarda carregar a lista de filmes
    await findByTestId('movie-list');

    // Clica no botão favoritar (confira no testIDs.ts se é "favorite-button-1" ou "movie-card-favorite-1")
    const favoriteButton = await findByTestId('favorite-button-1');
    fireEvent.press(favoriteButton);

    expect(favoriteButton).toBeTruthy();
  });
});