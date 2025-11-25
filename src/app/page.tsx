"use client";
import Image from "next/image";
import { useState } from "react";
import BookingInsightsCard from "./components/BookingInsights";
import Right from "./components/Right";
import TopArtists from "./components/TopArtists";
export default function Home() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [openNotif, setOpenNotif] = useState(false);
  return (
  <div className={`bg-background min-h-screen text-foreground flex flex-row ${openSideBar ? "overflow-hidden":""}`}>
    <div className="bg-background min-w-[78px] w-fit min-h-screen flex flex-col items-center justify-between shrink-0 overflow-visible">
      <div className="m-4 text-left">
        <div className="mb-4 flex flex-row justify-start items-center bg-brand p-2 py-2.5 rounded-lg w-full" onClick={()=>{setOpenSideBar(!openSideBar)}}>
          <Image src="/Icons/color/gradient/Group 3.svg" alt="alt" width={40} height={50} />
        </div>
        <div  className="bg-off flex flex-col items-center p-2 rounded-4xl overflow-y-auto">
          <div className="bg-brand flex flex-row items-center justify-around p-3 w-full rounded-full mb-2">
            <Image src="/Icons/heroicons-solid/VectorDashboard.svg" alt="alt" width={15} height={15} />
          </div>
          <div className="p-2 flex flex-row  items-center justify-around w-full  rounded-full my-2">
            <Image src="/Icons/heroicons-outline/vector.svg" alt="alt" width={15} height={15} />
          </div>
          <div className="p-2 flex flex-row  items-center justify-around w-full  rounded-full my-2">
            <Image src="/Icons/group.svg" alt="alt" width={15} height={15} />
          </div>
          <div className="p-2 flex flex-row  items-center justify-around w-full  rounded-full my-2">
            <Image src="/loudspeaker/heroicons-outline/Vector.svg" alt="alt" width={15} height={15} />
          </div>
          <div className="p-2 flex flex-row  items-center justify-around w-full  rounded-full my-2">
            <Image src="/calendar/Group.svg" alt="alt" width={15} height={15} />

          </div>
          <div className="p-2 flex flex-row  items-center justify-around w-full  rounded-full my-2">
            <Image src="/org/Group.svg" alt="alt" width={15} height={15} />

          </div>
          <div className="p-2 flex flex-row  items-center justify-around w-full  rounded-full my-2">
            <Image src="/Icons/Group-1.svg" alt="alt" width={15} height={15} />
          </div>
          <div className="p-2 flex flex-row  items-center justify-around w-full  rounded-full my-2">
            <Image src="/cam/vuesax/vuesax/outline/money-3.svg" alt="alt" width={15} height={15} />
          </div> 
          <div className="p-2 flex flex-row  items-center justify-around w-full  rounded-full my-2">
            <Image src="/list/Group.svg" alt="alt" width={15} height={15} />
          </div>       
        </div>
        <div className="min-h-px bg-off my-4"></div>
        <div  className="bg-off flex flex-col items-center p-2 rounded-4xl">
          <div className="p-2 flex flex-row  items-center justify-around w-full rounded-full my-2">
            <Image src="/Icons/heroicons-outline/Vector-1.svg" alt="alt" width={15} height={15} />
          </div>
          <div className="p-2 flex flex-row  items-center justify-around w-full rounded-full my-2">
            <Image src="/info/heroicons-outline/Vector.svg" alt="alt" width={15} height={15} />
          </div>
                
        </div>
      </div>
      <div className="m-4">
        <div className="bg-red-500 p-4  items-start rounded-full">
          <Image src="Icons/heroicons-solid/heroicons-solid/Subtract.svg" alt="alt" width={15} height={15} />
        </div>
      </div>
    </div>
    <div className="flex flex-col min-h-fit grow bg-off">
      <div className="bg-background flex h-[68px] flex-row justify-end">
        <div className="flex flex-row items-center mr-4 p-4">
          <div className="relative p-4 rounded-xl mr-4 border border-off" onClick={()=>setOpenNotif(!openNotif)}>
            <Image src="/notif/heroicons-outline/Vector.svg" alt="alt" width={15} height={15}/>
            {openNotif &&
              <div className="absolute top-14 border border-lightBorder right-0 w-[400px] bg-background shadow-lg rounded-2xl p-4 z-50">
                <div className="flex flew-row">
                  <div className="font-semibold text-lg">Notifications</div>
                  <div className="ml-auto text-md text-brand">Mark All as Read</div>
                </div>
                <div className="flex flex-col">
                  <div className="mb-2">
                    <div className="font-medium">New Booking Confirmed</div>
                    <div className="text-sm text-sheen">You have a new booking with Sarah M.</div>
                    <div className="text-xs text-sheen">5 minutes ago</div>
                  </div>
                  <div className="mb-2">
                    <div className="font-medium flex">Deposit Received<Image src="/redDot.svg" alt="alt" width={7} height={7} className="ml-auto"/></div>
                    <div className="text-sm text-sheen">John K. has paid the deposit for their session</div>
                    <div className="text-xs text-sheen">Sept 15</div>
                  </div>
                  <div className="mb-2">
                    <div className="font-medium flex">Upcoming Appointment reminder <Image src="/redDot.svg" alt="alt" width={7} height={7} className="ml-auto"/></div>
                    <div className="text-sm text-sheen"> Reminder: Tattoo session with Alex R. tomorrow at 1:00 PM.</div>
                    <div className="text-xs text-sheen">5 Minutes Ago</div>
                  </div>
                  <div className="mb-2">
                    <div className="font-medium flex"> Rescheduled appointment <Image src="/redDot.svg" alt="alt" width={7} height={7} className="ml-auto"/></div>
                    <div className="text-sm text-sheen"> Maria P. has rescheduled her booking </div>
                    <div className="text-xs text-sheen">5 Minutes Ago</div>
                  </div>
                  <div className="mb-2">
                    <div className="font-medium flex"> Cancelation notice <Image src="/redDot.svg" alt="alt" width={7} height={7} className="ml-auto"/></div>
                    <div className="text-sm text-sheen"> Booking with Daniel L. on September 14 has been canceled </div>
                    <div className="text-xs text-sheen">5 Minutes Ago</div>
                  </div>
                </div>
              </div>
            }
          </div>
          <div className="w-px h-[50%] bg-off"></div>
          <Image src="/Profiles/Avatar/Image-40@3x.png" alt="alt" width={50} height={50} className="mx-4"/> 
          <div className="flex flex-col ">
            <div className="text-md font-medium">Hanna Calzoni</div>
            <div className="text-sm text-foreground/60">hannacalzoni@gmail.com</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col w-full">
          <div className="p-8 flex flex-col text-nowrap lg:flex-row w-full justify-between items-center">
            <div className ="text-center lg:text-left">
              <h2 className="text-5xl/16 font-stretch-90% font-semibold">Dashboard Overview</h2>
              <p className="text-sheen leading-12">Get a quick snapshot of your shop's performance — bookings, payments —  all in one place.</p>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-row mx-1 items-center px-3 py-2 bg-background rounded-xl leading-[120%] text-nowrap"><Image src="/Icons/Icon-2.svg" alt="alt" width={15} height={15} className="mr-2"/><div className="font-semibold text-[#121212] leading-[120%] py-1 "> Invite Staff</div></div>
              <div className="flex flex-row mx-1 items-center px-3 py-2 bg-background rounded-xl leading-[120%] text-nowrap"><Image src="/Icons/Icon-3.svg" alt="alt" width={15} height={15} className="mr-2"/><div className="font-semibold text-[#121212] leading-[120%] py-1 "> Share Link</div></div>
              <div className="flex flex-row mx-1 items-center px-3 py-2 bg-background rounded-xl leading-[120%] text-nowrap"><Image src="/Icons/Interface, Essential/user-profile-remove-square.svg" alt="alt" width={15} height={15} className="mr-2"/><div className="font-semibold text-[#121212] leading-[120%] py-1 "> All Requests</div></div>
              <div className="flex flex-row mx-1 items-center px-3 py-2 rounded-xl leading-[120%] bg-brand text-nowrap"><Image src="/Icons/Interface, Essential/Group.svg" alt="alt" width={15} height={15} className="mr-2"/><div className="font-semibold leading-[120%] py-1 text-background "> New Booking</div></div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row ">
            <div className="flex flex-col lg:min-w-[46vw]">
              <div className="flex flex-col lg:flex-row w-full">
                <div className="relative p-4 bg-brand bg-[linear-gradient(53.36deg,#F46425_18.14%,#F5B40B_98.71%)] rounded-2xl m-4 lg:w-[45%]">
                  <Image src="/design/Vector.svg" alt="alt" width={50} height={50}  className="absolute top-0 right-0" />
                  <div className="flex flex-row items-center">
                    <div className="p-3 bg-background rounded-full">
                      <Image src="Icons/heroicons-solid/Group.svg" alt="alt" width={24} height={24} />
                    </div>
                    <h3 className="ml-4 text-background text-2xl font-semibold leading-[130%]">Bookings</h3>
                  </div>
                  <div className="p-4 text-4xl font-bold text-background">240</div>
                  <div className="flex flex-row">
                    <div className="flex flex-row items-center bg-background rounded-xl px-2">
                      <Image src="design/arrowHeadUp/heroicons-outline/heroicons-outline/Vector.svg" alt="alt" width={15} height={15} />
                      <div className="ml-1.5">9.97%</div>
                    </div>
                    <div className="ml-2 text-background text-md leading-[150%] tracking-[-1%]">vs last month</div>
                  </div>
                </div>
                <div className="p-4 rounded-2xl m-4 grow bg-background">
                  <div className="flex flex-row items-center">
                    <div className="p-3 bg-background border border-[#E7E7E7] rounded-full">
                      <Image src="/cards/heroicons-outline/Vector.svg" alt="alt" width={24} height={24} />
                    </div>
                    <h3 className="ml-4 text-foreground text-2xl font-semibold leading-[130%]">Revenue</h3>
                  </div>
                  <div className="p-4 text-4xl font-bold text-foreground">$842,450</div>
                  <div className="flex flex-row">
                    <div className="flex flex-row items-center text-success rounded-xl px-2">
                      <Image src="design/arrowGreenHeadUp/heroicons-outline/heroicons-outline/Vector.svg" className="text-success" alt="alt" width={15} height={15} />
                      <div className="ml-1.5">9.97%</div>
                    </div>
                    <div className="ml-2 text-sheen text-md leading-[150%] tracking-[-1%]">vs last month</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row w-full">
                <div className="p-4 rounded-2xl m-4 lg:w-[45%] bg-background">
                  <div className="flex flex-row items-center">
                    <div className="p-3 bg-background rounded-full">
                      <Image src="booking/heroicons-outline/Group.svg" alt="alt" width={24} height={24} />
                    </div>
                    <h3 className="ml-4 text-foreground text-2xl font-semibold leading-[130%]">Avg Booking Value</h3>
                  </div>
                  <div className="p-4 text-4xl font-bold text-foreground">$1,254</div>
                  <div className="flex flex-row">
                    <div className="flex flex-row items-center text-warning rounded-xl px-2">
                      <Image src="design/arrowHeadDown/heroicons-outline/heroicons-outline/arrow-trending-down.svg" alt="alt" width={15} height={15} />
                      <div className="ml-1.5">3.57%</div>
                    </div>
                    <div className="ml-2 text-sheen text-md leading-[150%] tracking-[-1%]">vs last month</div>
                  </div>
                </div>
                <div className="p-4 rounded-2xl m-4 grow bg-background">
                  <div className="flex flex-row items-center">
                    <div className="p-3 bg-background rounded-full">
                      <Image src="/cards/heroicons-outline/heroicons-outline/archive-box-arrow-down.svg" alt="alt" width={24} height={24} />
                    </div>
                    <h3 className="ml-4 text-foreground text-2xl font-semibold leading-[130%]">No show Rate</h3>
                  </div>
                  <div className="p-4 text-4xl font-bold text-foreground">5%</div>
                  <div className="flex flex-row">
                    <div className="flex flex-row items-center text-success rounded-xl px-2">
                      <Image src="design/arrowGreenHeadUp/heroicons-outline/heroicons-outline/Vector.svg" className="text-success" alt="alt" width={15} height={15} />
                      <div className="ml-1.5">9.97%</div>
                    </div>
                    <div className="ml-2 text-sheen text-md leading-[150%] tracking-[-1%]">vs last month</div>
                  </div>
                </div>
              </div>
              <BookingInsightsCard />
              <TopArtists />
            </div>
            <div className="grow m-4">
              <Right />
            </div>
          </div>
        </div>
      </div> 
    </div>
    {openSideBar &&
      <div onClick={()=>setOpenSideBar(!openSideBar)} className="w-screen min-h-screen bg-black/30 absolute z-40 left-0 backdrop-blur-xs">
      </div>
    }
    {openSideBar&&
      <div className="bg-background rounded-r-2xl w-fit min-h-screen flex flex-col items-center justify-between overflow-hidden absolute z-50 left-0">
        <div className="m-4 text-left">
          <div className="mb-4 flex flex-row justify-between items-center bg-backgroundg rounded-lg w-full">
            <div className="flex flex-row justify-start items-center bg-brand p-2 py-2.5 rounded-lg w-fit mr-4`" onClick={()=>{setOpenSideBar(!openSideBar)}}>
              <Image src="/Icons/color/gradient/Group 3.svg" alt="alt" width={40} height={50} />
            </div>
            <div className="flex flex-row justify-center items-center p-5 py-2 rounded-lg w-fit">
              <Image src="/Brand/needleworksmgmt.com.svg" alt="alt" width={100} height={35} />
            </div>
          </div>
          <div  className="bg-off flex flex-col items-center p-2 rounded-4xl overflow-y-auto">
            <div className="flex flex-row w-full items-center justify-start">
              <div className="bg-brand flex flex-row items-center justify-around p-3 w-fit rounded-full mb-2">
                <Image src="/Icons/heroicons-solid/VectorDashboard.svg" alt="alt" width={15} height={15} />
              </div>
              <div className="ml-2 font-medium">
                Dashboard
              </div>
            </div>
            <div className="flex flex-row w-full items-center justify-start">
              <div className="px-3 py-2 flex flex-row  items-center justify-around rounded-full my-2">
                <Image src="/Icons/heroicons-outline/vector.svg" alt="alt" width={15} height={15} />
              </div>
              <div className="ml-2 font-medium">
                Clients
              </div>
            </div>
            <div className="flex flex-row w-full items-center justify-start">
              <div className="p-3 py-2 flex flex-row  items-center justify-around  rounded-full my-2">
                <Image src="/Icons/group.svg" alt="alt" width={15} height={15} />
              </div>
              <div className="ml-2 font-medium">
                Chat
              </div>
            </div>
            <div className="flex flex-row w-full items-center justify-start">
              <div className="p-3 py-2 flex flex-row  items-center justify-around  rounded-full my-2">
                <Image src="/loudspeaker/heroicons-outline/Vector.svg" alt="alt" width={15} height={15} />
              </div>
              <div className="ml-2 font-medium">
                Bookings
              </div>
            </div>
            <div className="flex flex-row w-full items-center justify-start">
              <div className="p-3 py-2 flex flex-row  items-center justify-around rounded-full my-2">
                <Image src="/calendar/Group.svg" alt="alt" width={15} height={15} />
              </div>
              <div className="ml-2 font-medium">
                Calendar
              </div>
            </div>
            <div className="flex flex-row w-full items-center justify-start">
              <div className="p-3 py-2 flex flex-row  items-center justify-around rounded-full my-2">
                <Image src="/org/Group.svg" alt="alt" width={15} height={15} />
              </div>
              <div className="ml-2 font-medium">
                Shop
              </div>
            </div>
            <div className="flex flex-row w-full items-center justify-start">
              <div className="p-3 py-2 flex flex-row  items-center justify-around rounded-full my-2">
                <Image src="/Icons/Group-1.svg" alt="alt" width={15} height={15} />
              </div>
              <div className="ml-2 font-medium">
                Staff
              </div>
            </div>
            <div className="flex flex-row w-full items-center justify-start">
              <div className="p-3 py-2 flex flex-row  items-center justify-around rounded-full my-2">
                <Image src="/cam/vuesax/vuesax/outline/money-3.svg" alt="alt" width={15} height={15} />
              </div> 
              <div className="ml-2 font-medium">
                Payments
              </div>
            </div>
            <div className="flex flex-row w-full items-center justify-start">
              <div className="p-3 py-2 flex flex-row  items-center justify-around rounded-full my-2">
                <Image src="/list/Group.svg" alt="alt" width={15} height={15} />
              </div>       
              <div className="ml-2 font-medium">
                Inventory
              </div>
            </div>
          </div>
          <div className="min-h-px bg-off my-4"></div>
          <div  className="bg-off flex flex-col items-center p-2 rounded-4xl">
            <div className="flex flex-row w-full items-center justify-start">
              <div className="p-3 py-2 flex flex-row  items-center justify-around rounded-full my-2">
                <Image src="/Icons/heroicons-outline/Vector-1.svg" alt="alt" width={15} height={15} />
              </div>
              <div className="ml-2 font-medium">
                Settings
              </div>
            </div>
            <div className="flex flex-row w-full items-center justify-start">
              <div className="p-3 py-2 flex flex-row  items-center justify-around rounded-full my-2">
                <Image src="/info/heroicons-outline/Vector.svg" alt="alt" width={15} height={15} />
              </div>
                  
              <div className="ml-2 font-medium">
                Help & Support
              </div>
            </div>
          </div>
        </div>
        <div className="m-4 flex flex-row w-full items-center justify-start p-4">
          <div className="flex flex-row w-full items-center justify-start">
            <div className="bg-[#EF4444] p-4 rounded-full flex flex-row w-full items-center justify-start">
              <Image src="Icons/heroicons-solid/heroicons-solid/Subtract.svg" alt="alt" width={15} height={15} />
              <div className="ml-2 font-medium">
                Logout
              </div>
            </div>
          </div>
        </div>
      </div>
    }
  </div>
  );
}
