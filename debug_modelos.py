import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Força a listagem de todos os modelos disponíveis para a sua chave
try:
    models = [m for m in genai.list_models()]
    print("MODELOS DISPONÍVEIS NA SUA CONTA:")
    for m in models:
        print(f"Nome: {m.name} | Métodos: {m.supported_generation_methods}")
except Exception as e:
    print(f"Erro ao listar modelos: {e}")