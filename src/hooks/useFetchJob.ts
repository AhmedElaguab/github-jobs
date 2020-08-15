import { useState, useEffect } from 'react'
import axios from 'axios'

const getFetchUrl = (jobId: string) => {
  return `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${jobId}.json`
}

export interface Job {
  company: string
  company_logo: string
  company_url: string
  created_at: string
  description: string
  how_to_apply: string
  id: string
  location: string
  title: string
  type: string
  url: string
}

type UseFetchJob = (
  jobId: string,
) => { job: Job | null; isLoading: boolean; hasError: null | string }

const useFetchJob: UseFetchJob = jobId => {
  const [job, setJob] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(null)

  useEffect(() => {
    setIsLoading(true)

    axios
      .get(getFetchUrl(jobId))
      .then(res => {
        setJob(res.data)
        setIsLoading(false)
        setHasError(null)
      })
      .catch(err => {
        setJob(null)
        setIsLoading(false)
        setHasError(err.message)
      })

    return () => {}
  }, [jobId])

  return { job, isLoading, hasError }
}

export default useFetchJob
