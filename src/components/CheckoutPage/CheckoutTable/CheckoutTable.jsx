function CheckoutTable({order}) {

    let pizzas = order.pizzas;
    let total = order.total;
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                {
                    pizzas.map(pizza => (
                        <tr key={pizza.id}>
                            <td>{pizza.pizza}</td>
                            <td>{pizza.cost}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <div>
                <h3>Total: {total}</h3>
        </div>
        </>
    )
}

export default CheckoutTable;