import React, { useState } from 'react'

//================
//== My Imports ==
//================
import styled from 'styled-components';
import { Input, Icon } from 'semantic-ui-react';
import { BioModal } from '../../components/modals/edit/bio';
import { EmailModal } from '../../components/modals/edit/email';
import { PhoneModal } from '../../components/modals/edit/phone';
import { NameModal } from '../../components/modals/edit/name';


    //=====================
    //== Styles for Page ==
    //=====================
        const PageCont = styled.div`
            padding-top: 5%;
            width: 100vw;
            min-height: 100vh;
            background-color: whitesmoke;
        `;

        const HeaderCont = styled.div`
            width: 100%;
            min-height: 25%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
        `;

        const PageHeader = styled.h2`
            text-align: center;
            color: blue;

        `;

        const ImageCont = styled.div`
            display: flex;
            justify-content: center;
            align-content: center;
        `;

        const UserImage = styled.img`
            width: 200px;
            height: 200px;
            padding: 0;
            border-radius: 50%;
            border: 5px solid blue;
        `;

        const InfoCont = styled.div`
            margin-top: 5%;
            width: 80%;
            margin-left: 10%;
            display: flex;
            flex-direction: column;
            color: black;
            font-weight: 800;
        `;

        const InputLabel = styled.label`
            color: gray;
            text-align: left;
            font-size: 1.5em;
            padding-bottom: 1%;
        `;



function Profile() {

    //===================================
    //== Setup Inputs from Semantic UI ==
    //===================================
    const InputName = () => <Input 
    type='button'
    onClick={() => {setShowName(true)}}
    icon='angle right' 
    transparent 
    size='massive' 
    style={{'marginBottom': "3%", "lineHeight": "1.75em"}}
    value={userName}
    />
    const InputPhone = () => <Input 
    type='button'
    onClick={() => {setShowPhone(true)}}
    icon='angle right' 
    transparent 
    size='massive' 
    style={{'marginBottom': "3%", "fontWeight": "800", "fontSize": "1.75em", 'color': 'black'}}
    value={userPhone}
    />
    const InputEmail = () => <Input 
    type='button'
    onClick={() => {setShowEmail(true)}}
    icon='angle right' 
    transparent 
    size='massive' 
    style={{'marginBottom': "3%", "fontWeight": "800", "fontSize": "1.75em", 'color': 'black'}}
    value={userEmail}
    />
    const InputBio = () => <Input 
    variant="primary"
    onClick={() => {setShowBio(true)}}
    type='button'
    maxLength="200"
    icon='angle right' 
    transparent 
    size='massive' 
    style={{'marginBottom': "3%", "font": "bold", "fontSize": "1.75em", 'color': 'black'}}
    value={userBio}
    />

const [ userName, setUserName ] = useState('John Smith');
const [ showName, setShowName] = useState(false);

const [ userPhone, setUserPhone ] = useState('(555)555-5555');
const [ showPhone, setShowPhone] = useState(false);

const [ userEmail, setUserEmail ] = useState('Email@gmail.com');
const [ showEmail, setShowEmail] = useState(false);

const [ userBio, setUserBio ] = useState('Some Info here... You know telling people about myself.');
const [ showBio, setShowBio] = useState(false);

  return (
    <PageCont>
        <HeaderCont>
            <PageHeader>
                Edit Profile
            </PageHeader>
            <ImageCont>
                <div>
                    <Icon className='pencil alternative large' style={{"position": "absolute", "backgroundColor": "white", "borderRadius": "50%", "padding": " 2vh 4vw 4vh 2vw", "left": "56%", "zIndex": "1005", "alignSelf": "center", "color": "blue"}}/>
                    <UserImage src='https://i.imgur.com/1fuWSVW.jpg'/>
                </div>
            </ImageCont>
        </HeaderCont>
        <InfoCont>
            <InputLabel>
                Name
            </InputLabel>
            <InputName/>
            <InputLabel>
                Phone
            </InputLabel>
            <InputPhone/>
            <InputLabel>
                Email
            </InputLabel>
            <InputEmail/>
            <InputLabel>
                Your Bio
            </InputLabel>
            <InputBio/>
            {showName && <NameModal setShowName={setShowName} userName={userName} setUserName={setUserName}/>}
            {showPhone && <PhoneModal setShowPhone={setShowPhone} userPhone={userPhone} setUserPhone={setUserPhone}/>}
            {showEmail && <EmailModal setShowEmail={setShowEmail} userEmail={userEmail} setUserEmail={setUserEmail}/>}
            {showBio && <BioModal setShowBio={setShowBio} userBio={userBio} setUserBio={setUserBio}/>}
        </InfoCont>
    </PageCont>
  )
}

export default Profile;