import { useNavigate, useParams } from 'react-router-dom'
import * as S from './style'
import { NextButtonProps } from 'index'
import { useAppSelector } from 'store'
import { usePostOptionsMutation } from 'api/optionApi'
import { Spinner } from 'components'
export const ProjectSaveButton = ({ requestFunc }: NextButtonProps) => {
  const navigate = useNavigate()
  const { projectId } = useParams()
  const optionData = useAppSelector((state) => state.option)

  const [postOptions, { isLoading }] = usePostOptionsMutation()

  const onClickHandler = async () => {
    const projectData: any = { ...optionData }
    delete projectData.userSelectedList
    const res = await postOptions({
      projectData,
      projectId
    })
    if ((res as any).data.data?.result === 'Success') {
      alert('프로젝트가 저장되었습니다.')
      navigate('/project-history')
    }
    if ((res as any).data.data?.result !== 'Success') {
      alert('에러가 발생했습니다. 다시 시도해주세요')
    }
  }

  return (
    <S.Button disabled={optionData.texts.length === 0} onClick={onClickHandler}>
      {!isLoading ? (
        <span>프로젝트 저장</span>
      ) : (
        <>
          <span>프로젝트 저장</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <Spinner width='0.2rem' />
        </>
      )}
    </S.Button>
  )
}
