import styled from 'styled-components'

export const BgContainer = styled.div`
    box-sizing: border-box;
    margin: 0;
    padding: 16px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
`
export const ImageContainer = styled.div``
export const EmptyListImage = styled.img`
width: 280px;
height: 200px;
margin: 100px;
`
export const CharacterCounterDescription = styled.h1`
color:  #334155;
font-size: 32px;
font-weight: 600;
font-family: "Roboto";
`
export const CharacterCounterHeading = styled.h1`
color:  #ffbf1f;
font-size: 32px;
font-weight: 600;
font-family: "Roboto";
`
export const LeftCard = styled.div`
    background-color:  #ffc533;
    box-sizing: border-box;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 500px;
    width: 600px;
    border-radius:16px 0 0 16px;
`

export const RightCard = styled.div`
    background-color:  #0f172a;
    box-sizing: border-box;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 500px;
    width: 600px;
    border-radius: 0 16px 16px 0 ;
    

`

export const ListContainer = styled.ul`
    list-style-type: none;
    padding-left: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    overflow: auto;
    height: 280px;
    width: 100%;
    background-color:  #ffbf1f;

      &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #ffbf1f;
        border-radius: 4px;

  }

  &::-webkit-scrollbar-thumb {
    background-color: #ffbf1f;
    border-radius: 4px;
    border: 2px solid #334155;
  }
`

export const DisplayResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    
`

export const ErrorMessageDescription = styled.p`
color: red;
font-size: 12px;
font-weight: 400;
margin: 0 16px;
`

export const InputStyle = styled.input`
width: 360px;
height: 48px;
margin: 16px;
padding: 16px;
border-radius: 8px;
color: #334155;
font-size: 14px;
outline: none;
border: none;
box-shadow: 0 0 2px 2px  #ffbf1f;
`

export const SubmitButton = styled.button`
height: 48px;
margin: 16px;
border-radius: 8px;
background-color: #ffc533;
color: #334155;
font-size: 14px;
font-weight: 600;
box-sizing: border-box;
padding: 8px 16px;
cursor: pointer;
outline: none;
`
