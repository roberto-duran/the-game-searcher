import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import ApiClient from "../services/api-client";
import { Platform } from "../types/Platform";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms,
  });

export default usePlatforms;
