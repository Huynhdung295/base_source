import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useEffect } from 'react';
import { getListLocation } from './apis';
const queryClient = new QueryClient()

export const App = () => {
  useEffect(() => {
    getListLocation({limit: 20})
  }, [])
  return <QueryClientProvider client={queryClient}> 
  <div>Hello world</div>
  </QueryClientProvider>;
};
