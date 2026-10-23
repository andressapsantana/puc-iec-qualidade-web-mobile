import { useFavoritesStore } from '../../src/store/favoritesStore';

describe('FavoriteStore Unit Tests', () => {
  it('1. deve mostrar as propriedades e funções disponíveis no store', () => {
    const state = useFavoritesStore.getState();
    console.log('--- MÉTODOS DISPONÍVEIS NO FAVORITESSTORE:', Object.keys(state));
    expect(state).toBeDefined();
  });
});