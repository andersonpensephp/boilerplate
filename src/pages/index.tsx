type Props = {
  title: string
}

export default function Home({ title = 'title' }: Props) {
  return <h1>{title}</h1>
}
