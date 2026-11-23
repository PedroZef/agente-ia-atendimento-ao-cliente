# 🏦 Agente de IA para Atendimento ao Cliente Bancário

> **Projeto:** Engenharia de Prompt Especializada em Atendimento Bancário / Fintech  
> **Papel:** Expert em Atendimento ao Cliente e CX Bancário  
> **Base Metodológica:** Desafio Criativo de Prompting (`docs/`)  
> **Repositório GitHub:** [https://github.com/PedroZef/agente-ia-atendimento-ao-cliente.git](https://github.com/PedroZef/agente-ia-atendimento-ao-cliente.git)  
> **Apresentação no Gemini Canvas:** [https://share.gemini.google/x6xbDsLcnR6z](https://share.gemini.google/x6xbDsLcnR6z)  
> **Padrão de Design & Linguagem:** Inspirado em Design Systems Fintech de Alta Confiabilidade (*Revolut / Stripe UI Principles*)

---

## 📌 Visão Geral do Projeto

Este repositório contém a modelagem completa, passo a passo, do Prompt de Sistema para um **Agente de Atendimento ao Cliente de Instituição Financeira / Banco Digital (Banco Horizon)**.

O projeto foi construído seguindo rigorosamente as diretrizes e modelos estabelecidos nas imagens de referência arquivadas em [`docs/`](file:///c:/Users/zefpe/Documents/agente-ia-atendimento-ao-cliente/docs), integrando:
1. **Regras de Negócio e CX Financeiro:** Foco em resolução no primeiro contato (FCR) e objetividade em canais mobile.
2. **Compliance e Segurança Bancária:** Respeito integral à LGPD, diretrizes do Banco Central do Brasil (Bacen) para canais de atendimento, sigilo bancário e tolerância zero a alucinação de dados críticos.
3. **Protocolo de Transbordo Humano Inteligente:** Regras de saída (off-ramp) para fraudes e contestações sem atrito de repetição de informações.

---

## 🧩 Navegação Passo a Passo dos Documentos

| Etapa | Arquivo Detalhado | Conteúdo Central |
| :--- | :--- | :--- |
| **Passo 1** | [passo-1-definicao-agente.md](file:///c:/Users/zefpe/Documents/agente-ia-atendimento-ao-cliente/docs/passo-1-definicao-agente.md) | Papel do Agente, público-alvo (cliente em mobilidade com pressa), pedidos comuns do escopo bancário e objetivo de atendimento. |
| **Passo 2** | [passo-2-regras-e-conduta.md](file:///c:/Users/zefpe/Documents/agente-ia-atendimento-ao-cliente/docs/passo-2-regras-e-conduta.md) | Tom e formato (até 5 linhas, listas numeradas), políticas rígidas de não solicitação de dados sensíveis, proibição de alucinação e gatilhos de transbordo humano. |
| **Passo 3** | [passo-3-prompt-final-e-testes.md](file:///c:/Users/zefpe/Documents/agente-ia-atendimento-ao-cliente/docs/passo-3-prompt-final-e-testes.md) | Prompt unificado, execução de 3 testes práticos em casos difíceis, respostas às perguntas avaliativas e refinamento. |
| **Diagnóstico** | [analise-melhorias-slides.md](file:///c:/Users/zefpe/Documents/agente-ia-atendimento-ao-cliente/docs/analise-melhorias-slides.md) | Análise crítica do deck compartilhado no Gemini Canvas, diagnóstico slide a slide e plano de evolução de CX. |
| **Apresentação** | [slides/index.html](file:///c:/Users/zefpe/Documents/agente-ia-atendimento-ao-cliente/slides/index.html) | Apresentação executiva e técnica interativa em HTML5/CSS/JS (16:9, Chart.js, atalhos de teclado e tema fintech). |
| **Prompt Pronto** | [PROMPT_SISTEMA.md](file:///c:/Users/zefpe/Documents/agente-ia-atendimento-ao-cliente/PROMPT_SISTEMA.md) | Prompt pronto para implantação e homologação em LLMs (GPT-4, Claude, Gemini, etc.). |

---

## 🚀 Prompt Final Consolidado

```text
Você é um Agente de atendimento ao cliente do Banco Horizon, atuando no chat do aplicativo mobile seguro.

Quem fala com você: pessoa física titular de conta ou cartão, acessando pelo celular, frequentemente com pressa ou dúvida urgente sobre movimentações financeiras, que já explorou o app e busca uma solução rápida sem burocracia.

Os pedidos que você resolve são:
- Orientar como consultar o valor da fatura, data de vencimento e como emitir o código Pix ou código de barras para pagamento;
- Explicar dúvidas sobre identificação de lançamentos e nomes fantasia de estabelecimentos na fatura;
- Instruir o passo a passo seguro para desbloquear um cartão novo ou ativar o cartão virtual temporário no app;
- Indicar onde consultar o limite de crédito disponível e orientar o envio de solicitação de aumento pela aba de crédito do app.

Seu objetivo em cada conversa é solucionar a solicitação do cliente logo na primeira mensagem de forma precisa, cordial e objetiva, sem solicitar dados que o cliente já forneceu ou que ferem o sigilo bancário.

Tom e formato:
- Fale de forma direta, cordial e segura, sem gírias ou jargões bancários herméticos, e use no máximo 5 linhas por resposta.
- Quando a solução tiver mais de uma etapa, responda em lista numerada clara e sequencial.
- Encerre sua resposta verificando se a orientação foi compreendida ou se o cliente precisa de mais algum apoio, em uma linha só.

Regras que você sempre segue:
- Nunca peça senha da conta, código token recebido por SMS/WhatsApp, código de segurança (CVV) ou número completo de cartão.
- Se não tiver a informação solicitada, declare expressamente que não tem acesso a dados confidenciais na conversa e indique a tela exata do aplicativo onde o cliente visualiza com segurança.
- Nunca invente valores de taxas, limites de crédito, prazos de estorno ou números fictícios de protocolo de atendimento.

Encaminhe para atendimento humano quando:
- O cliente relatar suspeita de fraude, clonagem, roubo/perda de cartão ou golpe financeiro;
- O cliente solicitar contestação de compra que não reconhece, cancelamento de conta ou contestação de decisão formal do banco.

Ao encaminhar, explique em uma frase o motivo da transferência e informe o resumo do que já foi registrado no atendimento para evitar repetições.
```

---

## 🧪 Resumo dos Testes em Casos Difíceis

Conforme estipulado no Passo 3 das referências:

1. **Caso Comum (Desbloqueio de Cartão):**  
   Fornece os 3 passos exatos pelo menu nativo do app, com encerramento em linha única, sem pedir senhas no chat.
2. **Caso Sem Acesso ao Dado (Consulta de Fatura em Tempo Real):**  
   Admite com transparência a falta de acesso a valores confidenciais no chat de IA e direciona o cliente para o menu `Cartões > Fatura Atual`, eliminando risco de alucinação de valores ou códigos de barra.
3. **Caso de Transbordo Humano (Cobrança Desconhecida / Suspeita de Fraude):**  
   Aciona imediatamente a transferência para a equipe de Segurança e Fraudes com resumo contextual prévio e orienta ação preventiva de bloqueio pelo app.

---

## 🖥️ Apresentação Interativa de Slides

A apresentação executiva e técnica está disponível tanto localmente quanto na nuvem:
- **Versão Interativa Offline (HTML5/Chart.js):** [`slides/index.html`](file:///c:/Users/zefpe/Documents/agente-ia-atendimento-ao-cliente/slides/index.html)
  - **Navegação por Teclado:** Setas `[←]` e `[→]`, barra de espaço, ou `[Home]` / `[End]`.
  - **Modo Tela Cheia:** Pressione `[F]` ou use o botão na barra inferior.
  - **Gráficos Interativos:** Visualização radar com Chart.js de conformidade e métricas de homologação.
  - **Visualização Rápida:** Basta abrir o arquivo `slides/index.html` em qualquer navegador (Chrome, Edge, Firefox, Safari).
- **Versão Online no Google Gemini Canvas:** [https://share.gemini.google/x6xbDsLcnR6z](https://share.gemini.google/x6xbDsLcnR6z)
- **Diagnóstico e Melhorias da Apresentação:** [`docs/analise-melhorias-slides.md`](file:///c:/Users/zefpe/Documents/agente-ia-atendimento-ao-cliente/docs/analise-melhorias-slides.md)

---

## 🛡️ Salvaguardas Regulatórias e de Segurança

- **Lei Geral de Proteção de Dados (LGPD):** Nenhum dado pessoal sensível (senhas, CVV, tokens OTP) é coletado pelo agente conversacional.
- **Resolução Bacen / CMN nº 4.949/2021:** Princípios de clareza, transparência, tempestividade e combate a fraudes plenamente incorporados nas instruções e no transbordo imediato.
- **Princípio "Zero Alucinação":** A proibição expressa de inventar protocolos e números protege a credibilidade institucional e evita passivos jurídicos.

---

## 📜 Histórico de Commits Locais

Todas as alterações foram estruturadas em commits atômicos locais (sem `git push`):
- `docs: registrar capturas de tela com requisitos do desafio de agente de IA`
- `feat(prompt): implementar Passo 1 - Definicao de papel, publico e escopo do agente bancario`
- `feat(prompt): implementar Passo 2 - Regras de conduta, tom de voz, compliance bancario e transbordo`
- `feat(prompt): implementar Passo 3 - Unificacao do prompt do sistema, bateria de testes dificeis e homologacao`
- `docs: consolidar README com guia executivo e arquitetura do agente bancario`
- `feat(slides): criar apresentacao interativa em HTML5 e relatorio de melhorias do deck`
- `docs: adicionar links do Gemini Canvas e repositorio GitHub no README`
- `refactor(slides): modularizar CSS em style.css e JS em slides.js`
- `docs: atualizar footer com assinatura Pedro Zeferino da Silva com Dio`

---

<p align="center"><strong>@2026 - Pedro Zeferino da Silva  com Dio.</strong></p>
