// servicesSlice.js

export const fetchServices = createAsyncThunk('services/fetch', async () => {
  const response = await fetch('/api/services');
  return response.json();
});
