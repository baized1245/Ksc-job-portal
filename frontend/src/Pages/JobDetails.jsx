import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

const JobDetails = () => {
  const { id } = useParams()
  const [job, setJob] = useState([])
  useEffect(() => {
    fetch(`https://ksc-job-portal.vercel.app/all-jobs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setJob(data)
      })
  }, [])

  const handleApply = async () => {
    const { value: email } = await Swal.fire({
      title: 'Input email address',
      input: 'text',
      inputLabel: 'Your email address',
      inputPlaceholder: 'Enter your email address',
    })
    if (email) {
      Swal.fire(`Entered email: ${email}`)
    }
  }

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <button
        className="bg-blue px-12 py-4 text-white text-lg rounded-sm"
        onClick={handleApply}
      >
        Apply Now
      </button>
    </div>
  )
}

export default JobDetails
