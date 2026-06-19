# Criando uma Dashboard da Porsche com Agentes de IA

Este projeto foi desenvolvido como parte da formação prática em **Engenharia de Dados e IA**, demonstrando a aplicação de Agentes Inteligentes para a análise estratégica de dados comerciais.

## 🚀 Sobre o Projeto
O objetivo central foi criar um **Agente de IA** capaz de processar dados brutos de vendas da Porsche, realizar cálculos de performance e gerar insights automáticos de alta qualidade (High Ticket). O sistema automatiza a ponte entre dados brutos e a tomada de decisão gerencial.

## 🛠️ Tecnologias Utilizadas
- **Pipeline de Dados:** Python (Pandas para ETL)
- **Inteligência Artificial:** API do Google Gemini (Modelo `gemini-3.5-flash`)
- **Front-end:** React, TypeScript & Vite
- **Segurança:** Gestão de ambiente via `.env` e Blindagem de Dados

## 📊 Arquitetura do Agente
O fluxo de execução segue um padrão de **Growth Engineering**:
1. **Extração:** Leitura da base sanitizada (`base_porsche.xlsx`).
2. **Transformação:** Cálculo vetorial de Faturamento (R$) e Volume de Vendas.
3. **Inferência Cognitiva:** O Agente IA interpreta o cenário e gera um insight comercial estratégico.
4. **Load:** Exportação do relatório para `src/dados/aiReport.json`, consumido em tempo real pelo Dashboard.



## ⚙️ Como Rodar o Projeto
1. Clone o repositório.
2. Instale as dependências: `npm install` e `pip install pandas google-generativeai python-dotenv`.
3. Configure o arquivo `.env` na raiz com sua chave: `GEMINI_API_KEY=sua_chave_aqui`.
4. Processe os dados: `python agente_porsche.py`.
5. Inicie o Dashboard: `npm run dev`.

---

Nota: Este projeto foi desenvolvido para fins estritamente educacionais como parte do desafio técnico da plataforma DIO. As marcas e dados mencionados são utilizados para fins de simulação de cenário de negócio e análise de engenharia de dados.

*Projeto entregue para o desafio DIO - Desenvolvido por Alexandre Ferreira Visgueira.*