import React from 'react';
import * as S from './styled';

const Profile = () => {
    return(
        <S.Wrapper>
            <S.WrapperImage src="https://kh.wiki.gallery/images/f/fe/Void_Gear_%28Terra%29_KHBBS.png" alt="Avatar from the user"/>

            <S.WrapperInfoUsers>
                <div>
                    <h1>Daniel Silva Sales</h1>
                    <S.WrapperUserName>
                        <h3>Username: </h3>
                        <span>benits</span>
                    </S.WrapperUserName>
                </div>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Folowers</h4>
                        <span> 5 </span>
                    </div>
                    <div>
                        <h4>Starreds</h4>
                        <span> 5 </span>
                    </div>
                    <div>
                        <h4>Followings</h4>
                        <span> 5 </span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUsers>
        </S.Wrapper>
        
       
    );
}



export default Profile ;