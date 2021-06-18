import Filters from "../Components/Filters"

export default function Datalogs({budget}) {
    return (
        <div>
            <h2 className="indexinfo">Index</h2>
            <Filters budget={budget}/>

        </div>
    )
}
