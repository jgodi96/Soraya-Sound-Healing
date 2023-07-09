import './landing-content.styles.scss'
const LandingContent = (props) => {
    return(
    <section className="landing-content-container">{props.children}</section>
    )
}

export default LandingContent 