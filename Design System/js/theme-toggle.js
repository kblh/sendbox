/*********************
  theme toggle  
*********************/

const getThemeColorPreference = () => {
  if (localStorage.getItem('theme-preference'))
    return localStorage.getItem('theme-preference')
  else
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
}

const setThemePreference = () => {
  localStorage.setItem('theme-preference', theme.value)
  reflectThemePreference()
}

const reflectThemePreference = () => {
  document.firstElementChild.setAttribute('data-theme', theme.value)
  document.querySelector('#theme-toggle')?.setAttribute('aria-label', theme.value)
}

const theme = {
  value: getThemeColorPreference(),
}

const themeSwitchersHandler = () => {
  const themeSwitchers = document.querySelectorAll('.theme-switcher')

  themeSwitchers.forEach.call(themeSwitchers, themeSwitcher => {
    themeSwitcher.addEventListener('click', (event) => {
      theme.value = themeSwitcher.dataset.theme
      setThemePreference()  
    })
  })
}

// set early so no page flashes
reflectThemePreference()

window.onload = () => {
  // set on load so screen readers can see latest value on the button
  reflectThemePreference()

  document.querySelector('#theme-toggle').addEventListener('click', e => {
    theme.value = theme.value === 'light'
      ? 'dark'
      : 'light'

    setThemePreference()
  })

  themeSwitchersHandler()

  // document.querySelector('#theme-switcher').addEventListener('click', e => {
  //   theme.value = "orange"
  //   setThemePreference()
  // })
}


window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', ({matches:isDark}) => {
    theme.value = isDark ? 'dark' : 'light'
    setThemePreference()
  })