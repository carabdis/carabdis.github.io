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
    button.innerHTML = language === 'zh' ? 'EN <span aria-hidden="true">↗</span>' : '中文 <span aria-hidden="true">↗</span>';
    button.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换到中文');
    document.title = language === 'zh' ? '史代璟 | 架构与数据流设计' : 'Daijing Shi | Architecture & Dataflow';
    try { localStorage.setItem('daijing-language', language); } catch (_) {}
  }
  button.hidden = false;
  button.addEventListener('click', () => setLanguage(language === 'en' ? 'zh' : 'en'));
  try { if (localStorage.getItem('daijing-language') === 'zh') setLanguage('zh'); } catch (_) {}
  document.getElementById('year').textContent = new Date().getFullYear();
})();

