import React, {useMemo} from 'react'
import {useTable, usePagination} from 'react-table'
import MOCK_DATA from '../../data/MOCK_DATA.json'
import {COLUMNS, GROUPED_COLUMNS} from './columns'

export const PaginationTable = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        state,
        prepareRow
    } = useTable({
        columns,
        data,
        initialState: {pageIndex: 4}
    },
    usePagination
    )

    const { pageIndex, pageSize } = state;

    return (
        <>
            <table {...getTableProps()} className="table table-bordered">
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        page.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div>
                <span>
                    | Go to page: {' '}
                    <input type="number" defaultValue={pageIndex + 1} 
                    onChange={e => {
                        const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(pageNumber)
                    }}
                    style={{widht: '50px'}}
                    />
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <span>
                    Page {' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <select 
                    value={pageSize} 
                    onChange={(e) => setPageSize(Number(e.target.value))}
                >
                    {[10, 25, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
                <button className="btn btn-info" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
                <button className="btn btn-info" onClick={() => previousPage()} disabled={!canPreviousPage}>Preivous</button>
                <button className="btn btn-info" onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
                <button className="btn btn-info" onClick={() => gotoPage(pageCount-1)} disabled={!canNextPage}>{'>>'}</button>
            </div>
        </>
    )
}
