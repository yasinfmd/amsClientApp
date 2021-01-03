import React from 'react'
import { TranslationOutlined } from '@ant-design/icons'
import { LanguageMenuOptionsModel } from '../../Models/LanguageMenuOptions.model'
export const languageOptions: Array<LanguageMenuOptionsModel> = [
  {
    key: 'tr',
    language: 'TR',
    icon: <TranslationOutlined />
  },
  {
    key: 'en',
    language: 'EN',
    icon: <TranslationOutlined />
  }
]

export const reactEnv: string = 'REACT_APP_'
