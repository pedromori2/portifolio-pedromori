# Portfólio — Pedro Hiroshigue Mori

Portfólio pessoal, somente frontend, construído com Next.js (App Router) + TypeScript + Tailwind CSS, exportado como site 100% estático (`output: "export"`). Bilíngue (PT/EN), com tema claro/escuro e navegação por âncoras.

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Outros comandos:

```bash
npm run build   # gera o site estático em out/
npm run lint    # ESLint
npm run format  # Prettier (escreve as correções)
```

## Como editar o conteúdo

Todo o texto do site fica separado dos componentes, em `src/content/`:

- `profile.ts` — nome, cargo, contatos, texto de posicionamento, "sobre" e os números de destaque.
- `experience.ts` — experiência profissional (timeline).
- `projects.ts` — projetos (Celebra, BR Instalações, Ricardo Team). Cada item tem `tagline`, `description`, `stack`, `links`, etc., sempre em `{ pt, en }`.
- `skills.ts` — grupos de habilidades.

Todo texto visível ao usuário é bilíngue: `{ pt: "...", en: "..." }`. Para editar, basta mudar os valores desses arquivos — não é necessário tocar nos componentes em `src/components/`.

As strings da interface (botões, rótulos de navegação etc.) ficam em `src/lib/i18n.ts`.

## Deploy

### Vercel

Importe o repositório no [Vercel](https://vercel.com/new) — a detecção de projeto Next.js é automática. Não é necessária nenhuma variável de ambiente (projeto sem backend).

### GitHub Pages

```bash
npm run build
```

Isso gera o site estático em `out/`. Publique essa pasta com qualquer action de deploy do GitHub Pages (ex.: `actions/upload-pages-artifact` apontando para `out`).

## Pendências / itens a confirmar

- **Ricardo Team (back-end):** o link do repositório (`github.com/pedromori2/ric-team-back`) foi inferido a partir do `artifactId` do `pom.xml` enviado — confirme se o nome e a visibilidade (público) estão corretos.
- **URL final do site:** `metadataBase` em `src/app/layout.tsx` e as URLs em `src/app/sitemap.ts` / `public/robots.txt` estão com um domínio placeholder (`https://portfolio-pedromori.vercel.app`). Atualize para o domínio real assim que o deploy for feito.
- **Favicon:** está usando o ícone padrão do Next.js. Pode ser substituído por um ícone próprio (ex. monograma "PM") em `src/app/favicon.ico`.
- **BR Instalações:** só o link do site foi incluído (os dois repositórios no GitHub não foram informados ainda).
