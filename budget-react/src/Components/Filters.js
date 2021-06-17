import MapingLogs from './MapingLogs'

export default function Filters({budget }) {
     const value = 1000
    return (
        <div>
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <h1 className="mybank">Bank Account Total: ${value}</h1>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {budget.map((neto, index) =>{ return  <MapingLogs key={index} neto={neto} index={index} />})}
                    </tbody>
                </table>
            </section>
            
        </div>
    )
}
