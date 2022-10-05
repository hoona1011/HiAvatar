import { useNavigate, useParams } from 'react-router-dom'
import * as S from './style'
import { NextButtonProps } from 'index'
import { useAppSelector } from 'store'
import { usePostOptionsMutation } from 'api/optionApi'
export const NextButton = ({ requestFunc }: NextButtonProps) => {
  const navigate = useNavigate()
  const { id: projectId } = useParams()
  const optionData = useAppSelector((state) => state.option)

  const [postOptions, { isLoading }] = usePostOptionsMutation()

  const onClickHandler = async () => {
    const projectData = { ...optionData }
    delete projectData.userSelectedList

    const res = await postOptions({
      projectData,
      projectId
    })

    if (res.data.data.result === 'Success') {
      navigate(`/project-avatar/${projectId}`)
    }
  }

  return (
    <S.Button onClick={onClickHandler}>
      {!isLoading ? <span>다음</span> : <span>로딩 스피너...</span>}
    </S.Button>
  )
}
