import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import { Screenshot } from "../types/Screenshot";

const useGameScreenshots = (gameId: number) => {
  const apiClient = new ApiClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useGameScreenshots;
