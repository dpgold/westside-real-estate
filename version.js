// ── THE app version. One number, one place. ─────────────────────────────────
//
// Bump the string below on every user-facing change. Every <span class="ver">
// on the page follows it, so a badge can no longer drift from the release the
// way two hand-maintained copies did — Ops shipped v7.25.1 against v1.0.1, and
// Homewood carried the same literal in two places waiting to do the same.
//
// It is ALSO how the version is read from outside the app, without signing in:
//
//   curl -s <site>/version.js
//
// Four of these sites are gated, so that check is the only way to see what is
// actually deployed without a logged-in browser. Keep this file public, keep it
// out of any auth rule, and keep it uncached — a cached copy would report a
// stale number, which is worse than reporting none.
window.SITE_VERSION = 'v1.2';

// Fill every <span class="ver">. Pages ship the span empty. Code that rebuilds a
// header after load should call window.paintVersion() again, or interpolate
// window.SITE_VERSION directly, rather than hardcoding the number a second time.
(function () {
  function paint() {
    var v = window.SITE_VERSION;
    var spans = document.querySelectorAll('.ver');
    for (var i = 0; i < spans.length; i++) spans[i].textContent = v;
  }
  window.paintVersion = paint;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', paint);
  } else {
    paint();
  }
})();
