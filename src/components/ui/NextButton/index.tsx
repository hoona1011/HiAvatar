import { useNavigate, useParams } from 'react-router-dom'
import * as S from './style'
import { NextButtonProps } from 'index'
import { useAppSelector } from 'store'
// import { usePostOptionsMutation } from 'api/optionApi'
export const NextButton = ({ requestFunc }: NextButtonProps) => {
  const navigate = useNavigate()
  const { projectId } = useParams()
  const optionData = useAppSelector((state) => state.option)

  // const [postOptions, { isLoading }] = usePostOptionsMutation()

  const onClickHandler = async () => {
    // const projectData = { ...optionData }
    // delete projectData.userSelectedList
    // const res = await postOptions({
    //   projectData,
    //   projectId
    // })
    // if (res.data.data.result === 'Success') {
    //   navigate(`/project-avatar/${projectId}`)
    // } else {
    //   alert('에러가 발생했습니다. 다시 시도해주세요')
    // }
  }

  return (
    <S.Button disabled={optionData.texts.length === 0} onClick={onClickHandler}>
      {/* {!isLoading ? <span>다음</span> : <span>로딩 스피너...</span>} */}
    </S.Button>
  )
}
