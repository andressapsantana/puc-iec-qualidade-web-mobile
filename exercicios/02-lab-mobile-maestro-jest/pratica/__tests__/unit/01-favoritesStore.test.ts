import useFavoriteStore from '../../src/store/favoritesStore';

describe('FavoriteStore Unit Tests', () => {
  beforeEach(() => {
    const favorites = useFavoriteStore.getState().favorites;
    favorites.forEach(fav => useFavoriteStore.getState().removeFavorite(fav.id));
  });

  it('1. deve iniciar com a lista de favoritos vazia', () => {
    const state = useFavoriteStore.getState();
    expect(state.favorites).toEqual([]);
  });

  it('2. deve adicionar um filme aos favoritos com sucesso', () => {
    const movie = { id: 603, title: 'Matrix' };
    useFavoriteStore.getState().addFavorite(movie as any);

    const state = useFavoriteStore.getState();
    expect(state.favorites).toHaveLength(1);
  });

  it('3. deve remover um filme dos favoritos', () => {
    const movie = { id: 603, title: 'Matrix' };
    useFavoriteStore.getState().addFavorite(movie as any);

    useFavoriteStore.getState().removeFavorite(603);
    const state = useFavoriteStore.getState();
    expect(state.favorites).toHaveLength(0);
  });

  it('4. deve verificar corretamente se um filme é favorito', () => {
    const movie = { id: 603, title: 'Matrix' };
    useFavoriteStore.getState().addFavorite(movie as any);

    const isFav = useFavoriteStore.getState().isFavorite(603);
    expect(isFav).toBe(true);
  });
});