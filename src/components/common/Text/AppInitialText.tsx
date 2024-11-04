import { InitialTextStyle } from './InitialTextStyle';

interface AppInitialText {
  title: string;
  text?: string;
  subtitle?: string; 
}

export function AppInitialText(props: AppInitialText) {
  return (
    <InitialTextStyle>
      <h1 className="prettify-title">{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>} 
      {props.text && <p>{props.text}</p>} 
    </InitialTextStyle>
  );
}
