export interface Thumbnail {
  path: string
  extension: string
}

export interface Comic {
  id: number
  title: string
  description: string
  thumbnail: Thumbnail
  issueNumber: number
}