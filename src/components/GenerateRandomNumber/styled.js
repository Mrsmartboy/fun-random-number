import styled from 'styled-components'

export const RandomContainer=styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-image: url("https://assets.ccbp.in/frontend/react-js/random-no-generator-bg.png");
      background-size: cover;
      min-height: 100vh;
`
export const CardContainer= styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  text-align: center;
  box-shadow: 2px 2px 5px 5px #e4ebf3;
  border-radius: 10px;
  padding: 20px;
`

export const Header = styled.h1`
  color: #0b69ff;
  font-size: 30px;
  font-weight: bold;

`

export const Description = styled.p`
   font-size: 15px;
   font-weight: 400;
   width: 250px;
   color: #333333;
`

export const Button = styled.button`
  padding: 10px;
  background-color: #0b69ff;
  border-radius: 5px;
  border: none;
  outline: none;
  color: #ffffff;
  cursor: pointer;

`

export const Random = styled.p`
    color: #0b69ff;
    font-size: 30px;
    font-weight: bold;
    
`