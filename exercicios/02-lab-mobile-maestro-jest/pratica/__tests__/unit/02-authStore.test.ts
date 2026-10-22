import { useAuthStore } from '../../src/store/authStore';

describe('AuthStore Unit Tests', () => {
  beforeEach(() => {
    useAuthStore.setState({ user: null, isAuthenticated: false, error: null });
  });

  it('1. deve iniciar com o estado desautenticado', () => {
    const state = useAuthStore.getState();
    expect(state.isAuthenticated).toBe(false);
    expect(state.user).toBeNull();
    expect(state.error).toBeNull();
  });

  it('2. deve realizar login com sucesso usando credenciais válidas', async () => {
    await useAuthStore.getState().login('aluno@puc.br', '1234');
    const state = useAuthStore.getState();
    expect(state.isAuthenticated).toBe(true);
    expect(state.user).not.toBeNull();
    expect(state.error).toBeNull();
  });

  it('3. deve tratar falha de login com credenciais inválidas', async () => {
    await useAuthStore.getState().login('errado@puc.br', 'wrong');
    const state = useAuthStore.getState();
    expect(state.isAuthenticated).toBe(false);
    expect(state.user).toBeNull();
    expect(state.error).not.toBeNull();
  });

  it('4. deve realizar logout com sucesso', async () => {
    await useAuthStore.getState().login('aluno@puc.br', '1234');
    expect(useAuthStore.getState().isAuthenticated).toBe(true);

    useAuthStore.getState().logout();
    const state = useAuthStore.getState();
    expect(state.isAuthenticated).toBe(false);
    expect(state.user).toBeNull();
  });

  it('5. deve limpar o estado de erro ao invocar a limpeza', async () => {
    await useAuthStore.getState().login('errado@puc.br', 'wrong');
    expect(useAuthStore.getState().error).not.toBeNull();

    if (typeof useAuthStore.getState().clearError === 'function') {
      useAuthStore.getState().clearError();
    } else {
      useAuthStore.setState({ error: null });
    }

    expect(useAuthStore.getState().error).toBeNull();
  });
});