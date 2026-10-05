# pieterwillekens.nl

Source for my personal website, [www.pieterwillekens.nl](https://www.pieterwillekens.nl): a small, terminal-styled site about me, my projects, my open source work, and the tools I use.

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), deployed to GitHub Pages.

## Pages

| Path            | What it shows                                                      |
| --------------- | ------------------------------------------------------------------ |
| `/`             | About me: work, homelab, technologies, and life outside of work    |
| `/projects/`    | Projects I've built or contributed to                              |
| `/open-source/` | Stats and a stream of my pull requests to repositories I don't own |
| `/uses/`        | Hardware, software, and tooling I use day to day                   |
| `/likes/`       | Technologies I like to work with                                   |

## Getting started

Requirements: [Bun](https://bun.sh) and Node.js 26. With [mise](https://mise.jdx.dev) installed, `mise install` sets both up from `mise.toml`.

```sh
bun install
bun run dev       # dev server at http://localhost:4321
```

| Command               | Action                                   |
| --------------------- | ---------------------------------------- |
| `bun run dev`         | Start the local dev server               |
| `bun run build`       | Build the production site to `dist/`     |
| `bun run preview`     | Preview the production build locally     |
| `bun run astro check` | Type-check `.astro` and TypeScript files |
| `bun oxlint`          | Lint with [oxlint](https://oxc.rs)       |
| `bun oxfmt`           | Format with oxfmt                        |

Formatting and linting also run on staged files through a [lefthook](https://github.com/evilmartians/lefthook) pre-commit hook.

### GitHub token

The `/open-source/` page fetches my pull requests from the GitHub search API at build time. Unauthenticated requests work but are rate-limited, so set a token if builds start failing:

```sh
GITHUB_TOKEN=ghp_... bun run build
```

A failed fetch fails the build on purpose, so a broken API call never ships an empty page.

## Project structure

```text
src/
├── components/        # Astro components (top bar, sections, cards, links, ...)
├── config/            # Routes, contact links, and shared content config
├── content/           # Site content (see below)
├── layouts/           # Base page layout
├── lib/               # Client-side scripts (typewriter effect)
├── pages/             # One file per route
├── styles/            # Global CSS / Tailwind entry
└── content.config.ts  # Content collection schemas and the pull request loader
public/                # Static files: favicons, manifest, robots.txt
```

## Editing content

Most content lives in `src/content/` and is validated by the schemas in `src/content.config.ts`. Every entry has an `order` field that controls its position on the page.

- **Home sections**: Markdown files in `src/content/home/`, with `command`, `title`, and `order` frontmatter.
- **Projects**: one Markdown file per project in `src/content/projects/`. The filename is the project name; frontmatter takes `url`, `order`, and an optional `install` command.
- **Uses and likes**: `src/content/uses.toml` and `src/content/likes.toml`. Each table is a category; items take an [Iconify](https://icon-sets.iconify.design) icon from the `lucide` or `simple-icons` sets.

## Deployment

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) type-checks and builds every pull request. Pushes to `master` are deployed to GitHub Pages, followed by a Cloudflare cache purge. A daily scheduled build keeps the pull request stream on `/open-source/` up to date.

Dependencies are kept current by Dependabot.
