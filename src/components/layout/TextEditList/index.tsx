import React, { useEffect, useRef, useState } from 'react'
import * as S from './style'
import { TextPlayer } from '../../ui/TextPlayer'
import { useAppDispatch, useAppSelector } from 'store'
import { renderText, outFocus } from 'store/slices/optionSlice'
import { VoiceUploadButton } from 'components/ui/VoiceUploadButton'
import { TextEnterButton } from 'components/ui/TextEnterButton'
import { ProjectTextModal } from 'components/ui/ProjectTextModal'
import {
  ProjectTextEnterButton,
  ProjectVoiceUploadButton,
  TootipMessage
} from 'components'
import { TooltipIcon } from 'components/Icons'

export const TextEditList = () => {
  const dispatch = useAppDispatch()
  const { texts, splitTextList, userSelectedList, textPreviewData } =
    useAppSelector((state) => state.option)
  const [modalText, setModalText] = useState('')
  const [modal, setModal] = useState(false)

  // console.log(splitTextList.length === 1 && splitTextList[0].text === '미정') //조건부

  useEffect(() => {
    dispatch(renderText(textDatas))
  }, [texts])

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

  console.log(splitTextList.length === 1 && splitTextList[0].text === '미정')

  return (
    <S.Wrapper onClick={userOutFocusHandler}>
      <S.TitleGroup>
        <S.Title>
          <S.Tooltip>
            <TooltipIcon width='1.6rem' height='1.6rem' />
            <div className='message'>
              <TootipMessage
                content='문장을 선택하면 문장별로 스크립트 수정이 가능하고 
                간격 조절과 문장을 추가, 삭제할 수 있어요.'
                width='27.0rem'
              />
            </div>
          </S.Tooltip>
          <span className='title'>문장별로 텍스트를 수정해주세요</span>
        </S.Title>
        {splitTextList.length === 1 && splitTextList[0].text === '미정' ? (
          <></>
        ) : (
          <div className='button-group'>
            <ProjectTextEnterButton setModal={setModal} />
            <ProjectVoiceUploadButton />
          </div>
        )}
      </S.TitleGroup>

      {modal && (
        <ProjectTextModal
          setModal={setModal}
          modalText={modalText}
          setModalText={setModalText}
        />
      )}
      <>
        {splitTextList.length === 1 ? (
          <S.StartPage>
            <VoiceUploadButton />
            <TextEnterButton setModal={setModal} />
          </S.StartPage>
        ) : (
          <>{render}</>
        )}
      </>
    </S.Wrapper>
  )
}
