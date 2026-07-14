# Criando uma Dashboard da Porsche com Agentes de IA

Este projeto foi desenvolvido como parte da formação prática em **Engenharia de Dados e IA**, aplicando um agente de IA para análise de dados comerciais simulados.

## 🚀 Sobre o Projeto

O objetivo central foi criar um agente que processa dados brutos de vendas (simulados), calcula métricas de performance e gera um insight comercial automático a partir desses dados. O sistema conecta a etapa de processamento de dados à geração de um relatório interpretativo, consumido por um dashboard.

## 🛠️ Tecnologias Utilizadas

- **Pipeline de Dados:** Python (Pandas para ETL)
- **Inteligência Artificial:** API do Google Gemini (modelo `gemini-3.5-flash`)
- **Front-end:** React, TypeScript & Vite
- **Segurança:** gestão de variáveis sensíveis via `.env`

## 📊 Arquitetura do Agente

Fluxo do pipeline:

1. **Extração:** leitura da base de dados sanitizada (`base_porsche.xlsx`).
2. **Transformação:** cálculo de faturamento (R$) e volume de vendas.
3. **Geração de insight:** o agente recebe os dados processados e retorna um resumo comercial interpretativo via API do Gemini.
4. **Carga:** exportação do relatório para `src/dados/aiReport.json`, consumido pelo dashboard.

## ⚙️ Como Rodar o Projeto

1. Clone o repositório.
2. Instale as dependências: `npm install` e `pip install pandas google-generativeai python-dotenv`.
3. Configure o arquivo `.env` na raiz com sua chave: `GEMINI_API_KEY=sua_chave_aqui`.
4. Processe os dados: `python agente_porsche.py`.
5. Inicie o Dashboard: `npm run dev`.

---

Nota: Este projeto foi desenvolvido para fins estritamente educacionais como parte do desafio técnico da plataforma DIO. As marcas e dados mencionados são utilizados para fins de simulação de cenário de negócio e análise de engenharia de dados.

*Projeto entregue para o desafio DIO - Desenvolvido por Alexandre Ferreira Visgueira.*
