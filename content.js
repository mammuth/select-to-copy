(() => {
  'use strict';

  let last = '';

  function copy(text) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).catch(() => legacyCopy(text));
    } else {
      legacyCopy(text);
    }
  }

  // Fallback for http:// pages, where the async clipboard API is unavailable.
  function legacyCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:fixed;top:-9999px;opacity:0';
    document.body.appendChild(ta);
    const selection = document.getSelection();
    const previous = selection.rangeCount ? selection.getRangeAt(0) : null;
    ta.select();
    document.execCommand('copy');
    ta.remove();
    if (previous) {
      selection.removeAllRanges();
      selection.addRange(previous);
    }
  }

  function handleSelection() {
    const text = (document.getSelection()?.toString() ?? '').trim();
    if (!text || text === last) return;
    last = text;
    copy(text);
  }

  // mouseup covers dragging, keyup covers shift+arrow / ctrl+a,
  // dblclick covers word selection. Both fire after the selection settles.
  document.addEventListener('mouseup', handleSelection, true);
  document.addEventListener('dblclick', handleSelection, true);
  document.addEventListener('keyup', (e) => {
    const selectAll = (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'a';
    if (e.key === 'Shift' || e.shiftKey || selectAll) handleSelection();
  }, true);
})();
