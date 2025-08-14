//<link rel="stylesheet" href="https://revistas.udenar.edu.co/public/journals/5/styleSheet.css?d=2025-04-10+16%3A21%3A48" type="text/css">

<!-- Histats.com  START  (aync)-->
//<script type="text/javascript">
var _Hasync= _Hasync|| [];
_Hasync.push(['Histats.start', '1,1906522,4,237,241,20,00011111']);
_Hasync.push(['Histats.fasi', '1']);
_Hasync.push(['Histats.track_hits', '']);
(function() {
var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
hs.src = ('//s10.histats.com/js15_as.js');
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
})();</script>
//<noscript><a href="/" target="_blank"><img  src="//sstatic1.histats.com/0.gif?1906522&101" alt="contadores web" border="0"></a></noscript>
<!-- Histats.com END -->

<!-- Global site tag (gtag.js) - Google Analytics START -->
//<script async src="https://www.googletagmanager.com/gtag/js?id=G-WMSV7RJ594"></script>
//<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-WMSV7RJ594');
//</script>
<!-- Global site tag (gtag.js) - Google Analytics END -->

// CUSTOM ACTIONS AFTER PAGE LOAD 14/08/2025
//<script src="https://kit.fontawesome.com/d2a7dc6d91.js" crossorigin="anonymous"></script>

//<script>
const get_localized_option = (es_option, en_option, pt_option) => ({
  'es-ES': es_option,
  'en-US': en_option,
  'pt-BR': pt_option
}[document.documentElement.lang])

const get_meta_content = name => select(`meta[name="${name}"]`).getAttribute('content')

const insert_icon = (element, icon) =>
  element?.insertAdjacentHTML('afterbegin',  `<i class='fa-solid fa-${icon}'></i>`)

const get_by_id = id => document.getElementById(id)
const select = query => document.querySelector(query)
const select_all = query => document.querySelectorAll(query)


const add_main_bar_icons = () => {
  insert_icon(get_by_id('languageToggleMenulanguageNav'), 'globe')
  insert_icon(select('.pkp_navigation_user #dropdownMenuLink'), 'user')
  insert_icon(select('.nmi_type_user_register a'), 'user-plus')
  insert_icon(select('.nmi_type_user_login a'), 'right-to-bracket')

  const user_list = select_all('.pkp_navigation_user .dropdown-menu .nav-link')
  insert_icon(user_list[0], 'table-columns')
  insert_icon(user_list[1], 'id-badge')
  insert_icon(user_list[2], 'right-from-bracket')
}

const add_navbar_icons = () => {
  insert_icon(select('.nmi_type_current a'), 'newspaper')
  insert_icon(select('.nmi_type_archives a'), 'box-archive')
  insert_icon(select('.nmi_type_submissions a'), 'file-import')
  insert_icon(select('.nmi_type_announcements a'), 'bullhorn')
  insert_icon(select('.nmi_type_editorial_team a'), 'people-group')
  insert_icon(select('.nmi_type_search a'), 'magnifying-glass')
  insert_icon(select('.nmi_type_about a'), 'circle-info')

  const custom_list = select_all('.nmi_type_custom a')
  insert_icon(custom_list[0], 'person-shelter')
  insert_icon(custom_list[1], 'indent')

  const about_list = select_all('.nmi_type_about .nav-link')
  insert_icon(about_list[0], 'file-invoice')
  insert_icon(about_list[1], 'address-book')
  insert_icon(about_list[2], 'chart-line')
  insert_icon(about_list[3], 'photo-film')
  insert_icon(about_list[4], 'chart-diagram')
  insert_icon(about_list[5], 'user-check')
  insert_icon(about_list[6], 'bars')
}

const add_file_icons = () => {
  if(!select('.page_index, .page_issue, .page_article'))
    return

  select_all('.article__btn').forEach(e => {
    const type = e.classList.contains('pdf') ? 'pdf' :
      e.textContent.includes('HTML') ? 'code' :
      e.textContent.includes('VIDEO') ? 'video' :
      'lines'
    e.insertAdjacentHTML('afterbegin', `<i class='fa-solid fa-file-${type}'></i>`)
  })
}

const create_make_submission_button = () => {
  const submission_btn = `<a class='btn btn-primary'
    href='https://revistas.udenar.edu.co/index.php/usalud/about/submissions'>
      ${get_localized_option('Enviar un artículo', 'Submit an article', 'Enviar um artigo')}
  </a>`

  select('.journal-description .btn')?.parentElement.insertAdjacentHTML('beforeend', submission_btn)
  select('.article-sidebar')?.insertAdjacentHTML('afterbegin', submission_btn)
}

