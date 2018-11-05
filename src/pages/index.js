import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines'

export default class IndexPage extends React.Component {
  static defaultProps = {
    numberOfMonths: 1,
  }

  constructor(props) {
    super(props)
    this.handleDayClick = this.handleDayClick.bind(this)
    this.handleResetClick = this.handleResetClick.bind(this)
    this.state = this.getInitialState()
  }

  getInitialState() {
    return {
      from: undefined,
      to: undefined,
    }
  }

  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state)
    this.setState(range)
  }

  handleResetClick() {
    this.setState(this.getInitialState())
  }

  render() {
    const { from, to } = this.state
    const modifiers = { start: from, end: to }
    return (
      <Layout>
        <div className="RangeExample">
          <p>
            {!from && !to && 'Please select the first day.'}
            {from && !to && 'Please select the last day.'}
            {from &&
              to &&
              `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
            {from &&
              to && (
                <button className="link" onClick={this.handleResetClick}>
                  Reset
                </button>
              )}
          </p>
          <DayPicker
            className="Selectable"
            numberOfMonths={this.props.numberOfMonths}
            selectedDays={[from, { from, to }]}
            modifiers={modifiers}
            onDayClick={this.handleDayClick}
          />
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
              <SparklinesLine
                style={{ fillOpacity: '.5', fill: 'black', r: '1' }}
              />
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
        </div>
      </Layout>
    )
  }
}
