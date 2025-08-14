const sidebar_parent = document.querySelector('. page_article.op_view #immersion_content_main .row')
if (sidebar_parent) {
  
  // Figure 623
  const issue_id = document.querySelector('.article-page__meta a[href*="/issue/view/"]').match(/\/issue\/view\/(\d{4})$/)[1]

  // Social media

  // SDO

  const keywords_title = { 'es-ES': 'Palabras clave', 'en-US': 'Keywords', 'pt-BR': 'Palavras chave' }
  const sdo_titles = { 
    'es-ES': 'Objetivos de desarrollo sostenible',
    'en-US': 'Sustainable Development Goals',
    'pt-BR': 'Objetivos de Desenvolvimento Sustentável'
  }
  const citation_title = { 'es-ES': 'Citación', 'en-EN': 'Citation', 'pt-BR': 'Citação' }

  // Citation
 
  let article_authors = ''
  const article_authors = document.querySelectorAll('meta[name="citation-author"]')
    .reverse().forEach(tag => { article_authors = ', ' + tag.getAttribute('content') + article_authors })

  const firstpage = document.querySelector('citation_firstpage')
  const lastpage = document.querySelector('citation_lastpage')
  const pages = firstpage === lastpage ? firstpage : `${firstpage}-${lastpage}` 

  // Copyright

  const copyright_statement = document.querySelectorAll('meta[name="DC.Rights"]')[0] + '. ' + document.querySelectorAll('meta[name="DC.Rights"]')[1]

  sidebar_parent.insertAdjacentHTML('beforeend', `
    <section class="article-sidebar">
      <a class="col-md-3" href="https://revistas.udenar.edu.co/index.php/usalud/issue/view/623">
        <img src="https://revistas.udenar.edu.co/public/journals/5/cover_issue_${issue_id}_es_ES.jpg" class="img-fluid">
      </a>
      <figure id="article-cover" class="img-fluid">
        <img src="https://revistas.udenar.edu.co/public/journals/5/cover_issue__es_ES.jpg"/>
      </figure>

      <div id="share-article"></div>

      <div id="article-keywords">
        <h2 class="article-side__title">${keywords_title[lang]}</h2>
        <ul id="article-keywords-list"></ul>
      </div>

      <div id="sdo">
        <h2 class="article-side__title">${sdo_titles[lang]}</h2>
        <ul id="sdo_list"></ul>
      </div>

      <div id="article-citation">
        <h2 class="article-side__title">${citation_title[lang}</h2>
        <div>
          ${article_authors.slice(2)}. ${article_title}. Univ Salud [Internet]. ${article_year}; ${article_vol}(${article_iss}):${pages}. ${article_doi}
        </div>
        <button id="change-citation-format-btn">
        </button>
      </div>

      <div id="article-copyright">
        <img src="https://revistas.udenar.edu.co/public/site/images/mbeltran/imagen2.png" alt="Copyright statement" />
        ${copyright_statement}
      </div>
    </section>
  `)

  // Keywords
  const article_keywords = sidebar_parent.getElementById('article-keywords-list')
  const keywords_tag = document.querySelectorAll('meta[name="citation_keywords"]').forEach(keyword_tag => {
    const keyword = keyword_tag.getAttribute("content")
    article_keywords.insertAdjacentHTML('beforeend', `<li class="keyword">${keyword}</li>`)
  })

  // SDO
 
  const sdo_list_articles = new Map([
    ['6872', [2, 3]],
    ['7343', [2]],
    ['8569', [2]],
    ['7225', [2, 9]],
    ['7857', [2]],
    ['7435', [2]],
    ['8660', [2]]
  ])

  if (sdo_list_articles.has(article_id)) {
    const sdo = [
      ['Fin de la pobreza', 'No poverty', 'Fim da pobreza'],
      ['Hambre cero', 'Zero hunger', 'Fome zero'],
      ['Salud y bienestar', 'Good health and well-being', 'Saúde e bem-estar'],
      ['Educación de calidad', 'Quality education', 'Educação de qualidade'],
      ['Igualdad de género', 'Gender equality', 'Igualdade de gênero'],
      ['Agua limpia y saneamiento', 'Clean water and sanitation', 'Água limpa e saneamento'],
      ['Energía asequible y no contaminante', 'Affordable and clean energy', 'Energia acessível e limpa'],
      ['Trabajo decente y crecimiento económico', 'Decent work and economic growth', 'Trabalho decente e crescimento econômico'],
      ['Industria, innovación e infraestructura', 'Industry, innovation and infrastructure', 'Indústria, inovação e infraestrutura'],
      ['Reducción de las desigualdades', 'Reduced inequalities', 'Redução das desigualdades'],
      ['Ciudades y comunidades sostenibles', 'Sustainable cities and communities', 'Cidades e comunidades sustentáveis'],
      ['Producción y consumo responsables', 'Responsible consumption and production', 'Consumo e produção responsáveis'],
      ['Acción por el clima', 'Climate action', 'Ação contra a mudança global do clima'],
      ['Vida submarina', 'Life below water', 'Vida na água'],
      ['vida de ecosistemas terrestres', 'Life on land', 'Vida terrestre'],
      ['Paz, justicia e instituciones sólidas', 'Peace, justice and strong institutions', 'Paz, justiça e instituições eficazes'],
      ['Alianzas para lograr los objetivos', 'Partnerships for the goals', 'Parcerias e meios de implementação']
    ]

    const article_id = document.querySelector('meta[name="DC.Identifier"]').getAttribute("content")
    const lang_index = { 'es-ES': 0, 'en-US': 1, 'pt-BR': 2 }[lang]

    const sdo_list = document.getElementById('sdo_list')
    sdo_list_articles.get(article_id).forEach(objective_index =>
      sdo_list.insertAdjacentHTML('beforeend', `<li class="sdo">${sdo[objective_index][lang_index]}</li>`) 
    )
  }
}


