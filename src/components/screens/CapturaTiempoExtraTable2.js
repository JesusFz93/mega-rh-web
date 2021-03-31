import React, {useMemo,useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {useTable, usePagination, useRowSelect} from 'react-table'
import MOCK_DATA from '../../data/MOCK_DATA.json'
import {COLUMNS} from './CapturaTeColumns'
import { CapturaTeButton } from './CapturaTeButton'

export const CapturaTiempoExtraTable = ({locals}) => {

    

    const {elementos} = useSelector(state => state.dbReducer)

    const [ element, setElement ] = useState({});

    useEffect(() => {
        setElement(JSON.parse(localStorage.getItem("lista")));
      }, [elementos])

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => locals, [])

    let props = {
        imageUrl:"",
        imageText:''
        }
    
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
        prepareRow,
        selectedFlatRows
    } = useTable({
        columns,
        data,
        initialState: {pageIndex: 0}
    },
    usePagination,
    useRowSelect,
    (hooks) => {
        hooks.visibleColumns.push((columns) => {
                return [
                    ...columns,
                    {
                        id: 'selection',
                        Header: 'ops',
                        Cell: ({row})=>(
                            <CapturaTeButton index={{...row}} lista={locals} />
                        )
                    }
                ]
            })
        }
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
            <pre>
                <code>
                    {JSON.stringify(
                        {
                            selectedFlatRows: selectedFlatRows.map((row) => row.original),
                        },
                        null,
                        2
                    )}
                </code>
            </pre>
        </>
    )
}
