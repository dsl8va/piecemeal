// this is a dynamic page to serve up search recipe pages
// the layout for this should be the queried recipe
// ideally it should have related or similar recipes at the bottom as well

import Link from 'next/link'

export default function Recipe() {
  return (
    <>
    <Link href="/">
      <a>Back to home</a>
    </Link>
    <div>This will show a queried recipe</div>
    </>
  )
}
