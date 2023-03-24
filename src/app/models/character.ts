import { Comic } from "./comic"
import { ResourceList } from "./resource-list"

export interface Thumbnail {
  path: string
  extension: string
}
export interface Character {
  id: number
  name: string
  description: string
  modified: Date
  thumbnail: Thumbnail

  resourceURI: string
  urls: string[]
  comics: Comic[]
  stories: ResourceList
  events: ResourceList
  series: ResourceList
}