import { Character } from "./character"
import { Comic } from "./comic"

export interface DataWrapper {
  code: number
  status: string
  copyright: string
  attributionText: string
  attributionHTML: string
  data: DataContainer
}

export interface DataContainer {
  count: number
  limit: number
  offset: number
  total: number
  results: Character[] | Comic[]
}