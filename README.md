# Select to Copy

Minimal Chrome/Edge extension (Manifest V3): any text you select is copied to the
system clipboard immediately — no Ctrl+C.

## Install (unpacked)

1. `chrome://extensions` → enable **Developer mode**
2. **Load unpacked** → pick this folder
3. Reload any already-open tabs (content scripts only inject on load)

Firefox: same files work via `about:debugging` → **Load Temporary Add-on** → `manifest.json`.

## Notes

- Uses `navigator.clipboard.writeText` on secure pages, falls back to a hidden
  textarea + `execCommand('copy')` on plain `http://`.
- Skips repeat writes of identical text.
- Does not run on `chrome://` pages, the Chrome Web Store, or other tabs the
  browser blocks extensions from.
