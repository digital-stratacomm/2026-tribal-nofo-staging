# Awardees Map (build-free)

Served by GitHub Pages: Settings > Pages > branch `master` (or `main`), folder `/docs`.
No build step. Edit a file, commit, and Pages republishes in about a minute.

## Updating data
Edit the Google Sheet (tab name must match `sheetTab` in js/config.js). Changes show on next page load.

## Changing columns, filters, popups, keys
Everything lives in `js/config.js`:
- tableColumns: table columns, in order (must match sheet headers exactly)
- filters: sidebar filters; type "dropdown" or "checkboxes"
- popupTitle / popupSubtitle: what shows when a marker is clicked
- linkColumn / linkedColumn: optional links
Add new sheet columns BEFORE referencing them in config.js.
