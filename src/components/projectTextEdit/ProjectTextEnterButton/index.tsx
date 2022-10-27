import * as S from './style'
import { Modalprops } from 'index'
import { TextIcon } from 'components/Icons'
export const ProjectTextEnterButton = ({ setModal }: Modalprops) => {
  return (
    <S.Button onClick={() => setModal(true)}>
      <div className='button-label'>텍스트 입력</div>
    </S.Button>
  )
}
