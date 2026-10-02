# Arbitralis Registral — interface recuperada

Interface recuperada do deployment público https://arbitralis-registral.vercel.app/ em 2026-10-02. O arquivo index.html conserva o HTML, CSS e JavaScript recebidos, sem alterações.

## Limitações

Esta recuperação não contém o backend original. A interface depende de POST /api/cobranca, /api/pedido, /api/ler e /api/chat. Essas rotas existem no deployment atual, mas seus fontes não estão publicamente disponíveis. O ping não financeiro de /api/cobranca retorna HTTP 401 sem código de acesso. Remover o bloqueio da interface sozinho não libera o servidor.

Não substituir o deployment de produção por esta recuperação parcial: isso removeria as APIs existentes. Recuperar o backend ou reconstruir suas integrações de pagamento, consulta registral e assistente antes de publicar.

## Inspeção local

Execute `python -m http.server 8000` nesta pasta para inspecionar a interface. As chamadas de API não funcionarão nesse servidor estático. A interface também carrega fontes do Google Fonts e qrcodejs do cdnjs.
