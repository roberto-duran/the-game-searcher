import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";
import useGameQueryStore from "../store";

const apiClient = new ApiClient<Game>('/games');

export interface Game {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform : Platform }[]
  metacritic: number
  rating_top: number
}

const useGames = () => {
  const gameQuery = useGameQueryStore(store => store.gameQuery);
  
  return  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) => apiClient.getAll({params: {
      genres: gameQuery.genreId, 
      parent_platforms: gameQuery.platformId,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
      page: pageParam
    }}),
    staleTime: 24 * 60 * 60 * 1000,
    getNextPageParam: (lastPage, allPages) => lastPage.next ? allPages.length + 1 : undefined
  })
}

export default useGames;