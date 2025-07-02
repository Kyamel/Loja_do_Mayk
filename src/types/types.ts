// types.ts
export interface Produto {
  id: string
  price: number
  title: string;
  description: string;
  Iimage?: string;
}

export interface DadosPagamento {
  formaPagamento: 'pix' | 'cartao' | 'boleto'
  comprador: {
    nome: string
    email: string
    endereco: string
  }
}
