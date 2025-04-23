import { QueryClient, QueryFunction } from "@tanstack/react-query";

// Esta é uma versão simplificada do queryClient para o site estático
// Como não temos backend real, não precisamos fazer requisições reais

// Mock simples para simular uma resposta
async function mockResponse<T>(data: T): Promise<T> {
  // Simula um tempo de resposta para parecer uma chamada real
  await new Promise(resolve => setTimeout(resolve, 100));
  return data;
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  // Versão simplificada apenas para manter a interface
  console.log(`API Request simulada: ${method} ${url}`);
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  () =>
  async () => {
    // Versão simplificada que não faz chamadas reais
    // Retorna um objeto vazio para evitar erros
    return {} as any;
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Desativar o queryFn padrão, já que não temos API
      queryFn: undefined,
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
