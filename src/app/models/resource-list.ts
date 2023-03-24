export interface Item {
  name: string
  resourceURI: string
}

export interface ResourceList {
  available: number
  collectionURI: string
  items: Item[]
  returned: number
}