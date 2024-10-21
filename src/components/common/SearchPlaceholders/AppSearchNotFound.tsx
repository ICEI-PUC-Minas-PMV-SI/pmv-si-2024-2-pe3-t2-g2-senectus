import Image from 'next/image'
import { SearchNotFoundStyle } from './SearchNotFoundStyle'

interface AppSearchNotFoundProps {
  text: string
}

export function AppSearchNotFound(props: AppSearchNotFoundProps) {
  return (
    <SearchNotFoundStyle>
      <Image
        src="/img/common/search.svg"
        alt="Image de uma barra de pesquisa com alguns itens logo abaixo."
        width={80}
        height={80}
      />
      <p>{props.text}</p>
    </SearchNotFoundStyle>
  )
}
