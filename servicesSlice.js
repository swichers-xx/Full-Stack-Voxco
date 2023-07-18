// servicesSlice.js

export const fetchServices = createAsyncThunk('services/fetch', async () => {
  const response = await fetch('/api/services');
  return response.json();
});
// Slice
const servicesSlice = createSlice({
  extraReducers: {
    [fetchServices.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchServices.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'idle';
    },
    [fetchServices.rejected]: (state) => {
      state.status = 'failed';
    }
  }
})  

// Component
if (status === 'loading') {
  return <Loader />
} else if (status === 'failed') {
  return <ErrorMsg /> 
} else {
  // render services
}
