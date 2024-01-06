import React from 'react'
import '../../Pages/PageComponent.css'
import SaleTable from './SaleTable'
import { Flex } from 'antd'

const SaleList = () => {
  return (
    <>
      <div className='SaleListBody'>
          <h1>Sale List</h1>
          <div style={{maxWidth: 1500, margin: '20px',  }}><SaleTable /></div>
      </div>
    </>
  )
}

export default SaleList
