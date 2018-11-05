import React from 'react'

import Layout from '../components/layout'
import DayPicker from 'react-day-picker'

import 'react-day-picker/lib/style.css'

import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines'

const IndexPage = () => (
  <Layout>
    <DayPicker selectedDays={new Date()} />
    <div>
      <h2>Week Overview</h2>
      {/* <P>DAY (import)</P> */}
      <Sparklines
        data={[5, 10, 5, 20, 8, 15, 25, 7]}
        limit={8}
        width={70}
        height={18}
        margin={5}
      >
        <SparklinesLine style={{ fillOpacity: '.5', fill: 'black', r: '1' }} />
        <SparklinesSpots style={{ fill: 'red' }} />
        {/* <circle fill="black" opacity="100" r="1"></circle> */}
      </Sparklines>
    </div>
    <div>
      <h2 style={{ display: 'inline' }}>Date: </h2>
      <span> {'{ dateData }'} </span>
      <br />
      <h2 style={{ display: 'inline' }}>Meal Type: </h2>
      <span> {'{ mealTypeData }'} </span>
      <br />
      <h2 style={{ display: 'inline' }}>Meal Name: </h2>
      <span> {'{ mealNameData }'} </span>
      <br />
      <h2 style={{ display: 'inline' }}>Meal Data: </h2>
      <span> {'{ mealData }'} </span>
      <br />
    </div>
  </Layout>
)

export default IndexPage
