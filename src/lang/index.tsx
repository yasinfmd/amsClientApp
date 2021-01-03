import { IntlProvider } from 'react-intl'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useApplicationState } from '../context/Application/store'
import tr from './tr'
import en from './en'
import useLocalStorage from '../customHooks/useLocalStorage'
import { useAppState, useAppActions } from '../context/App/store'
/* Define your translations */

interface PropTypes {
  children: React.ReactNode
}

const LanguageProvider = (props: PropTypes) => {
  const { getLocalStorage } = useLocalStorage()
  const defaulti18 = {
    locale: 'tr',
    messages: tr
  }
  const {locale}=useAppState();
  const {setLanguage}=useAppActions();
  //const [state, { setLanguage }] = useApplicationState()
  const [i18Lang, seti18Lang] = useState(defaulti18)
  useLayoutEffect(() => {
    let language
    if (
      getLocalStorage('language') !== null &&
      getLocalStorage('language') !== undefined
    ) {
      language = getLanguage(getLocalStorage('language'))
      setLanguage(getLocalStorage('language') as string)
    } else {
      language = getLanguage(locale)
    }
    seti18Lang(language)
  }, [locale])

  const getLanguage = (key: string | null) => {
    let i18Lang = 'tr'
    let lang = tr
    if (key && key === 'tr') {
      i18Lang = 'tr'
      lang = tr
    } else if (key && key === 'en') {
      i18Lang = 'en'
      lang = en
    }
    return {
      locale: i18Lang,
      messages: lang
    }
  }
  return (
    <IntlProvider
      locale={i18Lang.locale}
      defaultLocale={i18Lang.locale}
      messages={i18Lang.messages}
    >
      {props.children}
    </IntlProvider>
  )
}
export default LanguageProvider