// Separate keywords

// const list = document.querySelectorAll('.article-sidebar ul')[1] ?? document.querySelector('.article-sidebar ul');
// if (list) {
//   const items = list.querySelectorAll('li')
//   const count = items.length
//   const n = count % 3 === 0 ? 3 : 2
//
//   items.forEach((li, index) => {
//     if ((index + 1) % (count / n) === 0 && index !== count - 1)
//       li.classList.add('border-bottom')
//   })
// }

// Archive page

// if (window.location.href.endsWith('usalud/archive')) {
//   const parent = document.querySelector('.container.main__content')
//   parent.appendChild(parent.querySelector('.page'))
// }

// Copy to clipboard

// const copy_to_clipboard = () => {
//   var text = ''
//   var textarea = document.createElement('textarea')
//   textarea.value = text
//   document.body.appendChild(textarea)
//   textarea.select()
//   document.execCommand('copy')
//   document.body.removeChild(textarea)
// }


const fix_most_viewed_section = () => {
  const most_viewed = document.querySelector('.most-viewed')
  if (!most_viewed) throw new Error('Most viewed section not found')
  const section = document.createElement('section')
  section.id = 'most-viewed'
  document.getElementById('immersion_content_main').appendChild(section)
  // section.appendChild(most_viewed)
}

//
const add_navbar_icons = () => {
  document.getElementById('languageToggleMenulanguageNav')?.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-globe"></i>')

  document.querySelector('.pkp_navigation_user #dropdownMenuLink')?.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-user"></i>')
  document.querySelector('.nmi_type_user_register a')?.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-user-plus"></i>')
  document.querySelector('.nmi_type_user_login a')?.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-right-to-bracket"></i>')

  const list = document.querySelectorAll('.pkp_navigation_user .dropdown-menu .nav-link')
  list[0]?.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-table-columns"></i>')
  list[1]?.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-id-badge"></i>')
  list[2]?.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-right-from-bracket"></i>')

  document.querySelector('.nmi_type_current a')?.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-newspaper"></i>')
  document.querySelector('.nmi_type_archives a')?.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-box-archive"></i>')
  document.querySelector('.nmi_type_submissions a')?.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-file-import"></i>')
  document.querySelector('.nmi_type_announcements a')?.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-bullhorn"></i>')
  document.querySelector('.nmi_type_editorial_team a')?.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-people-group"></i>')
  document.querySelector('.nmi_type_custom a')?.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-indent"></i>')
  document.querySelector('.nmi_type_search a')?.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-magnifying-glass"></i>')

  document.querySelector('.nmi_type_about a')?.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-circle-info"></i>')
  const about_list = document.querySelectorAll('.nmi_type_about .nav-link')
  about_list[0]?.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-file-invoice"></i>')
  about_list[1]?.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-person-shelter"></i>')
  about_list[2]?.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-address-book"></i>')
  about_list[3]?.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-chart-line"></i>')
  about_list[4]?.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-photo-film"></i>')
  about_list[5]?.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-chart-diagram"></i>')
  about_list[6]?.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-user-check"></i>')
  about_list[7]?.insertAdjacentHTML('afterbegin', '<i class="fa-solid fa-bars"></i>')
}

const add_file_icons = () => {
  if(!document.querySelector('.page_index, .page_issue, .page_article')) return

  document.querySelectorAll('.article__btn').forEach(e => {
    const type = e.textContent.includes('PDF') ? 'pdf' :
      e.textContent.includes('HTML') ? 'code' :
      e.textContent.includes('VIDEO') ? 'video' :
      'lines'
    e.insertAdjacentHTML('afterbegin', `<i class='fa-solid fa-file-${type}'></i>`)
  })
const fix_most_viewed_section = () => {
  const most_viewed = document.querySelector('.most-viewed')
  if (!most_viewed)
    throw new Error('Most viewed section not found')

  most_viewed.classList.add('container')
  document.getElementById('immersion_content_main')?.insertAdjacentHTML(`<section id='most-viewed'></section>`)
  document.getElementById('most-viewed').appendChild(most_viewed)
};


const fix_current_issue_link = () =>
  select('.issue-desc a.col-md-2').href = 'https://revistas.udenar.edu.co/index.php/usalud/issue/view/623'

