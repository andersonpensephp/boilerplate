type Props = {
  title: string
}

const Home = ({ title = 'title' }: Props) => <h2>{title}</h2>

export default Home
