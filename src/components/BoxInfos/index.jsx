import PropTypes from "prop-types"
import "./styles.css"

BoxInfos.propTypes = {
    infoTitulo: PropTypes.string,
    infoQntd: PropTypes.number
}

export default function BoxInfos({ infoTitulo, infoQntd }) {
    return (
        <div className="BoxInfos">
            <p>{infoTitulo}</p>
            <h1>{infoQntd}</h1>
        </div>
    )
}