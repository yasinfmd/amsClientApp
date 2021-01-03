/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Layout, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons'

import HeaderDropdown from '../HeaderDropdown'
import { languageOptions } from '../../statics/ApplicationConst'
import { useApplicationState } from '../../context/Application/store'
import useLocalStorage from '../../customHooks/useLocalStorage'

import './styles.scss'
import { useAppState, useAppActions } from '../../context/App/store';

const { Header } = Layout;

const AppHeader = () => {

  const history = useHistory();
  const {user,locale}=useAppState()
  const {setLanguage,onLogout}=useAppActions();
  //const [state, { setLanguage,onLogout }] = useApplicationState()
  const { setLocalStorage, getLocalStorage } = useLocalStorage()

  const changeLanguage = (language: string) => {
    setLanguage(language)
    setLocalStorage('language', language)
  }

  const logout = () => {
    onLogout();
    history.push('/login');
  }

  const menu = (
    <Menu>
      <Menu.Item></Menu.Item>
      <Menu.Item onClick={logout}>Çıkış Yap</Menu.Item>
      {/* <Tabs defaultActiveKey="2">
        <TabPane tab={<span>Tab 1</span>} key="1">
          Tab 1
        </TabPane>
        <TabPane tab={<span>Tab 2</span>} key="2">
          Tab 2
        </TabPane>
      </Tabs> */}
    </Menu>
  )

 const getUserFullName = useMemo(() => {
   if (user.name !== '') {
     return user.name + ' ' + user.lastName
   } else {
     const user = getLocalStorage('user')
     if (user !== null && user !== undefined) {
       return user
     } else {
       return <FormattedMessage id={'headerUser'} />
     }
   }
 }, [user.lastName, user.name])

  return (
    <>
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <div className={'header-wrapper'}>
          <div className="header-left"></div>

          <div className="header-right">
            <HeaderDropdown overlay={langMenu({ setLanguage: changeLanguage })}>
              <div
                className="header-dropdown-link-container"
                style={{ marginRight: '16px' }}
              >
                <a
                  className="ant-dropdown-link upperCase"
                  onClick={(e) => e.preventDefault()}
                >
                 {locale} 
                  <DownOutlined />
                </a>
              </div>
            </HeaderDropdown>

            <HeaderDropdown overlay={menu}>
              <div className="header-dropdown-link-container">
                <a
                  className="ant-dropdown-link textCapitalaze"
                  onClick={(e) => e.preventDefault()}
                >
                {getUserFullName} 
                  <DownOutlined />
                </a>
              </div>
            </HeaderDropdown>
          </div>
        </div>
      </Header>
    </>
  )
}

export default React.memo(AppHeader)

const langMenu = (props: { setLanguage: (language: string) => void }) => {
  const seti18n = (language: string) => {
    props.setLanguage(language)
  }
  return (
    <Menu
      onClick={(e: any) => {
        seti18n(e.key)
      }}
    >
      {languageOptions.map((item) => (
        <Menu.Item key={item.key} icon={item.icon}>
          {item.language}
        </Menu.Item>
      ))}
    </Menu>
  )
}
