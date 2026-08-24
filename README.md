# Select to Copy

Chrome extension that copies any text you select to the
system clipboard — no Ctrl+C.

Just like you're used to with tmux et al.

Manifest v3.

**Goal:** Easy to trust
- Any such extension requires read access on all your tabs. That's dangerous
- -> It's kept as minimal as possible so it's still reviewable.

## Install (unpacked)

1. `chrome://extensions` → enable **Developer mode**
2. **Load unpacked** → pick this folder
3. Reload any already-open tabs (content scripts only inject on load)

Firefox: same files work via `about:debugging` → **Load Temporary Add-on** → `manifest.json`.
