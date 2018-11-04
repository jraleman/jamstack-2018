import React from 'react'

import Layout from '../components/layout'
import DayPicker from 'react-day-picker'

import 'react-day-picker/lib/style.css'

import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines'

const IndexPage = () => (
  <Layout>
    <DayPicker selectedDays={new Date()} />
    <DayPicker selectedDays={new Date()} />
    <div>
      <Sparklines data={[5, 10, 5, 20, 8, 15, 25, 7]} limit={8} width={70} height={18} margin={5}>
        <SparklinesLine style={{ fillOpacity: ".5", fill: "black", r: "3" }} />
        <SparklinesSpots style={{ fill: "red" }} />
        <circle fill="black" opacity="100" r="4"></circle>
      </Sparklines>
    </div>
  </Layout>
)



export default IndexPage
