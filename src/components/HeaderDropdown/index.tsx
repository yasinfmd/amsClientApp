import React, { ReactNode } from 'react'
import { Dropdown } from 'antd'

interface PropTypes {
  children: ReactNode
  overlay: any
}

const HeaderDropdown = (props: PropTypes) => {
  return (
    <Dropdown
      overlayClassName={'header-dropdown-container'}
      overlay={props.overlay}
      trigger={['click']}
    >
      {props.children}
      {/* <div style={{display:"flex",justifyContent:"center",alignItems:"center",background:"yellow"}}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Click me  <DownOutlined />
            </a> 
        </div> */}
    </Dropdown>
  )
}

export default React.memo(HeaderDropdown)
