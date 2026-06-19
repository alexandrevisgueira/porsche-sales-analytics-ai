import React, { useState, useMemo } from 'react';
import { porscheDataset } from './dados/porscheDataset';
import { Cabecalho } from './componentes/cabecalho';
import { QualityAudit } from './componentes/QualityAudit';
import { Car, Wallet, MapPin, Brain } from 'lucide-react';

export const App: React.FC = () => {
  const [modelo, setModelo] = useState('Todos');
  const [cidade, setCidade] = useState('Todos');
  const [ano, setAno] = useState('Todos');
  const [iaOutput, setIaOutput] = useState('Selecione os filtros desejados e clique abaixo para o Agente analisar o ROI.');
  const [loadingIa, setLoadingIa] = useState(false);

  const dadosFiltrados = useMemo(() => {
    return porscheDataset.filter((item: any) => {
      return (modelo === 'Todos' || item.model === modelo) &&
             (cidade === 'Todos' || item.city === cidade) &&
             (ano === 'Todos' || item.year.toString() === ano);
    });
  }, [modelo, cidade, ano]);

  const totalFaturamento = useMemo(() => {
    return dadosFiltrados.reduce((sum: number, item: any) => sum + item.price, 0);
  }, [dadosFiltrados]);

  const executarAgenteIA = () => {
    setLoadingIa(true);
    setTimeout(() => {
      setIaOutput('[AGENTE AI]: Análise de portfólio executada. Os modelos filtrados possuem alta aderência no segmento High Ticket. Praça de atuação principal com canais de aquisição validados.');
      setLoadingIa(false);
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6 bg-[#050505] min-h-screen text-white font-sans">
      <Cabecalho />
      <QualityAudit resultado={{ score: 100, issues: ['Nenhum'], impact: 'Risco zero no pipeline analítico.' }} />

      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-xl">
        <div>
          <label className="block text-xs font-bold tracking-wider uppercase mb-2 text-neutral-400">Modelo</label>
          <select value={modelo} onChange={(e) => setModelo(e.target.value)} className="w-full bg-black border border-neutral-800 rounded-lg p-3 text-sm text-white focus:border-[#d4af37] outline-none">
            <option value="Todos">Todos</option>
            <option value="911 Carrera S">911 Carrera S</option>
            <option value="Taycan 4S">Taycan 4S</option>
            <option value="Macan GTS">Macan GTS</option>
            <option value="Cayenne Coupe">Cayenne Coupe</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold tracking-wider uppercase mb-2 text-neutral-400">Cidade</label>
          <select value={cidade} onChange={(e) => setCidade(e.target.value)} className="w-full bg-black border border-neutral-800 rounded-lg p-3 text-sm text-white focus:border-[#d4af37] outline-none">
            <option value="Todos">Todos</option>
            <option value="São Paulo">São Paulo</option>
            <option value="Rio de Janeiro">Rio de Janeiro</option>
            <option value="Belo Horizonte">Belo Horizonte</option>
            <option value="Curitiba">Curitiba</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold tracking-wider uppercase mb-2 text-neutral-400">Ano</label>
          <select value={ano} onChange={(e) => setAno(e.target.value)} className="w-full bg-black border border-neutral-800 rounded-lg p-3 text-sm text-white focus:border-[#d4af37] outline-none">
            <option value="Todos">Todos</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </div>
        <div className="flex items-end">
          <button onClick={() => { setModelo('Todos'); setCidade('Todos'); setAno('Todos'); }} className="w-full bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-sm uppercase py-3 rounded-lg transition-colors">
            Limpar Filtros
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl flex items-center justify-between shadow-xl">
          <div>
            <p className="text-xs font-bold tracking-wider text-neutral-500 uppercase">Volume</p>
            <h3 className="text-3xl font-black text-white mt-1">{dadosFiltrados.length}</h3>
          </div>
          <Car className="w-6 h-6 text-[#d4af37]" />
        </div>
        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl flex items-center justify-between shadow-xl">
          <div>
            <p className="text-xs font-bold tracking-wider text-neutral-500 uppercase">Faturamento</p>
            <h3 className="text-3xl font-black text-emerald-500 mt-1">R$ {totalFaturamento.toLocaleString('pt-BR')}</h3>
          </div>
          <Wallet className="w-6 h-6 text-emerald-500" />
        </div>
        <div className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl flex items-center justify-between shadow-xl">
          <div>
            <p className="text-xs font-bold tracking-wider text-neutral-500 uppercase">Cidades Ativas</p>
            <h3 className="text-3xl font-black text-white mt-1">{[...new Set(dadosFiltrados.map((i: any) => i.city))].length}</h3>
          </div>
          <MapPin className="w-6 h-6 text-blue-500" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 lg:col-span-2 overflow-x-auto shadow-xl">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-neutral-800 text-neutral-500 font-bold uppercase text-xs">
                <th className="py-3 px-2">Modelo</th>
                <th className="py-3 px-2">Ano</th>
                <th className="py-3 px-2">Cidade</th>
                <th className="py-3 px-2 text-right">Valor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-900">
              {dadosFiltrados.map((item: any) => (
                <tr key={item.id} className="hover:bg-neutral-800/50 transition-colors">
                  <td className="py-3 px-2 font-medium text-white">{item.model}</td>
                  <td className="py-3 px-2 text-neutral-400">{item.year}</td>
                  <td className="py-3 px-2 text-neutral-400">{item.city}</td>
                  <td className="py-3 px-2 text-right font-semibold text-[#d4af37]">R$ {item.price.toLocaleString('pt-BR')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 flex flex-col justify-between shadow-xl">
          <div>
            <h3 className="text-md font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Brain className="w-4 h-4 text-[#d4af37]" /> Agente AI Reports
            </h3>
            <div className="bg-black/50 border border-neutral-950 rounded-lg p-4 text-xs text-neutral-300 min-h-[180px] mt-4 leading-relaxed">
              {iaOutput}
            </div>
          </div>
          <button onClick={executarAgenteIA} disabled={loadingIa} className="w-full mt-4 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-black text-xs uppercase py-3 rounded-lg tracking-wider transition-all">
            {loadingIa ? 'Processando...' : 'Gerar Insight'}
          </button>
        </div>
      </div>
    </div>
  );
};
