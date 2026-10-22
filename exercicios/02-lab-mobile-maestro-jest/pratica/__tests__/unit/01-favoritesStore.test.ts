import { useFavoritesStore } from '../../src/store/favoritesStore';

describe('FavoriteStore Unit Tests', () => {
  beforeEach(() => {
    useFavoritesStore.setState({ favorites: [] });
  });

  it('1. deve iniciar com a lista de favoritos vazia', () => {
    const state = useFavoritesStore.getState();
    expect(state.favorites).toEqual([]);
  });

  it('2. deve adicionar um filme aos favoritos com sucesso', () => {
    const movie = { id: 603, title: 'Matrix' };
    useFavoritesStore.getState().addFavorite(movie as any);

    const state = useFavoritesStore.getState();
    expect(state.favorites).toHaveLength(1);
  });

  it('3. deve remover um filme dos favoritos', () => {
    const movie = { id: 603, title: 'Matrix' };
    useFavoritesStore.getState().addFavorite(movie as any);

    useFavoritesStore.getState().removeFavorite(603);
    const state = useFavoritesStore.getState();
    expect(state.favorites).toHaveLength(0);
  });

  it('4. deve verificar corretamente se um filme é favorito', () => {
    const movie = { id: 603, title: 'Matrix' };
    useFavoritesStore.getState().addFavorite(movie as any);

    const isFav = useFavoritesStore.getState().isFavorite(603);
    expect(isFav).toBe(true);
  });
});