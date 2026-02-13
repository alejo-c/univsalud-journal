// <script>
// CUSTOM HEADER ACTIONS 15/12/2025

const fix_favicon = () => {
  const link = document.getElementById('favicon')
  if (!link) return
  link.href = 'https://revistas.udenar.edu.co/public/journals/5/favicon_en_US.png'
}

const redirect_editorial_process = () => {
  if (!window.location.href.endsWith('editorialprocess'))
    return

  let l = 'n'
  if (document.documentElement.lang === 'es-ES')
    l = 's'
  window.location.href = `https://revistas.udenar.edu.co/public/site/images/alejo/proceso-editorial-e${l}.jpg`
}

// const anchor_section_at_reload = () => {
//   const hash = window.location.hash
//   if (!hash) return
//
//   const button = document.querySelector(`${hash} .accordion-button`)
//   if (!button) return
//   button.click()
// };

// Run and Debug

[fix_favicon, redirect_editorial_process].forEach(func => {
  try {
    func() 
  } catch (error) {
    // console.error(`Error at ${func.name}`, error.message)
  }
})

// </script>
