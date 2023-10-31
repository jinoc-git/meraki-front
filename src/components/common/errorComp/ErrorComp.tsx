import React from 'react'

import * as S from './ErrorComp.styled'

const ErrorComp = () => {
  return (
    <S.ErrorContainer>
      <S.ErrorMessage>기사를 불러오는 중 오류가 발생했습니다.</S.ErrorMessage>
      <S.ErrorMessage>잠시후 다시 시도해주세요.</S.ErrorMessage>
    </S.ErrorContainer>
  )
}

export default ErrorComp