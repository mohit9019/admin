const Table = ({ id, headers, data }) => (
    <>
    <div className="table-background">
    <div className="user-table">
      <table className="table-cont"> 
        <tbody>
          <tr>
            {headers.map(({ keys, name }) => (
              <th className="table-header" key={keys}>{name}</th>
            ))}
          </tr>
          {data.map((rowData) => (
            <tr className="table-row" key={rowData[id]}>
              {headers.map(({ keys }) => (
                <td className="table-column" key={keys}>
                  {rowData[keys]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
      </>
    );
export default Table;