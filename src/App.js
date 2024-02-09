
import './App.css';
import LeftNavBar from './components/NavBar';
import TopNavBar from './components/TopNavBar';
import CommonCard from './components/SmallContainer';
import CustomCard2 from './components/CommonCard';
import OutingScheduleCard from './components/InnerComponent';
import AnnouncementsContainer from './components/AnnouncementCard';
import BlueAnnouncements from './components/BlueAnnouncement';
function App() {
  return (
    <div className="">
     {/* <LeftNavBar/> */}
     {/* <TopNavBar/> */}
     {/* <div className="flex justify-center items-center h-screen">
      <CommonCard
        title="Top Title"
        subtitle="Middle Subtitle"
        content="Bottom Content"
        bgcolor="bg-blue-300"
        customTextColor="text-blue-500" // Customize the text color of the last column
      />
    </div> */}
     {/* <div className="flex justify-center items-center h-screen">
      <CustomCard2
        firstText="Custom First Text"
        secondText="Custom Second Text"
        thirdText="Custom Third Text"
        fourthText="Custom Fourth Text"
        graphIconText="Custom Graph Icon Text"
      />
      
    </div> */}
   {/* <div className="flex justify-center items-center h-screen">
      <AnnouncementsContainer />
    </div> */}
    {/* <div className='flex justify-center items-center h-screen'>
    <BlueAnnouncements/>
    </div> */}

    <div className="flex h-screen">
      <LeftNavBar />
      <div className="flex-1 p-4">
        <TopNavBar />
        <div className='flex flex-row'>
          {/* Your main content goes here */}
          
          <div className='w-2/3'>
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
           <div className=' flex flex-row space-x-4'>
          
         <div className="flex-1">
      <CommonCard
        title="Available Position"
        subtitle="24"
        content="4 Urgently needed"
        bgcolor="bg-red-100"
        customTextColor="text-red-500" // Customize the text color of the last column
      />
    </div> 
    <div className=" flex-1">
      <CommonCard
        title="Job Open"
        subtitle="10"
        content="4 Active hiring"
        bgcolor="bg-blue-100"
        customTextColor="text-blue-500" // Customize the text color of the last column
      />
    </div> 
    <div className=" flex-1">
      <CommonCard
        title="New Employees"
        subtitle="24"
        content="4 department"
        bgcolor="bg-pink-100"
        customTextColor="text-pink-500" // Customize the text color of the last column
      />
    </div> 
         </div>
         <div className='flex flex-row space-x-10 pt-4 grow'>
          <div className='flex-1'>
<CustomCard2
        firstText="Total Employees"
        secondText="216"
        thirdText="120 men"
        fourthText="96 women"
        graphIconText="Custom Graph Icon Text"
      />
          </div>
         <div className='flex-1'>
         <CustomCard2
        firstText="Talent Request"
        secondText="6"
        thirdText="6 men"
        fourthText="10 women"
        graphIconText="Custom Graph Icon Text"
      />
         </div>
      
         </div>
         <div className=' pt-4'>
         <div>
         <AnnouncementsContainer />
         </div>
         </div> 
          </div>
         <div className='pl-4 pt-10'>
<div>
<BlueAnnouncements/>
</div>
<div className='pt-4'>
         <AnnouncementsContainer />
         </div>
         </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
