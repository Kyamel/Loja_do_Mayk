<!-- Begin - Lucas: Adicionar requisitos e rodamap -->
### 7. Requisitos Não Funcionais

### Tipagem Estática
Sempre use TypeScript para evitar erros derivados de dados não tipados.

#### Design Responsivo
- A interface se adapta a diferentes tamanhos de tela (celular, tablet, desktop).
- Use **media queries** (com CSS Modules/SCSS) ou **breakpoints do TailwindCSS**.

**Exemplo com Tailwind:**
```tsx
<p className="text-sm md:text-base lg:text-lg">Texto adaptável</p>
```

#### Suporte a Tema Claro/Escuro
- O site respeita a preferência do sistema (`prefers-color-scheme`).
- Use **variáveis CSS globais** ou `darkMode` do TailwindCSS.

**Exemplo com Tailwind:**
```tsx
<div className="bg-white text-black dark:bg-black dark:text-white">Tema adaptável</div>
```

**Exemplo com CSS/SCSS:**
```css
:root {
  --bg: white;
  --text: black;
}
@media (prefers-color-scheme: dark) {
  :root {
    --bg: black;
    --text: white;
  }
}
```

#### Design Modular
- Nada de hardcode! Cores, fontes e tamanhos devem vir de **variáveis CSS** ou **tokens de design**.
- Use `:root` com SCSS, ou configure no `tailwind.config.js`.

**Exemplo com CSS:**
```css
:root {
  --primary: #3490dc;
}
.button {
  background-color: var(--primary);
}
```

#### Acessibilidade
- Sempre use `alt` em imagens e atributos `aria-*` onde necessário.
- O site é amigável para leitores de tela.

**Exemplo com imagem do Next.js:**
```tsx
<Image src="/logo.png" alt="Logotipo da empresa" width={100} height={50} />
```

**Exemplo com botão acessível:**
```tsx
<button aria-label="Abrir menu de navegação">
  <MenuIcon />
</button>
```

<!-- End - Lucas: Adicionar requisitos e rodamap -->