import {useState} from 'react'
import {RandomContainer,CardContainer,Header,Description,Button,Random} from './styled'
const GenerateRandomNumber=()=>{
    const [randomNumber,setRandomNumber]= useState(0)
    const onClickRandomNumber=()=>{
        const randomNumber=Math.floor(Math.random()*100)
        setRandomNumber(randomNumber)
    }

    return(
        <RandomContainer>
            <CardContainer>
                <Header>
                    Random Number
                </Header>
                <Description>Generate a Random Number in the range of 0 to 100</Description>
                <Button type='button' onClick={onClickRandomNumber}>Generate</Button>
                <Random>{randomNumber}</Random>
            </CardContainer>

        </RandomContainer>
    )

}

export default GenerateRandomNumber