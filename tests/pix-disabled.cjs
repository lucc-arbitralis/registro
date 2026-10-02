const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const html = fs.readFileSync(new URL('../index.html', `file://${__filename}`), 'utf8');
const script = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]).join('\n');
new vm.Script(script);
function fn(name) {
  const start = script.indexOf(`function ${name}(`);
  assert(start >= 0);
  const end = script.indexOf('\n}', start) + 2;
  return script.slice(start, end);
}
(async () => {
  const context = vm.createContext({ PIX_ATIVO: false, rodando: false, COBRANCA: null,
    executar: () => 'consulta-direta', mostraPagamento: () => { throw Error('Pagamento aberto'); } });
  vm.runInContext('async ' + fn('rodar'), context);
  assert.equal(await context.rodar(), 'consulta-direta');
  vm.runInContext('async ' + fn('geraCobranca'), context);
  assert.equal(await context.geraCobranca(), undefined);
  vm.runInContext(fn('avisaPagamento') + '\n' + fn('avisaPix'), context);
  context.avisaPagamento(); context.avisaPix();
  assert.match(html, /data-etapa="2" hidden/);
  assert.match(script, /if\(PIX_ATIVO && guardado\)/);
  console.log('PASS: consulta direta, cobrança bloqueada, avisos PIX suspensos e retomada preservada.');
})().catch(error => { console.error(error); process.exitCode = 1; });
