### 1. Tema - Loja do Mayk

  Um website para promover e exibir os produtos vendidos pela loja de Mayk

### 2. Escopo

  * O site será desenvolvido com uma temática pixel, remetendo aos jogos clássicos. Mayk é fã dos personagens Mario Bros e Sonic. Trazer elementos relacionados a esses personagens.
  * As cores de design devem ser vibrantes, inspiradas nos jogos do Mario. O site deve permitir a escolha entre modo claro e escuro.
  * O site contará com um banner inicial que exibirá alguns dos principais itens disponíveis na loja de Mayk, como consoles Xbox, PCs e jogos diversos. Esses itens serão escolhidos de acordo com as preferências e disponibilidade de estoque da loja.
  * O site deverá ter uma seção com imagens e frases de jogos para deixar o site mais bonito e atraente.
  * A seção de comentários deve ser terceirizada para algum sistema externo, como o Disqus.
  * A seção de comentários deve permitir que um comentário seja enviado diretamente ao e-mail do Mayk.
  * Compras baseadas em pix com backend manual. Notificar o Mayk via e-mail sobre os dados da compra para o mesmo então checar com o seu banco o pagamento e fazer o envio (caso produto físico).
  * Foco no front-end,  com apenas alguns dados de estoque mocados para teste que podem ser trocados por uma chamada de API ao banco de dados eventualmente, a qual não será feita aqui.

### 3. Restrições

  * O sistema será desenvolvido utilizando tecnologias web open-source.
  * O sistema será desenvolvido utilizando html/css/JavaScript e frameworks de componentes reutilizáveis.
  
### 4. Protótipo

  Prototipagem ainda não iniciada (27/06)

### 5. Recursos

Para enviar e-mail sem backend-
1. https://www.emailjs.com/ 

Figma-
1. https://www.figma.com/@rocketseat
2. https://www.figma.com/community/file/1471120839033505457/nlw-connect-devstage
3. https://www.figma.com/community/file/1471119935944492720/nlw-connect-devstage
4. https://www.figma.com/community/file/1469664201049887575/sistema-de-reembolso-2-0
5. https://www.figma.com/community/file/1448070647757721748/nlw-pocket-mobile-nearby
6. https://www.figma.com/community/file/1438870666697133195/clickmail
7. https://www.figma.com/community/file/1422965214657616410/lista-de-compras-desktop
8. https://www.figma.com/community/file/1405890943950015706/gestao-de-marketplace
9. https://www.figma.com/community/file/1402302237126862071/ama-ask-me-anything
10. https://www.figma.com/community/file/1397279978314668489/lista-de-compras
11. https://www.figma.com/community/file/1371886246180677672/lp-de-produto
12. https://www.figma.com/community/tag/rocketseat
13. https://www.figma.com/community/tag/rocketseat/files
14. https://www.figma.com/community/file/1313455989218460480/rocketseat-ui


### 6. Instalacão e Configuração do projeto

 - 1. Fazer a instalação do git   - [https://git-scm.com/downloads]
 - 2. configurar o git: 
        ``` bash 
        git config --global user.name "Seu Nome"
        git config --global user.email "seuemail@exemplo.com"
        ```

 - 3. clonar o repositorio:
        ``` bash 
        git clone https://github.com/KretliJ/Loja_do_Mayk.git
        ```

 - 4. Intallar o node - [https://nodejs.org/en/download]

 - 5. Intalar as dependencias e Executar o projeto: 
        ``` bash 
        npm i 
        npm run dev
        ```

  
<!-- Begin - Lucas: Adicionar requisitos e rodamap -->
### 7. Requisitos não Funcionais

Veja [Requisitos não Funcionais](./docs/requisitos_nao_funcionais.md).

### 8. Rodamap

- Adaptar os componentes existentes para seguir o novo sistema de temas da aplicação (modo claro/escuro, variáveis CSS, novo sistema de cores).

- Criar um componente **ImagemCarrossel** genérico:
  - Deve aceitar `props` de `Card[]` para gerar um carrossel de imagens.
  - Deve funcionar tanto em **toque (mobile)** quanto com **mouse (desktop)**.

- Criar um componente **SliderBar**:
  - Usado para navegação manual do carrossel em telas maiores (desktop).
  - Deve ser incorporado pelo ImagemCarrossel para permitir o deslizar suave usando mouse.

- Adicionar uma **seção de comentários** acima do `footer`, usando o sistema **Disqus** para embutir os comentários.

- Criar um componente **PopUpMenu**:
  - Ao clicar em uma imagem de produto, exibe os **detalhes**, **preço** e um **QR code PIX** para pagamento.

- Desenvolver uma **lib de simulação de API**:
  - Dados mockados dos produtos.
  - Será usada pelos componentes `Carrossel` e `PopUpMenu` para priorixar a listagem de items em estoque e para detalhes do popup de pagamento.

- No `PopUpMenu`, integrar chamada para essa lib:
  - Quando o cliente confirmar a compra, a lib **envia uma notificação por e-mail** para o endereço do **Mayke** com os dados da compra (produto, valor, horário).

- Gerar documentação do sistema inteiro e salvar em `/docs`, componentes, libs e api se houver. Pode ser instalado sistema de geração de documentação automático via hints como Storybook e TypeDocs


- Gerar documentação do sistema inteiro e salvar em `/docs`, incluindo:
  - Componentes visuais com **Storybook**
  - Funções, tipos e classes com **Typedoc**
  - `Storybook` para componentes React (baseado em props e estados)
  - `Typedoc` para código TypeScript puro (baseado em JSDoc + types)

<!-- End - Lucas: Adicionar requisitos e rodamap -->