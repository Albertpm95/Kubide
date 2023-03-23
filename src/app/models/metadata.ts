import { Character } from "./character"

export interface CharacterDataWrapper {
  code: number
  status: string
  copyright: string
  attributionText: string
  attributionHTML: string
  data: CharacterDataContainer
}

export interface CharacterDataContainer {
  count: number
  limit: number
  offset: number
  total: number
  results: Character[]
}