import {ReactNode} from "react";

interface JumbotronProps {
  children: ReactNode;
}

const Jumbotron = ({children}: JumbotronProps) => {
  return (<h1>{children}</h1>);
}

export default Jumbotron;
