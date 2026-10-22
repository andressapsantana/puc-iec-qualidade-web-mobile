import { useFavoritesStore } from '../../src/store/favoritesStore';

describe('FavoriteStore Unit Tests', () => {
  beforeEach(() => {
    useFavoritesStore.setState({ favorites: [] });
  });

  it('1. deve iniciar com a lista de favoritos vazia', () => {
    const state = useFavoritesStore.getState();
    expect(state.favorites).toEqual([]);
  });

  it('2. deve adicionar e remover um filme dos favoritos com sucesso', () => {
    const movie = { id: 603, title: 'Matrix' };
    
    // Adiciona
    useFavoritesStore.getState().addFavorite(movie as any);
    let state = useFavoritesStore.getState();
    expect(state.favorites).toHaveLength(1);

    // Remove
    useFavoritesStore.getState().removeFavorite(603);
    state = useFavoritesStore.getState();
    expect(state.favorites).toHaveLength(0);
  });

  it('3. deve verificar corretamente se um filme é favorito', () => {
    const movie = { id: 603, title: 'Matrix' };
    useFavoritesStore.getState().addFavorite(movie as any);

    const isFav = useFavoritesStore.getState().isFavorite(603);
    expect(isFav).toBe(true);
  });
});