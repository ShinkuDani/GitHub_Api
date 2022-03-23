import React from 'react';
import * as S from './styled';

const Profille = () => {
  return <S.Wrapper>
          <S.WrapperImage src ="https://avatars.githubusercontent.com/u/39008435?v=4" alt='Picture of User'/>
        <div>
            <div>
                <h1> Daniel silva sales</h1>
                <S.WrapperUserName>
                    <h3> Username: </h3>
                    <span>benits</span>
                </S.WrapperUserName>
            </div>
            <S.WrapperStatusCount>
                <div>
                    <h4>Folowers</h4>
                    <span>5</span>
                </div>
                <div>
                    <h4>Starreds</h4>
                    <span>5</span>
                </div>
                <div>
                    <h4>Followings</h4>
                    <span>5</span>
                </div>
            </S.WrapperStatusCount>
          </div>
  </S.Wrapper>;
}

export default Profille;