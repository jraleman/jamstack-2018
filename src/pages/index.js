import React from 'react'

import Layout from '../components/layout'
import DayPicker from 'react-day-picker'

import 'react-day-picker/lib/style.css'

const IndexPage = () => (
  <Layout>
    <DayPicker selectedDays={new Date()} />
    <DayPicker selectedDays={new Date()} />
  </Layout>
)

export default IndexPage
