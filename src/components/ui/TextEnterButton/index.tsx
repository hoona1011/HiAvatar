import * as S from './style'
import { Modalprops } from 'index'
export const TextEnterButton = ({ setModal }: Modalprops) => {
  return (
    <S.Button onClick={() => setModal(true)}>
      {/* <S.Button onClick={() => setModal(prev => !prev)}> */}
      <span>+ 텍스트 입력</span>
    </S.Button>
  )
}
