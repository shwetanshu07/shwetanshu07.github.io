// extracted from original single-file HTML
// Theme toggle and a few small client interactions used across pages

(function () {
  // Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
      localStorage.setItem('theme', isDark ? 'light' : 'dark');
    });
  }

  // Update year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Client-side search & tag filtering for article lists (for UX parity with original)
  // This code will search within .card elements inside any .grid on the page.
  function attachSearchHandlers() {
    const searchInput = document.getElementById('search');
    if (!searchInput) return;
    const grid = document.querySelector('.grid');
    if (!grid) return;
    const cards = Array.from(grid.querySelectorAll('.card'));
    const tagButtons = Array.from(document.querySelectorAll('.tag[data-tag]'));

    function applyFilters() {
      const q = searchInput.value.trim().toLowerCase();
      const activeTagBtn = tagButtons.find(b => b.classList.contains('active'));
      const activeTag = activeTagBtn ? activeTagBtn.dataset.tag : 'all';
      cards.forEach(card => {
        const title = (card.querySelector('h3') && card.querySelector('h3').textContent) || '';
        const excerpt = (card.querySelector('p') && card.querySelector('p').textContent) || '';
        const meta = (card.querySelector('.meta') && card.querySelector('.meta').textContent) || '';
        const matchesQuery = !q || title.toLowerCase().includes(q) || excerpt.toLowerCase().includes(q) || meta.toLowerCase().includes(q);
        const matchesTag = activeTag === 'all' || meta.toLowerCase().includes('#' + activeTag);
        card.style.display = (matchesQuery && matchesTag) ? '' : 'none';
      });
    }

    searchInput.addEventListener('input', applyFilters);
    tagButtons.forEach(btn => btn.addEventListener('click', (ev) => {
      tagButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilters();
    }));
  }

  // Run on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachSearchHandlers);
  } else {
    attachSearchHandlers();
  }
})();
