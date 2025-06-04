import { Card, Typography } from "@material-tailwind/react";
import { useRef, useState } from "react";
import { Input } from '@mui/material'
const TABLE_HEAD = ["Name", "Email", "Phone Number", "Address", "D.O.B.",  "ACTION"];

const data = JSON.parse(localStorage.getItem('fdata')) || [];
export default function StickyHeadTable() {
  const [tableData , setTableData] = useState({});
  const [edit, setEdit] = useState(false);
  const username = useRef('');
  const email = useRef('');
  const upId = useRef('');
  const ph = useRef('');
  const add = useRef('');
  const dob = useRef('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    // if (name === 'username') {
    //     seterror((prev) => ({
    //         ...prev,
    //         username: "Username must contain only text",
    //     }));
    // }
    // else if (name === 'email') {
    //     seterror((prev) => ({
    //         ...prev,
    //         email: 'Please enter a valid email.',
    //     }));
    // } else if (name === 'phone') {
    //     seterror((prev) => ({
    //         ...prev,
    //         phone: 'Phone number must be numeric.',
    //     }));
    // } 
    // else if (name === 'pass' ) {
    //     seterror((prev) => ({
    //         ...prev,
    //         pass: `requires 8 digit long 
    //         strong password`,
    //     }));
    // } 
    // else if (name === 'ph' ) {
    //     seterror((prev) => ({
    //         ...prev,
    //         pass: `requires 8 digit long 
    //         strong password`,
    //     }));
    // } 
    // else if (name === 'add' ) {
    //     seterror((prev) => ({
    //         ...prev,
    //         pass: `requires 8 digit long 
    //         strong password`,
    //     }));
    // } 
    // else {
    //     seterror((prev) => ({
    //         ...prev,
    //         [name]: '',
    //     }));
    // }
    setTableData({...tableData, [e.target.name]: e.target.value });
    console.log(tableData);
};

  function editUser(id){
    setEdit(true);
    const editData = data.find((item)=> item.id === id);
    console.log(editData);
    username.value = editData.username;
    email.value = editData.email;
    upId.value = editData.id;
  }
  function updateUserDetails(updateID){
    const updateData = data.map((item)=> item.id == updateID ? {...item , ...tableData} : item);
    console.log(updateData);
    localStorage.setItem('fdata',JSON.stringify(updateData));
  }
  return (
    <>
      <Card className={`h-full w-full !rounded-[0px] border-[0.1px] border-[#e5e5e5] dark:border-[#262626]`}>
      <table className="w-full min-w-max table-auto text-left  rounded-[8px]">
        <thead>
          <tr className="rounded-t-[8px]">
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-0  border-blue-gray-100 bg-[#F5F5F5] dark:bg-[#1D1D1D] bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70 dark:text-white"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="dark:bg-[#171717] dark:text-white">
          {data && data.map(( record , index) => {
            return (
            <tr key={index} className="even:bg-blue-gray-50/50 border-b border-[#e5e5e5] dark:border-[#262626]">
              <td className="p-4 ">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {record.username}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {record.email}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {record.ph ? record.ph : "+91 xxx xxx xxxx"}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {record.add ? record.add : "null"}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {record.dob ? record.dob : "just born"}
                </Typography>
              </td>
              <td className="p-4">
                <Typography  variant="small" color="blue-gray" className="font-medium cursor-pointer">
                  <span onClick={()=>editUser(record.id)}>Edit</span>
                </Typography>
              </td>
            </tr>
          )})}
        </tbody>
      </table>
      </Card>
      {edit && <div className="setting-basic-info absolute z-10 top-[90px] right-[200px] p-6 bg-white dark:bg-[#1D1D1D] border-[1px] border-solid rounded-[8px] dark:border-[#262626] border-[#e5e5e5] pb-[84px]">
                    <div className="flex justify-between items-center">
                    <h2 className="basic-heading font-semibold text-[20px] dark:text-white text-[#171717]">Basic Info</h2>
                    <span className="text-[24px] mr-[10px] cursor-pointer" onClick={()=>setEdit(false)}>X</span>
                    </div>
                    <div className="grid grid-cols-12 gap-6 pt-6">
                        <div className="col-span-6">
                          <input type="text" ref={upId} value={upId.value} hidden/>
                            <label htmlFor="First Name" className='dark:text-[#ffffffcc]'>First Name
                                <Input type='text' onChange={handleChange} name="firstname" id="fname" ref={username} value={username.value} placeholder='Kumar' className='w-full text-black 
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
                            <label htmlFor="" className='dark:text-[#ffffffcc]'>Last Name (optional)
                                <Input type='text'  name="lastname" id="lname" className='w-full text-black 
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
                                <Input type='' placeholder='' value={'Sigma'} name='male' id='male' className='w-full text-black 
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
                                <Input type='' onChange={handleChange} placeholder='' name='dob' id='' ref={dob} value={dob.value} className='w-full text-black 
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
                            <label htmlFor="" className='dark:text-[#ffffffcc]'>Email
                                <Input type='email' onChange={handleChange} ref={email} value={email.value} placeholder='' name='email' id='emel' className='w-full text-black 
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
                        <div className="col-span-6">
                            <label htmlFor="" className='dark:text-[#ffffffcc]'>your locataion
                                <Input type='' placeholder='' onChange={handleChange} ref={add} value={add.value} name='add' id='' className='w-full text-black 
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
                                <Input type='' placeholder='' onChange={handleChange} ref={ph} value={ph.value} name='ph' id='ph' className='w-full text-black 
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
                    </div>
                    <button className="Update-pass cursor-pointer absolute right-6 bottom-6 mt-6 inline-flex justify-center whitespace-nowrap rounded-lg  bg-gradient-to-br from-[#42424a] to-[#191919]  px-3.5 py-2.5 text-sm font-medium text-white dark:text-white shadow-sm shadow-indigo-950/10 hover:custom-shadow focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" onClick={()=>updateUserDetails(upId.value)}>Update User Details</button>
      </div>}
    
    </>
  );
}