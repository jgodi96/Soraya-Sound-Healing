import './sub-content.styles.scss'
const SubContent = (props) => {
    return(
    <div className="sub-content-container">{props.children}</div>
    )
}

export default SubContent