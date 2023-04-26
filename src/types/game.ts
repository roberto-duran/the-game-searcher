import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publishers";

export interface Game {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  genres: Genre[];
  publishers: Publisher[];
  description_raw: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
