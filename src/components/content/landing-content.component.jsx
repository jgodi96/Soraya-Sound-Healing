import './landing-content.styles.scss'
const LandingContent = (props) => {
    return(
    <div className="landing-content-container">{props.children}</div>
    )
}

export default LandingContent 