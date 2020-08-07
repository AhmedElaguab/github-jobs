import { useState, useEffect } from 'react'
import axios from 'axios'

const BASE_URL =
  'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'

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

interface UseFetchJobsArgs {
  description: string
  location: string
  page: number
}

interface UseFetchJobsReturn {
  jobs: Job[]
  isLoading: boolean
  hasError: string | null
}

type UseFetchJobs = (arg: UseFetchJobsArgs) => UseFetchJobsReturn

const useFetchJobs: UseFetchJobs = ({ description, location, page }) => {
  const [jobs, setJobs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(null)

  useEffect(() => {
    setIsLoading(true)

    axios
      .get(BASE_URL, {
        params: { description, location, page },
      })
      .then(res => {
        setJobs(res.data)
        setIsLoading(false)
        setHasError(null)
      })
      .catch(err => {
        setJobs([])
        setIsLoading(false)
        setHasError(err.message)
      })

    return () => {}
  }, [description, location, page])

  return { jobs, isLoading, hasError }
}

export default useFetchJobs
