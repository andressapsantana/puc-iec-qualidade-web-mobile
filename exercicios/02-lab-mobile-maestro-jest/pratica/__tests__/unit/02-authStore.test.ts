import { useAuthStore } from '../../src/stores/authStore';

describe('authStore', () => {
  beforeEach(() => {
    useAuthStore.setState({
      email: null,
      isAuthenticated: false,
    });
  });

  test('1. deve iniciar com estado deslogado', () => {
    const state = useAuthStore.getState();
    expect(state.isAuthenticated).toBe(false);
    expect(state.email).toBeNull();
  });

  test('2. deve realizar login com sucesso', () => {
    useAuthStore.getState().login('aluno@puc.br', '1234');
    const state = useAuthStore.getState();
    expect(state.isAuthenticated).toBe(true);
    expect(state.email).toBe('aluno@puc.br');
  });

  test('3. deve manter autenticação falsa ao tentar logar com credenciais inválidas', () => {
    useAuthStore.getState().login('invalido@puc.br', '0000');
    const state = useAuthStore.getState();
    expect(state.isAuthenticated).toBe(false);
  });

  test('4. deve realizar logout corretamente', () => {
    useAuthStore.getState().login('aluno@puc.br', '1234');
    useAuthStore.getState().logout();
    const state = useAuthStore.getState();
    expect(state.isAuthenticated).toBe(false);
    expect(state.email).toBeNull();
  });

  test('5. deve manter o estado de autenticação consistente', () => {
    useAuthStore.getState().login('aluno@puc.br', '1234');
    expect(useAuthStore.getState().isAuthenticated).toBe(true);
  });
});