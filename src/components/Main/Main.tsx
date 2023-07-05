import * as Styles from './styles'
type Props = {
  title: string
}

const Main = ({ title = 'Main default' }: Props) => (
  <Styles.Wrapper>
    <Styles.Title>{title}</Styles.Title>
  </Styles.Wrapper>
)

export default Main
