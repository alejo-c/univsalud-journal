//<script>

// CUSTOM ACTIONS AFTER PAGE LOAD 19/03/2025

const fix_favicon = () => {
  const link = document.getElementById('favicon')// || document.createElement('link')
  // link.id = 'favicon'
  // link.rel = 'icon'
  // link.type = 'image/x-icon'
  link.href = 'https://revistas.udenar.edu.co/public/journals/5/favicon_es_ES'
  // document.head.appendChild(link)
};

// Run and Debug

[fix_favicon].forEach(func => {
  try {
    func() 
  } catch (error) {
    // console.error(`Error at ${func.name}`, error.message)
  }
})

//</script>
