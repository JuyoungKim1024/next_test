'use client'

import { supabase } from '@/src/lib/supabase'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

interface Post {
  id: number
  created_at: string
  title: string
  content: string
}

export default function PostDetail() {
  const { id } = useParams()
  const [posts, setPosts] = useState<Post | null>(null)

  const fetchPost = async () => {
    const { data: post, error } = await supabase
      .from('posts')
      .select('*')
      .eq('id', id)
      .single()
    setPosts(post)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  if (!posts) {
    return <div>로딩중...</div>
  }

  return (
    <>
      <div>{posts.id}번 게시글 상세</div>
      <div>{posts.title}</div>
      <div>{posts.content}</div>
    </>
  )
}
