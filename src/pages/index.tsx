type Props = {
  title: string
}
const t = 4
export default function Home({ title = 'title' }: Props) {
  return <h1>{title}</h1>
}
