<!-- Histats.com  (div with counter) -->
<!-- Histats.com  START  (aync)-->
//<script type="text/javascript">var _Hasync= _Hasync|| [];
//_Hasync.push(['Histats.start', '1,1906522,4,237,241,20,00011111']);
//_Hasync.push(['Histats.fasi', '1']);
//_Hasync.push(['Histats.track_hits', '']);
// (function() {
// var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
// hs.src = ('//s10.histats.com/js15_as.js');
// (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
// })();</script>
// <noscript><a href="/" target="_blank"><img  src="//sstatic1.histats.com/0.gif?1906522&101" alt="contadores web" border="0"></a></noscript>

<!-- Global site tag (gtag.js) - Google Analytics -->
//<script async src="https://www.googletagmanager.com/gtag/js?id=G-WMSV7RJ594"></script>
//<script>
//  window.dataLayer = window.dataLayer || [];
//  function gtag(){dataLayer.push(arguments);}
//  gtag('js', new Date());
//  gtag('config', 'G-WMSV7RJ594');
// </script>
// <!-- fin Global site tag (gtag.js) - Google Analytics -->
// <!-- Histats.com  END  -->
// <!-- Custom header actions 14/01/2025 -->
//
//<script>

// CUSTOM HEADER ACTIONS 19/03/2025

const fix_favicon = () => {
  const link = document.getElementById('favicon')// || document.createElement('link')
  // link.id = 'favicon'
  // link.rel = 'icon'
  // link.type = 'image/x-icon'
  link.href = 'https://revistas.udenar.edu.co/public/journals/5/favicon_en_US.png'
  // document.head.appendChild(link)
}

const redirect_editorial_process = () => {
  if (window.location.href.endsWith('editorialprocess'))
    return

  let l = 'n'
  if (document.documentElement.lang === 'es-ES')
    l = 's'
  window.location.href = `https://revistas.udenar.edu.co/public/site/images/alejo/proceso-editorial-e${l}.jpg`
}

const anchor_section_at_reload = () => {
  const hash = window.location.hash
  if (!hash) throw new Error('Window hash not found')

  document.querySelector(`${hash} .accordion-button`).click()
};

// Run and Debug

[fix_favicon, redirect_editorial_process, anchor_section_at_reload].forEach(func => {
  try {
    func() 
  } catch (error) {
    // console.error(`Error at ${func.name}`, error.message)
  }
})

//</script>
