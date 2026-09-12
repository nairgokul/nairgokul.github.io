# Resource pages

All resource pages live in this folder:

- `index.html`: the Resources list.
- `ai-tools.html`: the original AI tools and guidance.
- `chatgpt-privacy.html`: the ChatGPT privacy page, ready to fill in.

Shared styling and scripts live in `../assets/`. Routine content updates for tools, pricing, office hours, and events are made in `../assets/site-content.js`.

## Adding a resource page

1. Copy `chatgpt-privacy.html` to a descriptive filename in this folder, such as `research-workflows.html`.
2. Update its title, description, heading, and `data-page` value. Replace the introduction and bullets with the new content. Keep the shared header, footer, and “All resources” link.
3. Copy a `list-item` link in this folder's `index.html`, then update its `href`, title, and description.

Keep resource links relative to this folder. Shared assets use `../assets/`; Home and Events use `../index.html` and `../events.html`. No script changes are needed for a new page unless it needs content rendered by JavaScript.

The parent `resources.html` file redirects old bookmarks to this folder's index.
