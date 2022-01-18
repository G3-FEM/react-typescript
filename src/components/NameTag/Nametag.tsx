import './Nametag.css';


export type NameTagPros = {
    name : string,
    active: boolean,
    empId : number,
    depts : string[]
}

const NameTag = (props : NameTagPros) => {
    return (
        <div className='name-tag'>
            <div className={props.active? "name-tag-header active" : "name-tag-header"} >
                <h1>
                Hello !!
                </h1>
                <p>
                My Employee Id is {props.empId}
                </p>
            </div>
            <section className="name-tag-main">
                <p className="name-tag-display">{props.name}</p>
                <div>
                {props.depts.map(item => (
                    <span>{item}</span>
                ))}
                </div>
            </section>
            <footer className="name-tag-footer">

            </footer>
        </div>
    )

    
}

export default NameTag;