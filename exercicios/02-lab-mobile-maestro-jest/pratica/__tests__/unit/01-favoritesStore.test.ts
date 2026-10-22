import { useFavoriteStore } from '../../src/store/favoriteStore';

describe('FavoriteStore Unit Tests', () => {
  beforeEach(() => {
    useFavoriteStore.setState({ favorites: [] });
  });

  it('1. deve iniciar com a lista de favoritos vazia', () => {
    const state = useFavoriteStore.getState();
    expect(state.favorites).toEqual([]);
  });

  it('2. deve adicionar um filme aos favoritos com sucesso', () => {
    const movie = { id: 1, title: 'Matrix' };
    useFavoriteStore.getState().addFavorite(movie as any);

    const state = useFavoriteStore.getState();
    expect(state.favorites).toHaveLength(1);
    expect(state.favorites[0]).toEqual(movie);
  });

  it('3. deve remover um filme dos favoritos', () => {
    const movie = { id: 1, title: 'Matrix' };
    useFavoriteStore.getState().addFavorite(movie as any);
    expect(useFavoriteStore.getState().favorites).toHaveLength(1);

    useFavoriteStore.getState().removeFavorite(1);
    const state = useFavoriteStore.getState();
    expect(state.favorites).toHaveLength(0);
  });

  it('4. deve verificar corretamente se um filme é favorito', () => {
    const movie = { id: 1, title: 'Matrix' };
    useFavoriteStore.getState().addFavorite(movie as any);

    const isFav = useFavoriteStore.getState().isFavorite(1);
    const isNotFav = useFavoriteStore.getState().isFavorite(999);

    expect(isFav).toBe(true);
    expect(isNotFav).toBe(false);
  });
});