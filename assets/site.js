(() => {
  const button = document.getElementById('language');
  const items = [...document.querySelectorAll('[data-zh]')];
  const originals = new Map(items.map(item => [item, item.innerHTML]));
  let language = 'en';
  function setLanguage(next) {
    language = next === 'zh' ? 'zh' : 'en';
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    for (const item of items) {
      if (language === 'zh') item.textContent = item.dataset.zh;
      else item.innerHTML = originals.get(item);
    }
    button.textContent = language === 'zh' ? 'English' : '中文';
    button.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换到中文');
    document.title = language === 'zh' ? '史代璟' : 'Daijing Shi';
    try { localStorage.setItem('daijing-language', language); } catch (_) {}
  }
  button.hidden = false;
  button.addEventListener('click', () => setLanguage(language === 'en' ? 'zh' : 'en'));
  try { if (localStorage.getItem('daijing-language') === 'zh') setLanguage('zh'); } catch (_) {}
})();