const show_english_article_titles = () => {
  const article_titles = new Map([
    ['7050', 'Musculoskeletal disorders in university professors who telework due to COVID-19 pandemic'],
    ['7144', 'Continuing education for forensic medical analysis of the constitutional appeals in Costa Rica'],
    ['7338', 'Monitoring of food handlers and their influence on the preparation of ready-to-eat foods'],
    ['7361', 'Factors associated with the stigma-discrimination complex towards healthcare workers among university students during the coronavirus pandemic in Mexico'],
    ['7381', 'Social stigmas towards people living with HIV in the Sars-CoV-2 vaccination process'],
    ['7444', 'Exercise dosing considerations in times of COVID-19 pandemic: A review'],
    ['7573', 'Spatio-temporal distribution of Dengue, Zika and Chikungunya in Cali, Colombia: 2014-2016'],
    ['7601', 'Sars-CoV-2 infection rate in employees of a medium and high complexity hospital'],
    ['7763', 'Criminality rates in those sentenced for femicide in Mexico'],
    ['7982', 'Iron deficiency and child psychomotor development in a rural region of Chota, Peru, 2022'],
    ['8003', 'Senses and meanings of primary health care academic visions in nursing'],
    ['8022', 'Physical dependence in older adults and job burnout in their informal caregivers in the COVID-19 context, a correlational study'],
    ['8536', 'Geospatial approach to study the food environment according to the DASH diet guidelines, an Argentinian experience'],
    ['8569', 'Return to work, family functionality, and social support in women who experienced pregnancy after age 35 in Antioquia, Colombia'],
    ['8404', 'Evaluation of dentistry professors before and during the COVID-19 pandemic'],
    ['8601', 'Timelines associated with the neonatal jaundice care cycle and assessment of caregiver satisfaction'],
  ])

  // For links to article view page

  select_all('a[href*="/article/view/"]:not(.return)').forEach(anchor => {
    const article_id = anchor.getAttribute('href').match(/\/article\/view\/(\d{4})$/)?.[1]
    if (article_id && article_titles.has(article_id))
      anchor.innerText = article_titles.get(article_id)
  })

  // For article view page

  const article_id = get_meta_content('DC.Identifier')
  if (!article_id)
    throw new Error('Article page id not found')
  if (!article_titles.has(article_id))
    throw new Error('Article not in english')

  const title_span = select('h1.article-page__title span')
  title_span.innerText = article_titles.get(article_id)
}

