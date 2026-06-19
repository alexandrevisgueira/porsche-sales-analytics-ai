import React from 'react';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

export const QualityAudit: React.FC<{ resultado: any }> = ({ resultado }) => {
  return (
    <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-5 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-sm font-bold tracking-wider uppercase text-white flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-500" /> ETAPA 1 — AUDITORIA DOS DADOS
        </h4>
        <span className="text-xs font-mono px-2 py-1 bg-emerald-950 text-emerald-400 rounded border border-emerald-800">
          Score: {resultado.score}%
        </span>
      </div>
      <div className="space-y-2 text-xs text-neutral-400">
        <p><span className="text-white font-semibold">Problemas:</span> {resultado.issues.join(', ')}</p>
        <p className="flex items-center gap-1 text-amber-500">
          <AlertTriangle className="w-3 h-3" /> <span className="font-semibold">Impacto:</span> {resultado.impact}
        </p>
      </div>
    </div>
  );
};
