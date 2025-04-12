import * as S from "./styled";
import * as T from "./types";

const Spinner: React.FC<T.SpinnerProps> = ({ width, height }) => {
  return <S.SpinnerWrapper width={width} height={height} />;
};

export default Spinner;
