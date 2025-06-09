import { Card, Typography } from "@material-tailwind/react";
import { useRef, useState } from "react";
import { Input } from '@mui/material';
import { Edit } from '@mui/icons-material';

export default function StickyHeadTable() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('fdata')) || []);
  const [editData, setEditData] = useState(null);
  const [edit, setEdit] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const isAdmin = 'tigeraman55555@gmail.com';
  const dashData = JSON.parse(localStorage.getItem('dashData'));
  const findAdmin = dashData.find((item) => item.email === isAdmin);
  const TABLE_HEAD = findAdmin ? ["Name", "Email", "Phone Number", "Address", "D.O.B.", "ACTION"] : ["Name", "Email", "Phone Number", "Address", "D.O.B."];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  function editUser(id) {
    setEdit(true);
    setEditData(data.find((item) => item.id === id));
  }

  function updateUserDetails(updateID) {
    const updateData = data.map((item) => item.id === updateID ? { ...item, ...editData } : item);
    setData(updateData);
    localStorage.setItem('fdata', JSON.stringify(updateData));
    setEdit(false);
  }

  const filteredData = data.filter((record) =>
    record.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (record.ph && record.ph.includes(searchTerm)) ||
    (record.add && record.add.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredData.length / entriesPerPage);
  const displayedData = filteredData.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  return (
    <>
            <div className="flex justify-between items-center mb-4">
          <Input
            placeholder="Search..."
            value={searchTerm}
            onChange={e => { setSearchTerm(e.target.value); setCurrentPage(1); }}
            className="w-1/3 dark:!bg-[#1D1D1D] dark:!text-white"
          />
          
          <div className="flex items-center gap-2">
            <label htmlFor="entries" className="text-sm dark:text-white">Show</label>
            <select
              id="entries"
              value={entriesPerPage}
              onChange={e => { setEntriesPerPage(Number(e.target.value)); setCurrentPage(1); }}
              className="border px-2 py-1 rounded dark:bg-[#1D1D1D] dark:text-white dark:border-[#262626]"
            >
              {[1,5, 10, 20, 50].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
            <span className="text-sm dark:text-white">entries</span>
          </div>
        </div>
      <Card className="h-full w-full rounded border border-[#e5e5e5] dark:border-[#262626]">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-0 bg-[#F5F5F5] dark:bg-[#1D1D1D] p-4">
                  <Typography variant="small" className="font-normal opacity-70 dark:text-white">
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="dark:bg-[#171717] dark:text-white">
            {displayedData.map((record, index) => (
              <tr key={index} className="even:bg-blue-gray-50/50 border-b dark:border-[#262626]">
                <td className="p-4">{record.username}</td>
                <td className="p-4">{record.email}</td>
                <td className="p-4">{record.ph || "+91 xxx xxx xxxx"}</td>
                <td className="p-4">{record.add || "null"}</td>
                <td className="p-4">{record.dob || "just born"}</td>
                {findAdmin && (
                  <td className="p-4">
                    <span onClick={() => editUser(record.id)} className="flex items-center gap-2 cursor-pointer">
                      Edit <Edit className="!w-4" />
                    </span>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center p-4 bg-[#F5F5F5] dark:bg-[#1D1D1D]">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-sm dark:text-white">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </Card>
      {edit && <div className="setting-basic-info absolute z-10 top-[90px] right-[200px] p-6 bg-white dark:bg-[#1D1D1D] border-[1px] border-solid rounded-[8px] dark:border-[#262626] border-[#e5e5e5] pb-[84px]">
                    <div className="flex justify-between items-center">
                    <h2 className="basic-heading font-semibold text-[20px] dark:text-white text-[#171717]">Basic Info</h2>
                    <span className="text-[24px] mr-[10px] cursor-pointer" onClick={()=>setEdit(false)}>X</span>
                    </div>
                    {editData && <div className="grid grid-cols-12 gap-6 pt-6">
                        <div className="col-span-6">
                          <input type="text" value={editData.id} hidden/>
                            <label htmlFor="Name" className='dark:text-[#ffffffcc]'>First Name
                                <Input type='text' onChange={handleChange} name="username" id="fname" value={editData.username} placeholder="" className='w-full text-black 
                                dark:!text-white'
                                 sx={{
                                            '&.MuiInput-underline:before': {
                                                borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
                                            },
                                            '&.MuiInput-underline:hover:not(.Mui-disabled):before': {
                                                borderBottom: '2px solid rgba(0, 0, 0, 0.42)',
                                            },
                                            '&.MuiInput-underline:after': {
                                                borderBottom: '2px solid black',
                                            },
                                        }}/></label></div>
                        <div className="col-span-6">
                            <label htmlFor="" className='dark:text-[#ffffffcc]'>Phone Number
                                <Input type='' placeholder='' onChange={handleChange} value={editData.ph} name='ph' id='ph' className='w-full text-black 
                                dark:!text-white'
                                 sx={{
                                            '&.MuiInput-underline:before': {
                                                borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
                                            },
                                            '&.MuiInput-underline:hover:not(.Mui-disabled):before': {
                                                borderBottom: '2px solid rgba(0, 0, 0, 0.42)',
                                            },
                                            '&.MuiInput-underline:after': {
                                                borderBottom: '2px solid black',
                                            },
                                        }}/></label></div>
                        <div className="col-span-6">
                            <label htmlFor="" className='dark:text-[#ffffffcc]'>Email
                                <Input type='email' onChange={handleChange} value={editData.email} placeholder='' name='email' id='emel' className='w-full text-black 
                                dark:!text-white'
                                 sx={{
                                            '&.MuiInput-underline:before': {
                                                borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
                                            },
                                            '&.MuiInput-underline:hover:not(.Mui-disabled):before': {
                                                borderBottom: '2px solid rgba(0, 0, 0, 0.42)',
                                            },
                                            '&.MuiInput-underline:after': {
                                                borderBottom: '2px solid black',
                                            },
                                        }}/></label></div>
                        <div className="col-span-6">
                            <label htmlFor="" className='dark:text-[#ffffffcc]'>confirmation email
                                <Input type='' placeholder='' name='' id='' className='w-full text-black 
                                dark:!text-white'
                                 sx={{
                                            '&.MuiInput-underline:before': {
                                                borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
                                            },
                                            '&.MuiInput-underline:hover:not(.Mui-disabled):before': {
                                                borderBottom: '2px solid rgba(0, 0, 0, 0.42)',
                                            },
                                            '&.MuiInput-underline:after': {
                                                borderBottom: '2px solid black',
                                            },
                                        }}/></label></div>                
                        <div className="col-span-4">
                            <label htmlFor="" className='dark:text-[#ffffffcc]'>I'm
                                <Input type='' placeholder='' value={'Sigma'} name='sex' id='male' className='w-full text-black 
                                dark:!text-white'
                                 sx={{
                                            '&.MuiInput-underline:before': {
                                                borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
                                            },
                                            '&.MuiInput-underline:hover:not(.Mui-disabled):before': {
                                                borderBottom: '2px solid rgba(0, 0, 0, 0.42)',
                                            },
                                            '&.MuiInput-underline:after': {
                                                borderBottom: '2px solid black',
                                            },
                                        }}/></label></div>
                        <div className="col-span-3">
                            <label htmlFor="" className='dark:text-[#ffffffcc]'>Birth Date
                                <Input type='' onChange={handleChange} placeholder='' name='dob' id='' value={editData.dob} className='w-full text-black 
                                dark:!text-white'
                                 sx={{
                                            '&.MuiInput-underline:before': {
                                                borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
                                            },
                                            '&.MuiInput-underline:hover:not(.Mui-disabled):before': {
                                                borderBottom: '2px solid rgba(0, 0, 0, 0.42)',
                                            },
                                            '&.MuiInput-underline:after': {
                                                borderBottom: '2px solid black',
                                            },
                                        }}/></label></div>
                        <div className="col-span-3">
                            <label htmlFor="" className='dark:text-[#ffffffcc]'>month
                                <Input type='' placeholder='' name='' id='' className='w-full text-black 
                                dark:!text-white'
                                 sx={{
                                            '&.MuiInput-underline:before': {
                                                borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
                                            },
                                            '&.MuiInput-underline:hover:not(.Mui-disabled):before': {
                                                borderBottom: '2px solid rgba(0, 0, 0, 0.42)',
                                            },
                                            '&.MuiInput-underline:after': {
                                                borderBottom: '2px solid black',
                                            },
                                        }}/></label></div>
                        <div className="col-span-2">
                            <label htmlFor="" className='dark:text-[#ffffffcc]'>year
                                <Input type='' placeholder='' name='' id='' className='w-full text-black 
                                dark:!text-white'
                                 sx={{
                                            '&.MuiInput-underline:before': {
                                                borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
                                            },
                                            '&.MuiInput-underline:hover:not(.Mui-disabled):before': {
                                                borderBottom: '2px solid rgba(0, 0, 0, 0.42)',
                                            },
                                            '&.MuiInput-underline:after': {
                                                borderBottom: '2px solid black',
                                            },
                                        }}/></label></div>
                        
                        <div className="col-span-6">
                            <label htmlFor="" className='dark:text-[#ffffffcc]'>your Location
                                <Input type='' placeholder='' onChange={handleChange} value={editData.add} name='add' id='' className='w-full text-black 
                                dark:!text-white'
                                 sx={{
                                            '&.MuiInput-underline:before': {
                                                borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
                                            },
                                            '&.MuiInput-underline:hover:not(.Mui-disabled):before': {
                                                borderBottom: '2px solid rgba(0, 0, 0, 0.42)',
                                            },
                                            '&.MuiInput-underline:after': {
                                                borderBottom: '2px solid black',
                                            },
                                        }}/></label></div>
                        
                        <div className="col-span-6">
                            <label htmlFor="" className='dark:text-[#ffffffcc]'>Language
                                <Input type='' placeholder='' name='lang' id='' className='w-full text-black 
                                dark:!text-white'
                                 sx={{
                                    '&.MuiInput-underline:before': {
                                        borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
                                    },
                                    '&.MuiInput-underline:hover:not(.Mui-disabled):before': {
                                        borderBottom: '2px solid rgba(0, 0, 0, 0.42)',
                                    },
                                    '&.MuiInput-underline:after': {
                                        borderBottom: '2px solid black',
                                    },
                                }}/></label></div>
                        <div className="col-span-6">""
                            <label htmlFor="" className='dark:text-[#ffffffcc]'>
                                <Input type='' placeholder='' name='' id='' className='w-full text-black 
                                dark:!text-white'
                                 sx={{
                                    '&.MuiInput-underline:before': {
                                        borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
                                    },
                                    '&.MuiInput-underline:hover:not(.Mui-disabled):before': {
                                        borderBottom: '2px solid rgba(0, 0, 0, 0.42)',
                                    },
                                    '&.MuiInput-underline:after': {
                                        borderBottom: '2px solid black',
                                    },
                                }}/></label>
                        </div>
                        <button className="Update-pass cursor-pointer absolute right-6 bottom-6 mt-6 inline-flex justify-center whitespace-nowrap rounded-lg  bg-gradient-to-br from-[#42424a] to-[#191919]  px-3.5 py-2.5 text-sm font-medium text-white dark:text-white shadow-sm shadow-indigo-950/10 hover:custom-shadow focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" onClick={()=>updateUserDetails(editData.id)}>Update User Details</button>
                    </div>}     
      </div>}
    
    </>
  );
}