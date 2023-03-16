import { CanceledError } from "axios"
import { useEffect, useState } from "react"
import apiClient from "../services/api-client"

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform : Platform }[]
  metacritic: number
}

interface FetchGame {
  count: number
  results: Game[]
}

export default function useGames() {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    apiClient
      .get<FetchGame>('/games', {signal: controller.signal})
      .then(res => {
        setGames(res.data.results)
      })
      .catch(err => {
        if (err instanceof CanceledError) return
        setError(err.message)
      })
    return () => controller.abort();
  }, [])

  return { games, error }
}