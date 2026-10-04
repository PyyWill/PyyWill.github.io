// Visitor count in the footer. GoatCounter records each page view (no cookies; visitor locations are in its
// dashboard), and its public counter gives the site's total, which is shown as plain footer text. The site code is
// read from the page's GoatCounter tag. If the count can't be fetched (offline, blocked, or public counts not
// enabled in GoatCounter's settings), the footer simply goes without it.
(() => {
  const tag = document.querySelector('script[data-goatcounter]');
  const slot = document.querySelector('.visits');
  if (!tag || !slot) return;
  fetch(tag.dataset.goatcounter.replace(/\/count$/, '/counter/TOTAL.json'))
    .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
    .then(({ count }) => {
      if (!count || count === '0') return;  // nothing counted yet (the total is cached for up to four hours)
      slot.querySelector('.visits-count').textContent = `${count} ${count === '1' ? 'visitor' : 'visitors'}`;
      slot.hidden = false;
    })
    .catch(() => {});
})();
