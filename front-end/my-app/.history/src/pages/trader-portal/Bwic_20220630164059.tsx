import {  Button,List ,Space,Table,Tag,Input} from "antd";
import { useEffect } from "react";
import { BwicItem,BwicItems } from "../../Model/Bwic.model";
import { useAppDispatch, useAppSelector } from "../../stores/hook";
import { addBwicAsync1 } from "../../stores/bwicSlice";
import type { ColumnsType, TableProps, ColumnType } from 'antd/lib/table';
import { SearchOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';
import type { FilterConfirmProps } from 'antd/lib/table/interface';
import React, { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { addBwicApi, getBwicApi } from "../../api/bwic.api";


const {Column,ColumnGroup}=Table;
const {Search}=Input;
const onSearch=(value:string)=>console.log(value);
// const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
//   console.log('params', pagination, filters, sorter, extra);
// };


// type DataIndex = keyof BwicItem;


// const BwicPage: React.FC = () => {
//   const bwic = useAppSelector((state) => state.bwic);
//   //const data:bwic?.AddedBwic[];
//   const dispatch = useAppDispatch();
//   console.log("Bwic Status", bwic.status);

//   useEffect(() => {
//     dispatch(
//       addBwicAsync({
//         cusip: "cuisp1",
//         issuer: "issuer1",
//         dueDate: new Date(),
//         owner: "owner",
//         clientId: "owner",
//         size: 1000,
//         price: 100,
//       } as BwicItem)
//     );
//   }, []);
//   const [searchText, setSearchText] = useState('');
//   const [searchedColumn, setSearchedColumn] = useState('');
//   const searchInput = useRef<InputRef>(null);

//   const handleSearch = (
//     selectedKeys: string[],
//     confirm: (param?: FilterConfirmProps) => void,
//     dataIndex: DataIndex,
//   ) => {
//     confirm();
//     setSearchText(selectedKeys[0]);
//     setSearchedColumn(dataIndex);
//   };

//   const handleReset = (clearFilters: () => void) => {
//     clearFilters();
//     setSearchText('');
//   };

//   const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<BwicItem> => ({
//     filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
//       <div style={{ padding: 8 }}>
//         <Input
//           ref={searchInput}
//           placeholder={`Search ${dataIndex}`}
//           value={selectedKeys[0]}
//           onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
//           onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
//           style={{ marginBottom: 8, display: 'block' }}
//         />
//         <Space>
//           <Button
//             type="primary"
//             onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
//             icon={<SearchOutlined />}
//             size="small"
//             style={{ width: 90 }}
//           >
//             Search
//           </Button>
//           <Button
//             onClick={() => clearFilters && handleReset(clearFilters)}
//             size="small"
//             style={{ width: 90 }}
//           >
//             Reset
//           </Button>
//           <Button
//             type="link"
//             size="small"
//             onClick={() => {
//               confirm({ closeDropdown: false });
//               setSearchText((selectedKeys as string[])[0]);
//               setSearchedColumn(dataIndex);
//             }}
//           >
//             Filter
//           </Button>
//         </Space>
//       </div>
//     ),
//     filterIcon: (filtered: boolean) => (
//       <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
//     ),
//     onFilter: (value, record) =>
//       record[dataIndex]
//         .toString()
//         .toLowerCase()
//         .includes((value as string).toLowerCase()),
//     onFilterDropdownVisibleChange: visible => {
//       if (visible) {
//         setTimeout(() => searchInput.current?.select(), 100);
//       }
//     },
//     render: text =>
//       searchedColumn === dataIndex ? (
//         <Highlighter
//           highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
//           searchWords={[searchText]}
//           autoEscape
//           textToHighlight={text ? text.toString() : ''}
//         />
//       ) : (
//         text
//       ),
//   });

//   const columns: ColumnsType<BwicItem> = [
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name',
//       width: '30%',
//       ...getColumnSearchProps('name'),
//     },
//     {
//       title: 'Age',
//       dataIndex: 'age',
//       key: 'age',
//       width: '20%',
//       ...getColumnSearchProps('age'),
//     },
//     {
//       title: 'Address',
//       dataIndex: 'address',
//       key: 'address',
//       ...getColumnSearchProps('address'),
//       sorter: (a, b) => a.address.length - b.address.length,
//       sortDirections: ['descend', 'ascend'],
//     },
//   ];

//   return <Table columns={columns} dataSource={bwic?.AddedBwic} />;
// };
const columns: ColumnsType<BwicItems> = [
  {
    title:'ID',
    dataIndex:'id',
    width: '40%',
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: 'Cusip',
    dataIndex: 'cusip',
    key:'cusip',
    filters: [
      {
        text: 'cuisp1',
        value: 'cuisp1',
      },
      {
        text: 'Category 1',
        value: 'Category 1',
      },
      {
        text: 'Category 2',
        value: 'Category 2',
      },
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value:any, record) => record.cusip.startsWith(value),
    width: '30%',
  },

  // {
  //   title: 'Issuer',
  //   dataIndex: 'issuer',
  //   filters: [
  //     {
  //       text: <span>issuer1</span>,
  //       value: 'issuer1',
  //     },
  //     {
  //       text: <span>New York</span>,
  //       value: 'New York',
  //     },
  //   ],
  //   onFilter: (value: any, record) => record.issuer.startsWith(value),
  //   filterSearch: true,
  //   width: '40%',
  // },
  {
    title:'dueDate',
    dataIndex:'dueDate',
    width: '40%',
  },
  // {
  //   title:'Owner',
  //   dataIndex:'owner',
  //   width: '40%',
  // },
  // {
  //   title:'ClinetId',
  //   dataIndex:'clientId',
  //   width: '40%',
  // },
  {
    title: 'Size',
    dataIndex: 'size',
    sorter: (a, b) => a.size - b.size,
  },
  {
    title: 'StartingPrice',
    dataIndex: 'startingprice',
    sorter: (a, b) => a.startingprice - b.startingprice,
  },
];

const onChange: TableProps<BwicItems>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
// const initateBwic1 = {
//   id:123,
//   cusip: "cusip1",
//   size:23,
//   startingprice:231,
//   duedate:"2022-11-11 10:10:10"
// } as BwicItems;

const BwicPage: React.FC = () => {  
  const bwic = useAppSelector((state) => state.bwic);
  //const data:bwic?.AddedBwic[];
  const dispatch = useAppDispatch();
  console.log("Bwic Status", bwic.status);

  // async function dda(){
  //   console.log("dddddddddddd");
  //   const {data}=await addBwicApi(initateBwic1);
  //   setddd(data.cusip);
  // }

  useEffect(() => {
    dispatch(
      addBwicAsync1({
          //id: number;
          cusip: "cusip1",
          size: 1000,
          startingprice:100,
          duedate: "2022-06-27",
      }as BwicItems)
    );
    
//dda();
  }, []);
  // const [ddd,setddd]=useState<string>("123");
  // return(<div>{ddd}</div>);
  const [ddd,setddd]=useState<BwicItems[]>();
  const onClick = async () => {
    const { success, data } = await getBwicApi();
    console.log(1111);
    console.log(data);
    setddd(data);
  }//bwic?.AddedBwic
  return(
    <div>  
      <Button title="刷新" onClick={onClick}/>
      <Table columns={columns} dataSource={ddd} onChange={onChange} key="cuisp" />
    </div>);
}

// const BwicPage: React.FC = () => {
//   const bwic = useAppSelector((state) => state.bwic);
//   //const data:bwic?.AddedBwic[];
//   const dispatch = useAppDispatch();
//   console.log("Bwic Status", bwic.status);

//   useEffect(() => {
//     dispatch(
//       addBwicAsync({
//         cusip: "453012O20",
//         issuer: "issuer1",
//         dueDate: new Date(),
//         owner: "owner",
//         clientId: "owner",
//         size: 1000,
//         price: 100,
//       } as BwicItem)
//     );
//   }, []);
//   return (
//     // <div>
//     //   <List<string>
//     //     size="small"
//     //     grid={{ gutter: 19, column: 1 }}
//     //     dataSource={bwic?.AddedBwic}
//     //     renderItem={(item) => <List.Item>{item}</List.Item>}
//     //   />

//     // </div>
//     <div>
//     <Search placeholder="input search text" onSearch={onSearch} enterButton/>
//     <Table dataSource={bwic?.AddedBwic}>
//       <Column title="Cuisp" dataIndex="cuisp" key='cusip'/>
//       <Column title="Issuer" dataIndex="issuer" key='issuer'/>
//       <Column title="dueDate" dataIndex="dueDate" key='dueDate'/>
//       <Column title="owner" dataIndex="owner" key='owner'/>
//       <Column title="ClientId" dataIndex="clientId" key='clientId'/>
//       <Column title="Size" dataIndex="size" key='size'/>
//       <Column title="Price" dataIndex="price" key='price'/>
//       {/* <Column title="Action" key="action" 
//       render={
//         ()=>(
//           <Space size="middle">
//             <a>Delete</a>
//           </Space>
//         )
//       }/> */}
//     </Table>
//     </div>
//   );
// };

export default BwicPage;