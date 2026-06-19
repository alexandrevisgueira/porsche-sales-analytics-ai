import os
import json
import warnings
import pandas as pd
import google.generativeai as genai
from dotenv import load_dotenv

# Silencia avisos de depreciação do SDK
warnings.filterwarnings("ignore", category=FutureWarning)

def orquestrar_agente_dados():
    # 1. Carregamento Seguro
    load_dotenv()
    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        raise ValueError("ERRO: GEMINI_API_KEY não encontrada no .env")
    
    genai.configure(api_key=api_key)

    # 2. Pipeline ETL (Extração)
    print("[1/3] Lendo base de dados...")
    caminho_planilha = "base_porsche.xlsx"
    df = pd.read_excel(caminho_planilha)
    
    faturamento_total = df['SalesPriceSanitized'].sum()
    volume_vendas = len(df)

    # 3. Processamento Cognitivo (Agente IA - Modelo 3.5 Flash)
    print("[2/3] Conectando ao Google AI Studio (Modelo 3.5)...")
    modelo = genai.GenerativeModel('models/gemini-3.5-flash')
    
    prompt = f"""
    Atue como um Mentor de Elite em Growth e Vendas da Porsche.
    Temos {volume_vendas} vendas validadas, gerando um faturamento total de R$ {faturamento_total:,.2f}.
    Baseado na sua inteligência de mercado, gere um insight de 2 linhas para o Diretor comercial, focado em LTV e expansão High Ticket.
    """
    
    resposta = modelo.generate_content(prompt)
    insight = resposta.text.strip()

    # 4. Entrega (Load para o Dashboard React)
    print("[3/3] Exportando inteligência para o Dashboard...")
    caminho_saida = "src/dados/aiReport.json"
    os.makedirs(os.path.dirname(caminho_saida), exist_ok=True)
    
    with open(caminho_saida, 'w', encoding='utf-8') as f:
        json.dump({"insight_ia": insight}, f, ensure_ascii=False, indent=4)

    print("\n✓ [SUCESSO] Operação finalizada. O Dashboard está atualizado!")

if __name__ == "__main__":
    orquestrar_agente_dados()