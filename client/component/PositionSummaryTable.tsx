import React from 'react';
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';

interface DataType {
  key: React.Key;
  Symbol: string;
  Position: string;
  Weight: number;
  EntryDate: string,
  Entry: number,
  AvgCost: number,
  FromEntry: number,
  FromAvgCost: number
}

const columns: ColumnsType<DataType> = [
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
    title: 'EntryDate',
    dataIndex: 'EntryDate',
    sorter: (a, b) => a.EntryDate.length - b.EntryDate.length
  },
  {
    title: 'Entry',
    dataIndex: 'Entry',
    sorter: (a, b) => a.Entry - b.Entry
  },
  {
    title: 'AvgCost',
    dataIndex: 'AvgCost',
    sorter: (a, b) => a.AvgCost - b.AvgCost
  },
  {
    title: 'FromEntry',
    dataIndex: 'FromEntry',
    sorter: (a, b) => a.FromEntry - b.FromEntry
  },
  {
    title: 'FromAvgCost',
    dataIndex: 'FromAvgCost',
    sorter: (a, b) => a.FromAvgCost - b.FromAvgCost
  },
];

const PositionSummaryTable = ({positionSummary}: {positionSummary: DataType[]}) =>{
    return (<div>
        <div><b>POSITIONS SUMMARY</b></div>
        <div>Data as of June 16 close. Invested percentage: 87%</div>
        <Table columns={columns} dataSource={positionSummary} />
    </div>)
}

export default PositionSummaryTable;