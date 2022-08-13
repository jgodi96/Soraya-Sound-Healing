import './intro-header.styles'
import {SorayaTitleStyle} from './intro-header.styles'
import {ReactComponent as SorayaTitle} from '../../assets/soraya.svg'
const IntroHeader = () =>{
    return (
        <SorayaTitleStyle>
            
            <SorayaTitle className='soraya-title'/>
        </SorayaTitleStyle>
    )
}

export default IntroHeader