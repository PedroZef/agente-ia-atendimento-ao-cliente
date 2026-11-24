# Base de Conhecimento (RAG) — Banco Horizon

> **Camada 2 da Arquitetura:** Fonte factual estruturada em blocos semânticos limpos para busca vetorial (Retrieval-Augmented Generation). Pode ser atualizada de forma independente sem alterar o `PROMPT_SISTEMA.md`.

---

## Bloco 1: Mapa Oficial de Telas do Aplicativo (iOS e Android)

- **Consultar Fatura, Vencimento e Pagar (Pix / Código de Barras):**
  `Menu inicial > Cartões > Fatura Atual > Pagar Fatura`
- **Desbloquear Cartão Físico Novo:**
  `Menu inicial > Cartões > Meus Cartões > Selecionar cartão > Desbloquear`
- **Bloqueio Temporário Preventivo de Cartão:**
  `Menu inicial > Cartões > Meus Cartões > Selecionar cartão > Bloqueio Temporário`
- **Gerar ou Ativar Cartão Virtual Temporário:**
  `Menu inicial > Cartões > Cartão Virtual > Gerar/Ativar`
- **Consultar Limite Disponível e Solicitar Aumento:**
  `Menu inicial > Crédito > Meus Limites > Solicitar Aumento`

---

## Bloco 2: Glossário de Descritores e Intermediários na Fatura

Muitas compras aparecem na fatura com o nome da maquininha, gateway de pagamento ou razão social da empresa, em vez do nome comercial da loja:

| Prefixo / Descritor na Fatura | Intermediário / Origem Provável | Exemplos Comuns |
| :--- | :--- | :--- |
| `PAG*` ou `PG *` | PagBank / PagSeguro | Comércio local, feiras, prestadores de serviço e lojas online |
| `MP*` ou `MERCPAGO*` | Mercado Pago | Compras no Mercado Livre, maquininhas Point ou lojas parceiras |
| `EC*` ou `EBN*` | EBANX / Intermediador internacional | Assinaturas digitais, jogos e compras internacionais em reais |
| `SQ*` ou `SUMUP*` | SumUp / Maquininhas móveis | Restaurantes, profissionais autônomos e pequenos negócios |
| `IFD*` | iFood | Pedidos de delivery de comida, mercado ou farmácia |
| `UBER*` / `99APP*` | Mobilidade urbana | Corridas de aplicativo ou entregas rápidas |
| `AMZN*` / `AMAZON*` | Amazon Brasil / Prime | Compras no site ou assinatura Amazon Prime |
| `GOOGLE*` / `APPLE.COM/BILL` | Lojas de aplicativos | Assinaturas de apps, armazenamento em nuvem ou compras in-app |
| `STONE*` / `TON*` | Stone / Ton | Pagamentos realizados em maquininhas da rede Stone |

**Regra de Triagem de 1 Turno:** Antes de encaminhar para contestação humana, explique ao cliente o significado do prefixo acima e peça para confirmar se ele reconhece o valor e a data. Caso continue não reconhecendo, acione o transbordo humano imediatamente.

---

## Bloco 3: Políticas de Fatura e Pagamento

- **Formas de pagamento no app:** Código Pix Copia e Cola (compensação rápida do limite conforme processamento bancário) e código de barras (boleto bancário).
- **Sigilo de valores:** O assistente virtual não visualiza o saldo da fatura, o valor exato a pagar nem a data individual de vencimento dentro do chat. O cliente deve consultar diretamente em `Menu inicial > Cartões > Fatura Atual > Pagar Fatura`.
- **Proibição de invenção:** Não informar percentuais de juros, multas ou prazos fixos de compensação caso não constem na tela do aplicativo do cliente.

---

## Bloco 4: Políticas de Cartão Físico e Cartão Virtual

- **Desbloqueio do cartão físico:** Realizado exclusivamente pelo titular autenticado no app em `Menu inicial > Cartões > Meus Cartões > Selecionar cartão > Desbloquear`, usando validação biométrica ou senha do app no próprio fluxo seguro (nunca informada no chat).
- **Cartão virtual temporário:** Recomendado para compras online pontuais. Pode ser gerado ou ativado em `Menu inicial > Cartões > Cartão Virtual > Gerar/Ativar`.
- **Perda, roubo ou suspeita de clonagem:** Orientar o **Bloqueio Temporário** imediato em `Menu inicial > Cartões > Meus Cartões` e realizar transbordo imediato para a equipe de Segurança Nível 2 com resumo do ocorrido.

---

## Bloco 5: Limite de Crédito e Solicitação de Aumento

- **Consulta de limite:** Disponível com sigilo garantido em `Menu inicial > Crédito > Meus Limites`.
- **Pedido de aumento:** Deve ser submetido pelo próprio cliente em `Menu inicial > Crédito > Meus Limites > Solicitar Aumento`, sujeito à análise de crédito do Banco Horizon.
- **Limites do assistente:** O agente não tem permissão para aprovar aumento de limite, informar o limite atual do cliente nem prometer prazo ou resultado da análise.

---
Desenvolvido por **Pedro Zeferino da Silva - 2026**
