# Análise Técnica Full Stack — Repositório Banco Horizon (v1.0 → v2.0)

## 1. Diagnóstico do Estado Inicial (v1.0)
A auditoria do repositório original identificou 5 oportunidades de evolução estrutural e técnica:

1. **Conflito de regras no Prompt v1.0:** A exigência simultânea de máximo de 5 linhas, lista numerada e frase final de encerramento quebrava a legibilidade em telas mobile.
2. **Acoplamento entre regras e dados factuais:** Ausência de uma Base de Conhecimento (RAG) separada e falta de um Mapa Oficial de Telas, elevando o risco de alucinação de menus.
3. **Lacunas de segurança e triagem:** Falta de blindagem explícita contra *prompt injection*, ausência de triagem de 1 turno para nomes fantasia e falta de orientação de bloqueio temporário preventivo durante o transbordo por roubo/fraude.
4. **Higiene e versionamento do repositório:** Mistura de artefatos da v1.0 (`passo-1`, `passo-2`, `passo-3` e pasta `slides/` antiga) com a evolução v2.0, além da ausência de `.gitignore`.
5. **Ausência de demonstração executável:** Repositório composto apenas por documentação estática, sem uma aplicação web navegável para validar o agente e os testes de estresse ao vivo.

---

## 2. Soluções Implementadas na v2.0

- **Arquitetura em 2 Camadas:** Separação clara entre `PROMPT_SISTEMA.md` (Camada 1 — Governança e Tom) e `base-conhecimento/base-conhecimento-banco-horizon.md` (Camada 2 — RAG).
- **QA Expandido:** Evolução de 3 para **6 testes críticos de estresse (T1 a T6)** documentados em `docs/guia-implantacao-e-testes-v2.md`.
- **Simulador Web Full-Stack (`index.html`):** Interface mobile do Banco Horizon com motor RAG local, monitor de guardrails em tempo real, executor automático de T1–T6 e suporte opcional à API do Gemini.
- **Apresentação Executiva Unificada (`apresentacao/`):** Sincronizada em dois formatos — PowerPoint (`banco-horizon-agente-ia-v2.pptx`) e web interativa (`slides.html`) pronta para GitHub Pages.
- **Preservação de Histórico (`historico-v1/`):** Todos os artefatos originais do MVP e a versão antiga dos slides preservados sem perda de rastreabilidade.

---
Desenvolvido por **Pedro Zeferino da Silva - 2026**
