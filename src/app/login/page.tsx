export default function Login() {
  return (
    <form>
      <input type="email" name="email" placeholder="이메일을 입력하세요" />
      <input
        type="password"
        name="password"
        placeholder="비밀번호를 입력하세요"
      />
      <button>로그인</button>
    </form>
  )
}
