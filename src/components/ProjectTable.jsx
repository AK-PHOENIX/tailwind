import React from 'react'
import StickyHeadTable  from './StickyHeadTable'

const ProjectTable = () => {
  return (
    <>
        <div className="Data-tables p-6 bg-white dark:bg-[#1D1D1D] border-[1px] border-solid rounded-[8px] dark:border-[#262626] border-[#e5e5e5] mb-6">
            <div className="pb-6">
                <h2 className="data-heading text-[20px] font-bold dark:text-white text-[#171717]">Datatable Products</h2>
                <p className="data-p text-[16px] sm:text-[18px] dark:text-[#ffffffcc] text-[#737373]">A lightweight, extendable, dependency-free javascript HTML table plugin.</p>
            </div>
            <StickyHeadTable />
        </div>
    </>
  )
}

export default ProjectTable