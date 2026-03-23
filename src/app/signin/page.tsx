'use client'
import { supabase } from '@/src/lib/supabase'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
export default function SignIn() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) {
      console.error('Error signing in:', error)
    } else {
      alert('로그인이 완료되었습니다.')
      router.push('/')
    }
  }
  return (
    <form className="flex flex-col gap-2 items-start" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="이메일을 입력하세요"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="비밀번호를 입력하세요"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button style={{ cursor: 'pointer' }}>로그인</button>
    </form>
  )
}
