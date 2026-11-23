# Diagnóstico e Proposta de Melhorias da Apresentação

> **Origem Analisada:** Deck do Gemini Canvas (`https://share.gemini.google/x6xbDsLcnR6z`)  
> **Tema:** Agente de Atendimento Bancário — Banco Horizon S.A.  
> **Autor da Versão Original:** Pedro Zeferino da Silva  com Dio. (2026)  
> **Especialidade:** UX/UI Design, Storytelling Corporativo & CX Bancário

---

## 1. Visão Geral da Apresentação Compartilhada

A apresentação compartilhada no Gemini Canvas contém **7 slides** focados no Agente de Atendimento ao Cliente do Banco Horizon, cobrindo canais, regras de conduta, salvaguardas regulatórias, transbordo e roadmap.

A estrutura conceitual é sólida e alinhada às regras do setor financeiro. No entanto, foram identificadas **oportunidades críticas de melhoria** em 4 eixos:
1. **Hierarquia Semântica e Visual (Design & Layout);**
2. **Profundidade Técnica e Regulatória (Bacen & LGPD);**
3. **Fluxo e Storytelling de Transbordo (Arquitetura de Atendimento);**
4. **Acabamento do Encerramento e Apresentação Executiva.**

---

## 2. Diagnóstico Slide a Slide & Onde Adicionar Melhorias

### 📌 Slide 1 — Capa (Banco Horizon S.A. · Chat Mobile)
* **Conteúdo Atual:** Eyebrow, H1 ("Agente de Atendimento Bancário"), Subtítulo e 4 cartões com os pilares (Fatura/Pix, Lançamentos, Cartões, Limite).
* **Diagnóstico & Melhorias Recomendadas:**
  - **Falta de Indicadores de Impacto (KPIs):** Adicionar badges ou métricas-chave visíveis de largada (ex: `+85% Resolução no Primeiro Contato (FCR)` e `100% Conformidade Bacen`).
  - **Refinamento de Design:** Aplicar estética fintech moderna (estilo Revolut/Stripe) com microgradientes e tipografia com contraste balanceado, evitando a aparência de template padrão de IA.

---

### 📌 Slide 2 — Regras de Comunicação e Formato
* **Conteúdo Atual:** 3 blocos numerados (Comunicação Direta, Máximo 5 Linhas, Passo a Passo) e imagem lateral de smartphone.
* **Problema Estrutural Detectado:** O slide **não possui título principal (H1/H2)** no DOM, iniciando abruptamente nos números `01`, `02`, `03`.
* **Diagnóstico & Melhorias Recomendadas:**
  - **Inserir Título e Subtítulo Estruturados:** `Diretrizes de Comunicação & UX Conversacional` | *Otimização para telas mobile e redução de fricção cognitiva*.
  - **Comparativo Visual Prático:** Adicionar um card interativo ou visual de *"Antes vs Depois"* ou *"O que o Agente Faz vs O que o Agente Nunca Faz"*, evidenciando o porquê do limite de 5 linhas.
  - **Identidade da Imagem:** Trocar imagens genéricas por mockups funcionais de interface de chat com a mensagem real do agente.

---

### 📌 Slide 3 — Compliance Bacen & LGPD (Matriz de Salvaguardas)
* **Conteúdo Atual:** 3 cartões (Zero Engenharia Social, Zero Alucinação, Transparência Ativa) e a frase de ouro.
* **Diagnóstico & Melhorias Recomendadas:**
  - **Citação das Normas Oficiais:** Adicionar menção expressa à **Resolução CMN/Bacen nº 4.949/2021** (regras de relacionamento e clareza com clientes bancários) e aos artigos de segurança da **Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018)**.
  - **Tabela de Mitigação de Risco:** Apresentar como cada salvaguarda protege o banco contra fraudes de engenharia social (phishing/vishing) e contra passivos regulatórios perante o Procon e o Banco Central.

---