const add_article_page_info = () => {
  const article_id = get_meta_content('DC.Identifier')
  if (!article_id)
    throw new Error('Article page id not found')

  // Insert SDOs

  const sdo_list_articles = new Map([
    ['6872', [2, 3]],
    ['7343', [2]],
    ['8569', [2]],
    ['7225', [2, 9]],
    ['7857', [2]],
    ['7435', [2]],
    ['8660', [2]],

    ['8404', [2, 3]],
    ['8705', [4, 9]],
    ['8601', [2]],
    ['8757', [2]],
    ['8267', [2, 3]],
  ])

  if (sdo_list_articles.has(article_id)) {
    const sdos = [
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

    select('.article-sidebar figure')?.insertAdjacentHTML('afterend', `<div id='sdo'>
      <h2 class='article-side__title'>
        ${get_localized_option(
          'Objetivos de desarrollo sostenible',
          'Sustainable development goals',
          'Objetivos de desenvolvimento sustentável'
        )}
      </h2>
      <ul id='sdo_list'></ul>
    </div>`)

    const sdo_list = get_by_id('sdo_list')
    sdo_list_articles.get(article_id).forEach(objective_index =>
      sdo_list.insertAdjacentHTML('beforeend', `<li class='sdo'>
        ${sdos[objective_index][get_localized_option(0, 1, 2)]}
      </li>`)
    )
  }

  // Insert share buttons

  const article_title = get_meta_content('citation_title')
  const subject = get_localized_option(
    'Échale un vistazo a este artículo',
    'Check out this article',
    'Confira este artigo'
  )
  const url = window.location.href

  const message = `${subject}: ${article_title}`
  const keywords = Array.from(select_all('meta[name="citation_keywords"]'))
    .map(meta => meta.getAttribute('content')).join(',').replace(/[\s-]/g, '')

  select('.article-sidebar figure')?.insertAdjacentHTML('afterend', `<div id='sdo'>
    <a id='share-twitter' class='share-btn' target='_blank' rel='noopener' title='Twitter share'
      href='https://twitter.com/intent/tweet?url=${url}&text=${message}&hashtags=${keywords}'>
      <img src='https://revistas.udenar.edu.co/public/site/images/mbeltran/twitter.png' />
    </a>
    <a id='share-email' class='share-btn' target='_blank' rel='noopener' title='Email share'
      href='mailto:?subject=${subject}&body=${message}: ${url}'>
      <img src='https://clipground.com/images/email-logo-png-19.png' />
    </a>
    <a id='share-facebook' class='share-btn' rel='noopener' title='Facebook share'
      href='https://www.facebook.com/sharer/sharer.php?u=${url}' target='_blank'>
      <img src='https://revistas.udenar.edu.co/public/site/images/mbeltran/facebook.png' />
    </a>
    <a id='share-linkedin' class='share-btn' target="_blank"
      href="https://www.linkedin.com/sharing/share-offsite/?url=${url}">
      <img src='https://revistas.udenar.edu.co/public/site/images/alejo/linkedin-logo.png' />
    </a>
  </div>`)
}

const fix_keyword_cloud_size = () => select('.block_Keywordcloud')?.classList.add('col-md-3')

const accordion_functionality = () => {
  select('#about-page, #submissions-page, #ethics-page')?.insertAdjacentHTML(
    'beforebegin',
    `<a id='toggle-all-btn' data-status='hide'>
      ${get_localized_option('Expandir/Contraer todo', 'Toggle all', 'Expandir/Recolher tudo')}
    </a>`
  )

  const show_all = () => {
    select_all('.accordion-button.collapsed').forEach(button => button.classList.toggle('collapsed'))
    select_all('[class="accordion-collapse"]').forEach(content => content.classList.toggle('show'))
    return 'show'
  }

  const hide_all = () => {
    select_all('[class="accordion-button"]').forEach(button => button.classList.toggle('collapsed'))
    select_all('.accordion-collapse.show').forEach(content => content.classList.toggle('show'))
    return 'hide'
  }

  const toggle_all_btn = get_by_id('toggle-all-btn')
  toggle_all_btn.onclick = () => {
    toggle_all_btn.dataset.status = toggle_all_btn.dataset.status === 'show' ? hide_all() : show_all()
  }

  select_all('.accordion-button').forEach(accordion_button =>
    accordion_button.onclick = () => {
      if (accordion_button.classList.contains('collapsed')) {

        hide_all()
        const parent_id = accordion_button.parentElement.id
        window.location.hash = parent_id
        // get_by_id(parent_id).scrollIntoView({ behavior: 'smooth', block: 'start' })
      }

      accordion_button.classList.toggle('collapsed')
      get_by_id(accordion_button.dataset.target).classList.toggle('show')
    }
  )
}


const anchor_section_at_reload = () => {
  const hash = window.location.hash
  if (!hash)
    throw new Error('Window hash not found')

  select(`${hash} .accordion-button`).click()
}


const move_special_issue_galleys_2025 = () => {
  select('.issue-desc__galleys').insertAdjacentHTML('beforeend', `
    <ul class="issue-desc__btn-group" id="special-issue-galleys"></ul>
  `)
  
  const special_issue_galleys = get_by_id('special-issue-galleys')
  Array.from(select_all('.issue-desc__btn-group li')).slice(1).forEach(galley =>
    special_issue_galleys.appendChild(galley)
  )
}

const remove_default_html_galley_stylesheet = () => {
  get_by_id('htmlGalleyFrame').onload = function() {

    const doc = this.contentDocument
    doc.querySelector('link[rel="stylesheet"]')?.remove()
    const style = doc.createElement('style')

    style.textContent = `
      :target { background-color: #ffbb88; }
      figure { margin-block: 1em; padding: 1em; border: 1px gray solid; }
    `
    doc.head.appendChild(style)
  }
}

const insert_xml_galley_header = () => {
  const article_title = select('.article.lens-article .text.title').innerText
  if (!article_title)
    throw new Error('Page is not XML Galley')

  const url = window.location.href.split('/').slice(0, -1).join('/');

  document.body.insertAdjacentHTML('afterbegin', `<header class="main__header xml-galley__header">
    <a href="${url}" class="return"></a>
    <a href="${url}" class="title">${article_title}</a>
  </header>`)
};

// Run and Debug

[add_main_bar_icons, add_navbar_icons, add_file_icons, create_make_submission_button, show_english_article_titles, add_article_page_info, fix_keyword_cloud_size, accordion_functionality, anchor_section_at_reload, move_special_issue_galleys_2025, remove_default_html_galley_stylesheet, insert_xml_galley_header].forEach(func => {
  try {
    func() 
  } catch (error) {
    //console.error(`${error.name} at ${func.name}`, error.message, error.stack)
  }
})

//</script>
