import { InitialTextStyle } from './InitialTextStyle'

interface AppInitialText {
  title: string
  text: string
}

export function AppInitialText(props: AppInitialText) {
  return (
    <InitialTextStyle>
      <h1 className="prettify-title">{props.title}</h1>
      <p>{props.text}</p>
    </InitialTextStyle>
  )
}
