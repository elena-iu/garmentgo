(function(){
  // Skripte innerhalb eines Containers ausführen (z. B. nach dynamischem Einfügen)
  function executeScripts(container){
    if (!container) return;
    container.querySelectorAll('script').forEach(function(oldScript){
      var s = document.createElement('script');
      if (oldScript.textContent) s.textContent = oldScript.textContent;
      Array.from(oldScript.attributes || []).forEach(function(attr){ s.setAttribute(attr.name, attr.value); });
      document.body.appendChild(s);
    });
  }

  // Header laden und eingebettete Skripte ausführen
  window.loadHeader = function(){
    fetch('/components/header.html')
      .then(function(response){ return response.text(); })
      .then(function(html){
        var container = document.getElementById('header-placeholder');
        if (!container) return;
        container.innerHTML = html;
        executeScripts(container);
      });
  };

  // Footer laden und eingebettete Skripte ausführen
  window.loadFooter = function(){
    fetch('/components/footer.html')
      .then(function(response){ return response.text(); })
      .then(function(html){
        var container = document.getElementById('footer-placeholder');
        if (!container) return;
        container.innerHTML = html;
        executeScripts(container);
      });
  };

  // Beim Seitenladen Header und Footer initialisieren (fehlertolerant)
  document.addEventListener('DOMContentLoaded', function(){
    try { window.loadHeader(); } catch(e) {}
    try { window.loadFooter(); } catch(e) {}
  });
})();


