import React, {useMemo} from 'react'
import {useTable, useGlobalFilter, useFilters} from 'react-table'
import MOCK_DATA from '../../data/MOCK_DATA.json'
import { ColumnFilter } from './ColumnFilter'
import {COLUMNS, GROUPED_COLUMNS} from './columns'
import {GlobalFilter} from './GlobalFilter'

export const FilteringTable = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const defaultColumn = useMemo(() => {
        return {
            Filter: ColumnFilter
        }
    }, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter
    } = useTable({
        columns,
        data,
        defaultColumn
    }, useFilters, useGlobalFilter)


    const { globalFilter } = state

    return (
        <>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <table {...getTableProps()} className="table table-bordered">
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}
                                <div>{column.canFilter ? column.render('Filter') : null}</div>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
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
            <tfoot className="alert alert-dark">
                {footerGroups.map((footerGroup) => (
                    <tr {...footerGroup.getFooterGroupProps()}>
                        {footerGroup.headers.map((column) => (
                            <td {...column.getFooterProps}>{column.render('Footer')}</td>
                        ))}
                    </tr>
                ))}
            </tfoot>
        </table>
        </>
    )
}
