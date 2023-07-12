import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { PositionSummaryContract } from "@/contracts";

const columns: ColumnsType<PositionSummaryContract> = [
  {
    title: 'Symbol',
    dataIndex: 'Symbol',
    sorter: (a, b) => a.Symbol.length - b.Symbol.length
  },
  {
    title: 'Position',
    dataIndex: 'Position',
    sorter: (a, b) => a.Position.length - b.Position.length
  },
  {
    title: 'Weight',
    dataIndex: 'Weight',
    sorter: (a, b) => a.Weight - b.Weight
  },
  {
    title: 'Entry Date',
    dataIndex: 'EntryDate',
    sorter: (a, b) => a.EntryDate.length - b.EntryDate.length
  },
  {
    title: 'Entry',
    dataIndex: 'Entry',
    sorter: (a, b) => a.Entry - b.Entry
  },
  {
    title: 'Avg.Cost',
    dataIndex: 'AvgCost',
    sorter: (a, b) => a.AvgCost - b.AvgCost
  },
  {
    title: '%From Entry',
    dataIndex: 'FromEntry',
    sorter: (a, b) => a.FromEntry - b.FromEntry
  },
  {
    title: '%From Avg.Cost',
    dataIndex: 'FromAvgCost',
    sorter: (a, b) => a.FromAvgCost - b.FromAvgCost
  },
];

const PositionSummaryTable = ({positionSummary}: {positionSummary: PositionSummaryContract[]}) =>{
    return (
    <div className='ml-2 w-[881px] overflow-auto'>
      <div className='text-lg leading-[22px] text-[#222] font-normal'>
        POSITIONS SUMMARY
      </div>
      <div className='text-sm leading-[17px] text-[#222] font-light mb-[10px]'>
        Data as of June 16 close. Invested percentage: 87%
      </div>
      <Table 
        className='border border-[#ddd]'
        columns={columns} 
        dataSource={positionSummary}
        key={(_, i) => i}
        pagination={false}  />
    </div>)
}

export default PositionSummaryTable;