---
name: git-revisao-ia
description: Aplicar a regra geral de Git de Henrique e da Arbitralis antes de revisar ou mergear qualquer PR, em qualquer repositorio. Exigir skill e ferramenta de revisao pela IA em uso, sem obrigar Claude Code ou fornecedor especifico, preservando checks e protecoes locais.
---

# Regra geral de Git — revisao por IA

Decisao de Henrique em 21/10/2026: a IA que estiver trabalhando pode conduzir
a revisao antes do merge, seja Codex, Claude Code ou outra. Nao exigir troca
de fornecedor, modelo ou CLI exclusivamente para satisfazer a revisao.

Se ja tiver sido acionado como revisor, ler as regras e analisar diretamente
o diff e o contexto. Devolver achados, veredito e limitacoes ao executor;
nao delegar outra revisao nem publicar ou mergear. O fluxo abaixo e do executor.

1. Ler `AGENTS.md`, o guia de revisao e as skills locais aplicaveis. Identificar
   a branch de destino, o diff integral e o SHA exato a revisar. Consultar
   checks/protecoes e o mecanismo de merge reais; nao assumir nomes de jobs,
   labels ou formatos de evidencia copiados de outro repositorio.
2. Conferir PRs, branches concorrentes e reservas acessiveis. Registrar
   sobreposicoes e limitacoes; preservar trabalho alheio.
3. Carregar esta skill (e a skill local de revisao, quando existir) e acionar
   explicitamente a ferramenta de revisao do ambiente sobre o diff final.
   Se nao houver ferramenta dedicada, acionar um subagente revisor em contexto
   separado, com o diff, as regras e a skill. Usar a IA disponivel sem fixar
   fornecedor. Ferramenta de publicar comentario, lint ou CI nao e revisao por IA.
4. Revisar correcao, seguranca, regressao, duplicacao e coerencia com o projeto.
   Resolver achados bloqueantes e revisar novamente as correcoes. Se a
   ferramenta falhar ou nao devolver resultado, registrar bloqueio e nao
   mergear. Ler a skill sem executar a revisao nao cumpre a regra.
5. Registrar IA/revisor conhecido, skill, ferramenta, identificador da chamada
   ou comando executado, base/SHA revisado, achados, veredito e limitacoes.
   Usar o formato exigido pelo repo; se nao houver, registrar no PR ou em
   `.reviews/`. Nao inventar modelo, independencia ou testes executados.
   Codigo novo depois da revisao exige nova revisao e evidencia atualizada.
6. Antes de abrir um PR cujo workflow arma merge na abertura, concluir revisao
   e evidencia, para nao haver merge antecipado. Nos demais, seguir o fluxo
   local. Conferir todos os checks exigidos no head atual antes de mergear;
   nao remover protecoes, dispensar testes ou criar identidades de aprovacao.
7. Usar o mecanismo de merge existente, com SHA esperado quando suportado.
   Confirmar merge e commit de destino. Nao confundir PR aberto, label ou
   auto-merge armado com integracao concluida. Registrar bloqueios com causa
   e proxima acao, sem afirmar que a regra ja esta na branch principal.

A regra padroniza o revisor; nao altera permissoes, autorizacoes de deploy,
custos, acesso a dados ou os controles tecnicos de cada projeto. Um workflow
Claude existente pode continuar como ferramenta opcional; sua ausencia nao
obriga trocar de IA. Exigencia de revisao humana ou check protegido continua
valendo, salvo alteracao explicita autorizada pelo usuario.

Git nao tem configuracao nativa para escolher a IA revisora. Esta e uma regra
de trabalho dos agentes: nao instalar hooks globais nem alterar core.hooksPath
para aplica-la. A instalacao da skill nao comprova que todos os ambientes a
carregam; declarar o escopo efetivamente atualizado.
