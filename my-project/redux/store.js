export const register = createAsyncThunk(
    'auth/register',
    async ({ name, email, password }, { rejectWithValue }) => {
      try {
        const response = await axios.post('/users/signup', {
          name,
          email,
          password,
        });
        setAuthHeader(response.data.token);
        return response.data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
  
  export const login = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
      try {
        const { data } = await axios.post('/users/login', { email, password });
        setAuthHeader(data.token);
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
  
  export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
      try {
        await axios.post('/users/logout');
        clearAuthHeader();
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );