import { AccountBoxOutlined, BadgeOutlined, CampaignOutlined, DeleteOutlined, LockOutlined, SdCardOutlined, SecurityOutlined, SettingsBrightnessOutlined } from '@mui/icons-material';
import { Box, Switch, Tab, Tabs ,Input } from '@mui/material'
import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';

const Setting = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const fdata = JSON.parse(localStorage.getItem('fdata'));
    const dashData = JSON.parse(localStorage.getItem('dashData'));
    let userId = dashData[0].id;
    const data = fdata.find((item)=> item.id === userId);

    const navigate = useNavigate();
    const goToAnotherRoute = () => {
    navigate('/tailwind/signin/');
    };
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const handleAgree = () => {
        const updatedData = fdata.filter((item)=> item.id !== userId);
        localStorage.setItem('fdata' , JSON.stringify(updatedData));
        setOpen(false);
        goToAnotherRoute();
    };
  
  return (
    <>
        <div className="setting">
            <nav className="setting-nav">
            <Box sx={{ width: '100%', bgcolor: 'none'  }}>
            <Tabs value={value} onChange={handleChange} >
                {/* <Tab className="[aria-selected='true']:!bg-white" label="Item One" /> */}
                <Tab label="Item One" className='dark:text-white'/>
                <Tab label="Item Two" className='dark:text-white'/>
                <Tab label="Item Three" className='dark:text-white'/>
            </Tabs>
            </Box>
            </nav>
            <div className="setting-main py-6 grid grid-cols-12">
                <div className="setting-side-nav sticky h-fit top-0 col-span-3 border-solid dark:border-[#262626] border-[#e5e5e5] border-[1px] rounded-[8px] dark:bg-[#1D1D1D] bg-white p-4">
                    <ul className="side-navs ">
                        <li className="navs px-4 py-[10px] dark:text-white">
                            <a href=""><AccountBoxOutlined className='mr-3 '/> Profile</a></li>
                        <li className="navs px-4 py-[10px] dark:text-white">
                            <a href=""><SdCardOutlined className='mr-3'/> Basic info</a>
                        </li>
                        <li className="navs px-4 py-[10px] dark:text-white">
                            <a href=""><LockOutlined className='mr-3'/> Password</a>
                        </li>
                        <li className="navs px-4 py-[10px] dark:text-white">
                            <a href=""><SecurityOutlined className='mr-3'/> Security</a>
                        </li>
                        <li className="navs px-4 py-[10px] dark:text-white">
                            <a href=""><BadgeOutlined className='mr-3'/> Security</a>
                        </li>
                        <li className="navs px-4 py-[10px] dark:text-white">
                            <a href=""><CampaignOutlined className='mr-3'/> Security</a>
                        </li>
                        <li className="navs px-4 py-[10px] dark:text-white">
                            <a href=""><SettingsBrightnessOutlined className='mr-3'/> Security</a>
                        </li>
                        <li className="navs px-4 py-[10px] dark:text-white">
                            <a href=""><DeleteOutlined className='mr-3'/> Security</a>
                        </li>
                    </ul>
                </div>
                <div className="setting-right-main col-span-9 mx-6  ">
                <div className="profile-bar bg-white dark:bg-[#1D1D1D] p-4 flex flex-col gap-5 sm:gap-auto sm:flex-row justify-between sm:items-center mb-[20px] border-solid dark:border-[#262626] 
                border-[#e5e5e5] border-[1px] rounded-[8px]">
                    <div className="profile-user flex gap-6 items-center">
                        <img src="rev-img.png" alt="" className="profile-image w-[74px] h-[74px] rounded-[50%] object-cover" />
                        <div className="user-info">
                            <h2 className="username font-semibold text-[20px] dark:text-white text-[#171717]">{data.username}</h2>
                            <p className="user-desg text-[16px] sm:text-[18px] dark:text-[#ffffffcc] text-[#737373]">{data.email}</p>
                        </div>
                    </div>
                    <div className="nav-btns flex items-center gap-2  p-1">
                        <p className="setting-switch dark:text-[#ffffffcc]">Switch to invisile</p>
                        <Switch/>
                    </div>
                </div>
                <div className="setting-basic-info p-6 bg-white dark:bg-[#1D1D1D] border-[1px] border-solid rounded-[8px] dark:border-[#262626] border-[#e5e5e5] mb-[20px]">
                    <h2 className="basic-heading font-semibold text-[20px] dark:text-white text-[#171717]">Basic Info</h2>
                    <div className="grid grid-cols-12 gap-6 pt-6">
                        <div className="col-span-6">
                            <label htmlFor="First Name" className='dark:text-[#ffffffcc]'>First Name
                                <Input type='text' value={data.username} placeholder='Kumar' className='w-full text-black 
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
                                <Input type='text' className='w-full text-black 
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
                                <Input type='' placeholder='' value={'Sigma'} name='' id='' className='w-full text-black 
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
                                <Input type='' placeholder='' value={data.dob ? data.dob : " "} name='' id='' className='w-full text-black 
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
                                <Input type='email' value={data.email} placeholder='' name='' id='' className='w-full text-black 
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
                                <Input type='' placeholder='' value={data.add ? data.add : ""} name='' id='' className='w-full text-black 
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
                                <Input type='' placeholder='' value={data.ph ? data.ph : ""} name='' id='' className='w-full text-black 
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
                                }}/></label></div>
                    </div>
                </div>
                <div className="changePassword relative p-6 bg-white dark:bg-[#1D1D1D] border-[1px] border-solid rounded-[8px] dark:border-[#262626] border-[#e5e5e5] mb-[20px]">
                <h2 className="basic-heading font-semibold text-[20px] dark:text-white text-[#171717] mb-6">Change Password</h2>
                <input type="text" placeholder='Current Password' className='p-3 dark:text-[white] w-full border-[#D2D6DA] border-solid border-[1px] rounded-[8px] mb-6'/>
                <input type="text" placeholder='New Password' className='p-3 dark:text-[white] w-full border-[#D2D6DA] border-solid border-[1px] rounded-[8px] mb-6'/>
                <input type="text" placeholder='Confirm New Password' className='p-3 dark:text-[white] w-full border-[#D2D6DA] border-solid border-[1px] rounded-[8px] mb-6'/>

                <h2 className="font-semibold text-[20px] dark:text-white text-[#171717] mt-6">Password requirements</h2>
                <p className="pass-p dark:text-[#ffffffcc]  text-[#737373] text-[18px] text-center sm:text-start">Please follow this guide for a strong password</p>
                <ul className='dark:text-[#ffffffcc]  text-[#737373] text-[18px] text-center sm:text-start'>
                    <li>- One special characters</li>
                    <li>- Min 6 characters</li>
                    <li>- One number (2 are recommended)</li>
                    <li>- Change it often</li>
                </ul>
                <button className="Update-pass absolute right-6 bottom-6 mt-6 inline-flex justify-center whitespace-nowrap rounded-lg  bg-gradient-to-br from-[#42424a] to-[#191919]  px-3.5 py-2.5 text-sm font-medium text-white dark:text-white shadow-sm shadow-indigo-950/10 hover:custom-shadow focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150">Update Password</button>
                </div>
                <div className="delete-accounts relative p-6 bg-white dark:bg-[#1D1D1D] border-[1px] border-solid rounded-[8px] dark:border-[#262626] border-[#e5e5e5] mb-[20px]">
                    <h2 className="basic-heading font-semibold text-[20px] dark:text-white text-[#171717] mb-3">Delete Account</h2>  
                    <p className="pass-p dark:text-[#ffffffcc]  text-[#737373] text-[18px] text-center sm:text-start">Please follow this guide for a strong password</p>
                    <div className="del-btns absolute right-6 bottom-6 flex gap-2">
                    <button className="Update-pass  mt-6 inline-flex justify-center whitespace-nowrap rounded-lg bg-none dark:border-[#ffffffcc] border-[black] border  px-3.5 py-2.5 text-sm font-medium dark:text-[#ffffffcc]  text-[#737373] shadow-sm shadow-indigo-950/10 hover:custom-shadow focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 cursor-pointer">Deactivate</button>
                    <button className="Update-pass  mt-6 inline-flex justify-center whitespace-nowrap rounded-lg bg-gradient-to-br from-[#ff5353] to-[#ff0000]  px-3.5 py-2.5 text-sm font-medium text-white dark:text-white shadow-sm shadow-indigo-950/10 hover:custom-shadow focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 cursor-pointer" onClick={handleClickOpen} >Delete Account</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you really want to delete your account?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Deleting your account will result in all data lost attached to your Account
            Do you really want to delete your account?.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAgree} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
    </>
  )
}

export default Setting