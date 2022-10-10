import React, { useEffect, useRef, useState } from 'react'
import * as S from './style'
import { TextPlayer } from '../../ui/TextPlayer'
import { useAppDispatch, useAppSelector } from 'store'
import { renderText, outFocus } from 'store/slices/optionSlice'
import { VoiceUploadButton } from 'components/ui/VoiceUploadButton'
import { TextEnterButton } from 'components/ui/TextEnterButton'
import { ProjectTextModal } from 'components/ui/ProjectTextModal'
import { ProjectTextEnterButton, ProjectVoiceUploadButton } from 'components'

export const TextEditList = () => {
  const dispatch = useAppDispatch()
  const { texts, splitTextList, userSelectedList, textPreviewData } =
    useAppSelector((state) => state.option)
  const [modalText, setModalText] = useState('')
  const [modal, setModal] = useState(false)

  useEffect(() => {
    dispatch(renderText(textDatas))
  }, [texts])

  // console.log(splitTextList)
  // console.log(texts)

  // const textData = {
  //   sentenceId: '',
  //   text: '',
  //   sentenceSpacing: ''
  // }
  // console.log('텍스트 리스트', splitTextList)

  const textDatas = texts.split('.').map((item, index) => {
    return { ...splitTextList[0], sentenceId: index + 1, text: item }
  })

  const userOutFocusHandler = () => {
    dispatch(outFocus())
  }

  const render = splitTextList.map((item) => {
    let orginData = item

    const findData = userSelectedList.find((item: any) => {
      return orginData.sentenceId === item.sentenceId
    })
    return (
      <TextPlayer
        key={item.sentenceId}
        itemData={item}
        splitTextList={splitTextList}
        textPreviewData={textPreviewData}
        findData={findData}
        dispatch={dispatch}
      />
    )
  })

  return (
    <S.Wrapper onClick={userOutFocusHandler}>
      <S.TitleGroup>
        <S.Title>문장별로 텍스트를 수정해주세요</S.Title>
        <div className='button-group'>
          <ProjectVoiceUploadButton />
          <ProjectTextEnterButton setModal={setModal} />
        </div>
      </S.TitleGroup>

      {modal && (
        <ProjectTextModal
          setModal={setModal}
          modalText={modalText}
          setModalText={setModalText}
        />
      )}

      {render}
    </S.Wrapper>
  )
}
