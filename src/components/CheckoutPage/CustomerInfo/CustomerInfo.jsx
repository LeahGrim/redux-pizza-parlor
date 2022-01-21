

function CustomerInfo({ customerInfo }) {


    return (
        <table>
            <tbody>
                <tr>
                    <td>{customerInfo.name}</td>
                </tr>
                <tr>
                    <td>{customerInfo.address}</td>
                </tr>
                <tr>
                    <td>{customerInfo.city}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default CustomerInfo;