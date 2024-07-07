export { default } from 'next-auth/middleware'

// 全画面がリダイレクト対象
// 多分デフォルトのsignInとerrorあたりは除外されている。
// ログインページを/signInとかに独自実装したら、それは対象外にしないとキャッチできない。
export const config = {
  // api と signin は未認証でも使いたいので弾く
  // _next は web フォントの読み込み等でも middleware が反応していたので除外してみた
  matcher: ['/((?!api|signinin|_next).*)'],
}
