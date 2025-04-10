import { getCoreRowModel, useReactTable , getPaginationRowModel } from '@tanstack/react-table'
import React, { useMemo , useEffect} from 'react'
import Mock_data from "./data/data.json"
import { COLUMNS } from './data/columns'



export default function EmployeeTable() {
      // momoizing the data/columns for better performence

      const data = useMemo(()=>Mock_data  , []) ;
      const columns = useMemo(()=>COLUMNS , []) ; 


    const tableInstance = useReactTable({
        data , 
        columns,
        getCoreRowModel: getCoreRowModel(), 
        getPaginationRowModel: getPaginationRowModel(),
    })

    const {
      getHeaderGroups,
      getRowModel
    } = tableInstance;

    useEffect(()=>{
      tableInstance.setPageSize(8)
    },[tableInstance])

    
  return (
    // Displayed Table 
    <div className="flex flex-col items-center w-full px-2">
    <div className="w-full overflow-x-auto">
      <table className="min-w-[600px] w-full table-auto border-collapse rounded-lg overflow-hidden shadow-md">
        <thead className="bg-gray-800 text-white text-xs sm:text-sm">
          {getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-4 sm:px-6 py-3 text-left font-medium tracking-wider uppercase"
                >
                  {header.column.columnDef.header}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="divide-y divide-gray-200 bg-gray-800 text-gray-200 text-xs sm:text-sm">
          {getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-700 transition-colors">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 sm:px-6 py-4">
                  {cell.getValue()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  
    {/* Pagination Buttons */}
    <div className="flex flex-col sm:flex-row items-center mt-4 gap-2 w-full justify-center">
      <button
        className="w-full sm:w-auto px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-400 transition-colors duration-150 disabled:opacity-50"
        onClick={() => tableInstance.previousPage()}
        disabled={!tableInstance.getCanPreviousPage()}
      >
        Previous
      </button>
  
      <span className="text-sm text-gray-100">
        Page {tableInstance.getState().pagination.pageIndex + 1} of {tableInstance.getPageCount()}
      </span>
  
      <button
        className="w-full sm:w-auto px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-400 transition-colors duration-150 disabled:opacity-50"
        onClick={() => tableInstance.nextPage()}
        disabled={!tableInstance.getCanNextPage()}
      >
        Next
      </button>
    </div>
  </div>
  
    );    
}
