# Instrucoes para agentes

## Regra geral de Git — revisao por IA (21/10/2026)

Antes de qualquer merge, a IA em uso deve carregar e seguir
[git-revisao-ia](.agents/skills/git-revisao-ia/SKILL.md) e acionar explicitamente
sua ferramenta de revisao, ou um subagente revisor em contexto separado.
Codex, Claude Code e outras IAs sao aceitas; nao se exige fornecedor, modelo
ou CLI especifico para a revisao. Esta decisao substitui restricoes anteriores
sobre qual IA deve revisar, inclusive para subagentes revisores.

Registrar execucao, skill, ferramenta, SHA revisado, achados e veredito no
formato local (ou no PR, se nao houver formato). Resolver bloqueantes e
revisar codigo novo. Sem execucao/resultado de revisao, nao mergear. Preservar
checks, protecoes, regras de seguranca e autorizacoes do projeto. CI verde ou
comentario sem revisao executada nao substitui esse processo.

