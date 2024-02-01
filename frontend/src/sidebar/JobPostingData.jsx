import React from 'react'
import InputField from '../cmponents/InputField'

const JobPostingData = ({ handleChange }) => {
  const now = new Date()
  const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000)
  const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000)
  const ThirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000)

  //  convert date to string
  const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0, 10)
  const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0, 10)
  const ThirtyDaysAgoDate = ThirtyDaysAgo.toISOString().slice(0, 10)
  //   console.log(twentyFourHoursAgoDate, sevenDaysAgoDate, ThirtyDaysAgoDate)

  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Date of posting</h4>

      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="test" value="" onChange={handleChange} />
          <span className="checkmark"></span>
          All time
        </label>

        <InputField
          handleChange={handleChange}
          value={twentyFourHoursAgoDate}
          title="Last 24 Hourse"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={sevenDaysAgoDate}
          title="Last 7 days"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={ThirtyDaysAgoDate}
          title="Last 30 days"
          name="test"
        />
      </div>
    </div>
  )
}

export default JobPostingData
