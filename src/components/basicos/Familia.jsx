
import FamiliaMembro from "./FamiliaMembro"

export default props => {

    return (
        <div>
            <FamiliaMembro nome="Mario" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Klecia" {...props}/>
            <FamiliaMembro nome="Mario Filho" sobrenome="Silva"/>
        </div>
    )
}