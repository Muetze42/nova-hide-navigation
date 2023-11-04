Nova.booting(() => {
  let params = new URLSearchParams(window.location.search)
  if (params.has('hide')) {
    let hide = params.get('hide').toLowerCase()
    let config = Nova.config('nova_hide_navigation')

    let css = ''
    if (hide.includes('h') || hide.includes('all')) {
      css += '#nova > div:first-child {display: none;}'
      if (config && config.if_hide_header) {
        if (!config.if_hide_header.endsWith(';')) {
          config.if_hide_header = config.if_hide_header + ';'
        }
        css += '#nova > div:nth-child(2) > div:nth-child(2) { ' + config.if_hide_header + '}'
      }
    }
    if (hide.includes('s') || hide.includes('all')) {
      css += '#nova > div:nth-child(2) > div:first-child {display: none !important;}'
      css += '#nova > div:nth-child(2) > div:nth-child(2) {margin-left: 0 !important;}'
      if (config && config.if_hide_sidebar) {
        if (!config.if_hide_sidebar.endsWith(';')) {
          config.if_hide_sidebar = config.if_hide_sidebar + ';'
        }
        css += '#nova > div:nth-child(2) > div:nth-child(2) { ' + config.if_hide_sidebar + '}'
      }
    }
    if (hide.includes('f') || hide.includes('all')) {
      css += '#nova > div:nth-child(2) > div:nth-child(2) > div:last-child {display: none !important;}'
      if (config && config.if_hide_footer) {
        if (!config.if_hide_footer.endsWith(';')) {
          config.if_hide_footer = config.if_hide_footer + ';'
        }
        css += '#nova > div:nth-child(2) > div:nth-child(2) { ' + config.if_hide_footer + '}'
      }
    }

    if (css.length) {
      const style = document.createElement('style')
      style.innerHTML = css
      document.head.append(style)
    }
  }
})
