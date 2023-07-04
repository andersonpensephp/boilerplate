type Props = {
  title: string
}

export default function Home({ title = 'title' }: Props): JSX.Element {
  return <h2>{title}</h2>
}
