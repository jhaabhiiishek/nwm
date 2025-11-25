"use client";
import { ChevronDown } from "lucide-react";
import { FC, useState } from "react";
import * as React from "react";
import {type DateRange} from 'react-day-picker';
import {Calendar} from '@/components/ui/calendar';
interface BookingRow {
  id: string;
  artistName: string;
  artistProfile: string;
  clientName: string;
  bookingType: string;
  style: string;
  date: string;
  time: string;
  status: string;
}
interface AppointmentItem {
  id: string;
  title: string;
  time: string;
}
interface InventoryItem{
	id: string;
	image: string;
	artistName: string;
	item: string;
	quantity: number;
	threshold: number;
	vendor: string;
}
const bookings: BookingRow[] = [
	{
		id: "1",
		artistProfile: "/Profiles/avatar-luca.png",
		artistName: "Ayra Voss",
		clientName: "Martin Torff",
		bookingType: "consultation",
		style: "realism",
		date: "Tue, Aug 20,2025",
		time: "10:00 AM-1:00 PM",
		status: "New"
	},
	{
		id: "2",
		artistProfile: "/Profiles/avatar-luca-1.png",
		artistName: "Luca MorTini",
		clientName: "Cheyenne Lipston",
		bookingType: "Tattoo Session",
		style: "Blackwork",
		date: "Tue, Aug 20,2025",
		time: "3:00 PM - 6:00 PM",
		status: "Deposit Required"
	},
	{
		id: "3",
		artistProfile: "/Profiles/avatar-luca-2.png",
		artistName: "Ethan",
		clientName: "Davis",
		bookingType: "Flash",
		style: "realism",
		date: "Wed, Aug 21,2025",
		time: "2:30 PM - 2:30 PM",
		status: "Deposit Paid"
	},
	{
		id: "4",
		artistProfile: "/Profiles/avatar-luca-3.png",
		artistName: "Sophie Lee",
		clientName: "Haylie Bator",
		bookingType: "Tattoo Session",
		style: "Fine Line",
		date: "Thu, Aug 22,2025",
		time: "10:00 AM - 11:30 AM",
		status: "Scheduled"
	},
	{
		id: "5",
		artistProfile: "/Profiles/avatar-luca-4.png",
		artistName: "Clara Jenson",
		clientName: "Maren Levin",
		bookingType: "Consultation",
		style: "Tribal",
		date: "Fri, Aug 23,2025",
		time: "2:00 PM - 5:00 PM",
		status: "Upcoming"
	},
];
const appointments: AppointmentItem[] = [
	{
		id: "1",
		title: "Consultation with Martin Torff",
		time: "10:00 - 11:00 AM",
	},
	{
		id: "2",
		title: "Tattoo Session with Haylie",
		time: "10:00 - 11:00 AM",
	},
	{
		id: "3",
		title: "Consultation with Davis",
		time: "10:00 - 11:00 AM",
	},
];
const inventory: InventoryItem[] = [
	{
		id: "1",
		image: "/Profiles/avatar-luca.png",
		artistName: "Ayra Voss",
		item: "Dynamic Black 8oz ink",
		quantity: 12,
		threshold: 10,
		vendor: "Ink Supply Co",
	},
	{
		id: "2",
		image: "/Profiles/avatar-luca-3.png",
		artistName: "Sophie Langlette",
		item: "7RL Needles (Box of 50)",
		quantity: 200,
		threshold: 20,
		vendor: "Ink Supply Co",
	},
	{
		id: "3",
		image: "/Profiles/avatar-luca.png",
		artistName: "Ayra Voss",
		item: "Green Soap (1L)",
		quantity: 14,
		threshold: 5,
		vendor: "Clean Tattoo",
	},
	{
		id: "4",
		image: "/Profiles/avatar-luca.png",
		artistName: "Ayra Voss",
		item: "Stencil Transfer Paper (Sheets)",
		quantity: 1002,
		threshold: 100,
		vendor: "Stencil Champs",
	},
	{
		id: "5",
		image: "/Profiles/avatar-luca.png",
		artistName: "Ayra Voss",
		item: "Nitrile Gloves (Box of 100)",
		quantity: 40,
		threshold: 10,
		vendor: "SafeHands",
	},
	{
		id: "6",
		image: "/Profiles/avatar-luca.png",
		artistName: "Ayra Voss",
		item: "Eternal White Ink 2oz",
		quantity: 32,
		threshold: 10,
		vendor: "Ink Supply Co",
	},
	{
		id: "7",
		image: "/Profiles/avatar-luca-1.png",
		artistName: "Luca Moretti",
		item: "Cavicide Disinfectant (1L)",
		quantity: 120034,
		threshold: 100,
		vendor: "28 Years",
	},
	{
		id: "8",
		image: "/Profiles/avatar-luca-2.png",
		artistName: "Ethan",
		item: "Cavicide Disinfectant (1L)",
		quantity: 120034,
		threshold: 100,
		vendor: "28 Years",
	},
	{
		id: "9",
		image: "/Profiles/avatar-luca-4.png",
		artistName: "Clara Jenson",
		item: "Cavicide Disinfectant (1L)",
		quantity: 120034,
		threshold: 100,
		vendor: "28 Years",
	},
];
const NewBookingsFeed: FC = () => {
  return (
    <div className="w-full rounded-xl border-sheen p-5 bg-background">
      <div className="flex justify-between items-center mb-4 p-2">
        <h2 className="font-semibold text-xl">New Bookings Feed</h2>
        <button className="flex items-center gap-1 px-3 py-2 border border-[#E7E7E7] rounded-xl text-md font-semibold leading-[120%]">
			All Status <ChevronDown size={16} />
		</button>
      </div>

      <div className="overflow-hidden rounded-xl border border-lightBorder">
        <table className="w-full text-sm">
          <thead className="bg-off">
            <tr>
              <th className="p-3 text-left">Artist Name</th>
              <th className="p-3 text-left">Client Name</th>
              <th className="p-3 text-left">Booking Type</th>
              <th className="p-3 text-left">Style</th>
              <th className="p-3 text-left">Date & Time</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b) => (
              <tr key={b.id}>
                <td className="p-3">
                  <img src={b.artistProfile} alt={b.artistName} className="w-8 h-8 rounded-full mr-2 inline-block" />
                  {b.artistName}
                </td>
                <td className="p-3">{b.clientName}</td>
                <td className="p-3">{b.bookingType}</td>
                <td className="p-3">{b.style}</td>
                <td className="p-3">
                  <div>{b.date}</div>
                  <div>{b.time}</div>
                </td>
                <td className="p-3">{b.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const UpcomingAppointments: FC = () => {
	const [showCal,setShowCal]=useState(false);
	const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
		from: new Date(2025, 11, 31),
		to: new Date(2025, 11, 31),
	  });
  return (
    <div className="w-full rounded-xl border border-off bg-background p-4">
      <div className="flex justify-between items-center mb-4 p-2">
        <h2 className="font-semibold text-lg">Upcoming Appointments</h2>

        <div className="flex relative items-center gap-2">
			<button onClick={()=>setShowCal(!showCal)} className="flex items-center gap-1 px-3 py-2 border border-[#E7E7E7] rounded-xl text-md font-semibold leading-[120%]">
				<img src="cal/heroicons-solid/Union.svg" alt="calendar" width='15' height='15' className="mr-2" />	31 December 2025 <ChevronDown size={16} />
			</button>
				{showCal&&
					<div className="flex flex-col absolute top-10 left-0 rounded-b-xl mt-0">
						<Calendar
							mode="range"
							defaultMonth={dateRange?.from}
							selected={dateRange}
							onSelect={setDateRange}
							numberOfMonths={1}
							className="  mt-2 rounded-xl border font-bold w-full border-b-0 rounded-b-none"
						/>
						<div className="flex justify-between text-sm bg-background p-4 rounded-b-xl border border-t-0 rounded-t-none">
							<div className="grow">
								From
								<button onClick={()=>setShowCal(!showCal)} className="flex items-center px-3 py-2  border border-[#E7E7E7] rounded-lg text-xs mt-2 font-medium leading-[120%]">
									<img src="cal/heroicons-solid/Union.svg" alt="calendar" width='15' height='15' className="mr-2" />
									<div>{dateRange?.from?.toLocaleDateString()}</div>
								</button>
							</div>
							<div className="grow ml-2">
								To
								<button onClick={()=>setShowCal(!showCal)} className="flex items-center px-3 py-2  border border-[#E7E7E7] rounded-lg mt-2 text-xs font-medium leading-[120%]">
									<img src="cal/heroicons-solid/Union.svg" alt="calendar" width='15' height='15' className="mr-2" />
									<div>{dateRange?.to?.toLocaleDateString()}</div>
								</button>
							</div>
						</div>
					</div>
				}
		  	<div className="p-3 border border-[#E7E7E7] rounded-xl text-md font-semibold leading-[120%]"><img src="TopRightArrow/heroicons-solid/heroicons-solid/arrow.svg"/></div>
        </div>
      </div>

      <div className="rounded-xl border border-lightBorder bg-background divide-y p-3 pb-0">
        {appointments.map((a) => (
          <div
            key={a.id}
            className="flex justify-between items-center p-4 border-0 bg-off my-2 mb-3 rounded-2xl"
          >
			<div className="flex items-center flex-row">

				<div className="bg-background rounded-xl p-4 mr-4">
					<img src='emoicon.svg'/>
				</div>
				<div className="bg-off">
				<div className="font-medium">{a.title}</div>
				<div className="text-sm opacity-70">{a.time}</div>
				</div>
			</div>

            <button className="text-foreground"><img src='dots/heroicons-outline/Vector.svg'/></button>
          </div>
        ))}
      </div>
    </div>
  );
};

const InventoryStock: FC = () => {
  return (
    <div className="w-full rounded-xl bg-background p-4">
      <div className="flex justify-between items-center mb-4 p-2">
        <h2 className="font-semibold text-lg">Inventory</h2>
		<div className="flex items-center gap-2">
			<button className="flex items-center gap-1 p-3 border border-[#E7E7E7] rounded-xl text-md font-semibold leading-[120%]">
				All Status <ChevronDown size={16} />
			</button>
			<div className="p-3 border border-[#E7E7E7] rounded-xl text-md font-semibold leading-[120%]"><img src="TopRightArrow/heroicons-solid/heroicons-solid/arrow.svg"/></div>
		</div>
		
      </div>

      <div className="overflow-hidden rounded-xl border border-lightBorder bg-background">
        <table className="w-full text-sm">
          <thead className="bg-off">
            <tr>
              <th className="p-3 text-left">Artist Name</th>
              <th className="p-3 text-left">Item</th>
              <th className="p-3 text-left">Quantity</th>
              <th className="p-3 text-left">Threshold</th>
              <th className="p-3 text-left">Vendor</th>
            </tr>
          </thead>

          <tbody>
            {inventory.map((b) => (
              <tr key={b.id} className="">
                <td className="p-3">
                  <img src={b.image} alt={b.artistName} className="w-8 h-8 rounded-full mr-2 inline-block" />
                  {b.artistName}
                </td>
                <td className="p-3">{b.item}</td>
                <td className="p-3">{b.quantity}</td>
                <td className="p-3">{b.threshold}</td>
                <td className="p-3">{b.vendor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// ------------------
// Page Layout
// ------------------
const Right: FC = () => {
  return (
    <div className="space-y-10">
      <NewBookingsFeed />
      <UpcomingAppointments />
	  <InventoryStock/>
    </div>
  );
};

export default Right;
