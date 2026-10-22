Run npx jest --ci
PASS __tests__/unit/02-authStore.test.ts
FAIL __tests__/unit/01-favoritesStore.test.ts
  ● FavoriteStore Unit Tests › 1. deve iniciar com a lista de favoritos vazia

    TypeError: Cannot read properties of undefined (reading 'setState')

      3 | describe('FavoriteStore Unit Tests', () => {
      4 |   beforeEach(() => {
    > 5 |     useFavoriteStore.setState({ favorites: [] });
        |                      ^
      6 |   });
      7 |
      8 |   it('1. deve iniciar com a lista de favoritos vazia', () => {

      at Object.setState (__tests__/unit/01-favoritesStore.test.ts:5:22)

  ● FavoriteStore Unit Tests › 2. deve adicionar um filme aos favoritos com sucesso

    TypeError: Cannot read properties of undefined (reading 'setState')

      3 | describe('FavoriteStore Unit Tests', () => {
      4 |   beforeEach(() => {
    > 5 |     useFavoriteStore.setState({ favorites: [] });
        |                      ^
      6 |   });
      7 |
      8 |   it('1. deve iniciar com a lista de favoritos vazia', () => {

      at Object.setState (__tests__/unit/01-favoritesStore.test.ts:5:22)

  ● FavoriteStore Unit Tests › 3. deve remover um filme dos favoritos

    TypeError: Cannot read properties of undefined (reading 'setState')

      3 | describe('FavoriteStore Unit Tests', () => {
      4 |   beforeEach(() => {
    > 5 |     useFavoriteStore.setState({ favorites: [] });
        |                      ^
      6 |   });
      7 |
      8 |   it('1. deve iniciar com a lista de favoritos vazia', () => {

      at Object.setState (__tests__/unit/01-favoritesStore.test.ts:5:22)

  ● FavoriteStore Unit Tests › 4. deve verificar corretamente se um filme é favorito

    TypeError: Cannot read properties of undefined (reading 'setState')

      3 | describe('FavoriteStore Unit Tests', () => {
      4 |   beforeEach(() => {
    > 5 |     useFavoriteStore.setState({ favorites: [] });
        |                      ^
      6 |   });
      7 |
      8 |   it('1. deve iniciar com a lista de favoritos vazia', () => {

      at Object.setState (__tests__/unit/01-favoritesStore.test.ts:5:22)

FAIL __tests__/integration/01-login-favoritar.test.tsx (7.973 s)
  ● Integração: Login e Favoritos › teste 1: renderiza tela de login corretamente

    TypeError: Cannot read properties of undefined (reading 'setState')

       8 |   beforeEach(() => {
       9 |     useAuthStore.getState().logout();
    > 10 |     useFavoriteStore.setState({ favorites: [] });
         |                      ^
      11 |   });
      12 |
      13 |   it('teste 1: renderiza tela de login corretamente', async () => {

      at Object.setState (__tests__/integration/01-login-favoritar.test.tsx:10:22)

  ● Integração: Login e Favoritos › teste 2: realiza login e navega para a home

    TypeError: Cannot read properties of undefined (reading 'setState')

       8 |   beforeEach(() => {
       9 |     useAuthStore.getState().logout();
    > 10 |     useFavoriteStore.setState({ favorites: [] });
         |                      ^
      11 |   });
      12 |
      13 |   it('teste 1: renderiza tela de login corretamente', async () => {

      at Object.setState (__tests__/integration/01-login-favoritar.test.tsx:10:22)

  ● Integração: Login e Favoritos › teste 3: favorita um filme após o login

    TypeError: Cannot read properties of undefined (reading 'setState')

       8 |   beforeEach(() => {
       9 |     useAuthStore.getState().logout();
    > 10 |     useFavoriteStore.setState({ favorites: [] });
         |                      ^
      11 |   });
      12 |
      13 |   it('teste 1: renderiza tela de login corretamente', async () => {

      at Object.setState (__tests__/integration/01-login-favoritar.test.tsx:10:22)

Test Suites: 2 failed, 1 passed, 3 total
Tests:       7 failed, 5 passed, 12 total
Snapshots:   0 total
Time:        8.702 s
Ran all test suites.
Error: Process completed with exit code 1.