import { QueryClient as QueryClientTanstack, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClientTanstack({
  defaultOptions: {
    queries: {
      retry: 2,
    },
  },
})

export default function QueryClient({ children }: any) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
