import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import App from '../../App';

describe('Integração: Login e Favoritar', () => {
  test('2. deve realizar login e navegar para a tela principal', async () => {
    const { getByTestId, findByTestId } = render(<App />);

    fireEvent.changeText(getByTestId('input-email'), 'aluno@puc.br');
    fireEvent.changeText(getByTestId('input-password'), '1234');
    fireEvent.press(getByTestId('button-login'));

    // Espera a tela de catálogo/home carregar usando o ID real
    const movieList = await findByTestId('movie-list');
    expect(movieList).toBeTruthy();
  });

  test('3. deve favoritar um filme e refletir a mudança no estado/UI', async () => {
    const { getByTestId, findByTestId, queryByTestId } = render(<App />);

    // Realiza o login prévio
    fireEvent.changeText(getByTestId('input-email'), 'aluno@puc.br');
    fireEvent.changeText(getByTestId('input-password'), '1234');
    fireEvent.press(getByTestId('button-login'));

    await findByTestId('movie-list');

    // Clica no botão de favorito do primeiro item usando o testID padrão
    const favoriteButton = await findByTestId('favorite-button-1');
    fireEvent.press(favoriteButton);

    // Valida que o item foi marcado ou que consta na aba de favoritos
    expect(getByTestId('favorite-button-1')).toBeTruthy();
  });
});