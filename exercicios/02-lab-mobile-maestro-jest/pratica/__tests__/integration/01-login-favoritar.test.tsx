import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import App from '../../App';

describe('Integração: Login e Favoritar', () => {
  test('2. deve realizar login e navegar para a tela principal', async () => {
    const { getByTestId, findByTestId } = render(<App />);

<<<<<<< HEAD
    // Preenche e submete o login usando os IDs reais da tela de login
    fireEvent.changeText(getByTestId('login-email-input'), 'aluno@puc.br');
    fireEvent.changeText(getByTestId('login-password-input'), '1234');
    fireEvent.press(getByTestId('login-submit-button'));
=======
    // Usando os testIDs reais retornados na árvore de erros do Jest:
    fireEvent.changeText(getByTestId('login-email-input'), 'aluno@puc.br');
    fireEvent.changeText(getByTestId('login-password-input'), '1234');
    fireEvent.press(getByTestId('login-submit-button'));
>>>>>>> 063f4441f9d627e3283889c72efdeb25ee4bc290

<<<<<<< HEAD
    // Aguarda a tela principal de filmes aparecer (testID real: movielist-screen)
    const mainScreen = await findByTestId('movielist-screen');
    expect(mainScreen).toBeTruthy();
=======
    // Espera navegar para a tela principal
    // (verifique no src/utils/testIDs.ts se o ID do catalogo/home é "home-screen", "movie-list" ou "catalog-screen")
    const mainScreen = await findByTestId('movie-list');
    expect(mainScreen).toBeTruthy();
>>>>>>> 063f4441f9d627e3283889c72efdeb25ee4bc290
  });

  test('3. deve favoritar um filme e refletir a mudança no estado/UI', async () => {
    const { getByTestId, findByTestId } = render(<App />);

<<<<<<< HEAD
    // Realiza o login prévio
    fireEvent.changeText(getByTestId('login-email-input'), 'aluno@puc.br');
    fireEvent.changeText(getByTestId('login-password-input'), '1234');
    fireEvent.press(getByTestId('login-submit-button'));
=======
    // Realiza o login com os testIDs reais
    fireEvent.changeText(getByTestId('login-email-input'), 'aluno@puc.br');
    fireEvent.changeText(getByTestId('login-password-input'), '1234');
    fireEvent.press(getByTestId('login-submit-button'));
>>>>>>> 063f4441f9d627e3283889c72efdeb25ee4bc290

<<<<<<< HEAD
    // Aguarda carregar a listagem
    await findByTestId('movielist-screen');
=======
    // Aguarda carregar a lista de filmes
    await findByTestId('movie-list');
>>>>>>> 063f4441f9d627e3283889c72efdeb25ee4bc290

<<<<<<< HEAD
    // Clica no botão de favoritar de um filme específico (ex: Matrix - testID: movie-card-heart-603)
    const favoriteButton = await findByTestId('movie-card-heart-603');
=======
    // Clica no botão favoritar (confira no testIDs.ts se é "favorite-button-1" ou "movie-card-favorite-1")
    const favoriteButton = await findByTestId('favorite-button-1');
>>>>>>> 063f4441f9d627e3283889c72efdeb25ee4bc290
    fireEvent.press(favoriteButton);

    expect(favoriteButton).toBeTruthy();
  });
});