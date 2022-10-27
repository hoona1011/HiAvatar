import * as S from './style'
import { Modalprops } from 'index'
import { TextIcon } from 'components/Icons'
export const TextEnterButton = ({ setModal }: Modalprops) => {
  return (
    <S.Button onClick={() => setModal(true)}>
      <TextIcon width='1.6rem' height='1.6rem' />
      <div className='button-label'>텍스트로 입력하기</div>
    </S.Button>
  )
}
