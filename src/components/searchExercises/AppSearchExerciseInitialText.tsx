import { SearchExerciseInitialTextStyle } from './SearchExerciseInitialTextStyle'

interface AppSearchExerciseTextProps {
  categoryName: string
}

export function AppSearchExerciseInitialText(
  props: AppSearchExerciseTextProps
) {
  return (
    <SearchExerciseInitialTextStyle>
      <h1 className="prettify-title">
        Exercícios de {props.categoryName.toLowerCase()}
      </h1>
      <p>
        Procure pelo exercício desejado inserindo o seu nome na barra de
        pesquisa e clicando no mesmo:
      </p>
    </SearchExerciseInitialTextStyle>
  )
}