### 📌 Slide 4 — Protocolo de Transbordo Humano
* **Conteúdo Atual:** Imagem de atendente de call center, lista de 4 gatilhos (Fraude, Cartão, Compra Desconhecida, Cancelamento) e callout de transferência sem atrito.
* **Diagnóstico & Melhorias Recomendadas:**
  - **Substituir Lista Estática por Diagrama de Fluxo (Flowchart):**  
    `Cliente reporta suspeita` ➔ `Detecção de Gatilho por IA` ➔ `Bloqueio Preventivo Ofertado` ➔ `Resumo Estruturado ao Especialista N2` ➔ `Atendimento Humano sem Repetição`.
  - **Destaque do Princípio CX "Zero Repetição":** O maior valor para o cliente em crise é não ter que repetir os dados do golpe para o atendente humano.

---

### 📌 Slide 5 — Homologação: 3 Testes de Estresse
* **Conteúdo Atual:** Tabela simples com 3 linhas (Teste 1 · Escopo, Teste 2 · Sigilo, Teste 3 · Fraude).
* **Diagnóstico & Melhorias Recomendadas:**
  - **Evidenciar as Perguntas Avaliativas do Desafio:** Incorporar os critérios de validação das capturas de tela (Ex.: *"O agente inventou número com cara de verdade? NÃO"*, *"Encaminhou para humano? SIM"*, *"Manteve até 5 linhas? SIM"*).
  - **Dashboard de Métricas / Gráfico:** Incluir um gráfico ou gauge de 100% de aderência nos testes cegos de estresse, conferindo peso de homologação técnica ao slide.

---

### 📌 Slide 6 — Roadmap de Evolução ("O Banco Fora do Banco")
* **Conteúdo Atual:** 5 itens sequenciais (Atalhos, Ações Seguras, IA Contextual, Omnicanal, Controle Total).
* **Diagnóstico & Melhorias Recomendadas:**
  - **Estruturação por Horizontes Temporais (Framework H1/H2/H3 da McKinsey):**
    * *Horizonte 1 (Agora):* Agente Orientativo e Triagem Segura no App.
    * *Horizonte 2 (Próximo):* Assistente Transacional com Open Finance e API Banking (Pix biométrico nativo).
    * *Horizonte 3 (Futuro):* Agente Proativo Omnicanal com IA Preditiva antifraude.

---

### 📌 Slide 7 — Image Sources (Slide Problemático do Canvas)
* **Conteúdo Atual:** O Gemini Canvas gerou automaticamente um slide cru com links de websites de terceiros e fotos de banco de imagem (incluindo marca d'água da iStockphoto), sem rodapé e sem fechamento.
* **Diagnóstico & Melhorias Recomendadas:**
  - **Substituição Total:** Transformar este slide em uma tela de **Conclusão Executiva & Próximos Passos (Closing Slide)** com resumo do valor de negócio, call-to-action (CTA), contatos corporativos e créditos profissionais integrados.

---

## 3. Resumo das Melhorias Implementadas na Nova Apresentação

| Elemento | Na Versão Gemini Canvas | Na Nova Apresentação Interativa |
| :--- | :--- | :--- |
| **Formato** | Iframe estático / visualizador do Google | Slides HTML5 autônomos, responsivos e interativos |
| **Navegação** | Apenas clique em setas básicas | Teclado (`←`/`→`, `Espaço`, `Home`/`End`, `F` para fullscreen), botões táteis e barra de progresso |
| **Gráficos** | Nenhum (apenas tabelas estáticas) | Gráfico interativo Chart.js de aderência e tempo de atendimento |
| **Design System** | Tema padrão de canvas | Design System Fintech Premium (Aeonik/Inter, paleta escura, pills, microbordas e contrastes WCAG AAA) |
| **Slide 2** | Sem título principal (quebra de hierarquia) | Título semântico H2, badges e comparativo de UX |
| **Slide 4** | Lista de texto simples | Fluxograma interativo de transbordo humano |
| **Slide 7** | Links de fontes de imagem não formatados | Slide executivo de Conclusão, Resultados e Próximos Passos |
