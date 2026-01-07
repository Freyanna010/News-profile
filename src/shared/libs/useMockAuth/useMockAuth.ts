const MOCK_AUTHENTICATED = false;

export const useMockAuth = () => {
  return {
    isAuthenticated: MOCK_AUTHENTICATED,
  };
};
