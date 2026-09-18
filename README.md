# supreetbhat.github.io

My portfolio and build log. A plain Jekyll site with no theme gem and no build step, so
GitHub Pages compiles it on push and there is nothing to break between writing and publishing.

## Structure

| Path | What it is |
|------|------------|
| `index.html` | The portfolio page: intro, experience, projects, education, skills, contact |
| `blog.html` | The build log index, served at `/blog/` |
| `_posts/` | One Markdown file per post. This is the only folder you touch to publish |
| `_layouts/` | `default.html` wraps every page, `post.html` adds the post header and prev/next links |
| `assets/style.css` | The whole stylesheet. Colors are tokens on `:root` with a dark mode block |
| `_config.yml` | Site title, URL, social handles, permalink shape |

## Writing a post

Create a file in `_posts/` named `YYYY-MM-DD-some-slug.md`:

```markdown
---
layout: post
title: "What I worked on today"
description: "One sentence for the index page and for link previews."
tags: [agentic-ai]
---

Write in Markdown. Code fences, images and links all work.
```

`description` is optional. Without it the index falls back to the first paragraph.

Commit and push, and the post is live in about a minute:

```bash
git add . && git commit -m "Post: what I worked on today" && git push
```

> [!TIP]
> Dating a file in the future keeps it unpublished until that date arrives, so you can write
> several posts in one sitting and let them appear one per day.

## Local preview

Optional. The site builds fine on GitHub without this.

```bash
bundle install
bundle exec jekyll serve --livereload
```

Then open <http://localhost:4000>.

## Deploying

The repo must be named `supreetbhat.github.io` to serve from the root domain. Push it, then
go to Settings, Pages, and set the source to deploy from the `main` branch. GitHub builds
Jekyll natively, so no Actions workflow is needed.

For a custom domain later, add a `CNAME` file containing the domain and point a DNS record at
GitHub Pages.
