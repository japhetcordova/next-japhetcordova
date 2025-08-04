// Removed unused variable 'slug'
// Removed unused variable 'tagSlug'

import { client } from './client'

// Query to get all posts with their tags
export const getAllPostsWithTags = `
  *[_type == "post"] {
    _id,
    title,
    slug,
    publishedAt,
    image,
    tags[]-> {
      _id,
      title,
      slug,
      description
    },
    body
  }
`

// Query to get a single post with its tags
export const getPostWithTags = () => `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    image,
    tags[]-> {
      _id,
      title,
      slug,
      description
    },
    body
  }
`

// Query to get all tags
export const getAllTags = `
  *[_type == "tag"] {
    _id,
    title,
    slug,
    description
  }
`

// Query to get posts by tag
export const getPostsByTag = () => `
  *[_type == "post" && $tagSlug in tags[]->slug.current] {
    _id,
    title,
    slug,
    publishedAt,
    image,
    tags[]-> {
      _id,
      title,
      slug,
      description
    },
    body
  }
`

// Helper functions to execute queries
export const fetchAllPostsWithTags = async () => {
  return await client.fetch(getAllPostsWithTags)
}

export const fetchPostWithTags = async (slug: string) => {
  return await client.fetch(getPostWithTags(), { slug })
}

export const fetchAllTags = async () => {
  return await client.fetch(getAllTags)
}

export const fetchPostsByTag = async (tagSlug: string) => {
  return await client.fetch(getPostsByTag(), { tagSlug })
} 