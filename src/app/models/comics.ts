export interface Comic {
  id: number
  digitalId: number
  title: string
  issueNumber: number
  description: string
  thumbnail: any
}

/**
 * 
id	int	The unique ID of the comic resource.
digitalId	int	The ID of the digital comic representation of this comic. Will be 0 if the comic is not available digitally.
title	string	The canonical title of the comic.
issueNumber	int	The number of the issue in the series (will generally be 0 for collection formats).
variantDescription	string	If the issue is a variant (e.g. an alternate cover, second printing, or director's cut), a text description of the variant.
description	string	The preferred description of the comic.
modified	Date	The date the resource was most recently modified.
isbn	string	The ISBN for the comic (generally only populated for collection formats).
upc	string	The UPC barcode number for the comic (generally only populated for periodical formats).
diamondCode	string	The Diamond code for the comic.
ean	string	The EAN barcode for the comic.
issn	string	The ISSN barcode for the comic.
format	string	The publication format of the comic e.g. comic, hardcover, trade paperback.
pageCount	int	The number of story pages in the comic.
textObjects	Array[TextObject]	A set of descriptive text blurbs for the comic.
resourceURI	string	The canonical URL identifier for this resource.
urls	Array[Url]	A set of public web site URLs for the resource.
series	SeriesSummary	A summary representation of the series to which this comic belongs.
variants	Array[ComicSummary]	A list of variant issues for this comic (includes the "original" issue if the current issue is a variant).
collections	Array[ComicSummary]	A list of collections which include this comic (will generally be empty if the comic's format is a collection).
collectedIssues	Array[ComicSummary]	A list of issues collected in this comic (will generally be empty for periodical formats such as "comic" or "magazine").
dates	Array[ComicDate]	A list of key dates for this comic.
prices	Array[ComicPrice]	A list of prices for this comic.
thumbnail	Image	The representative image for this comic.
images	Array[Image]	A list of promotional images associated with this comic.
creators	ResourceList	A resource list containing the creators associated with this comic.
characters	ResourceList	A resource list containing the characters which appear in this comic.
stories	ResourceList	A resource list containing the stories which appear in this comic.
events	ResourceList	A resource list containing the events in which this comic appears.
 */