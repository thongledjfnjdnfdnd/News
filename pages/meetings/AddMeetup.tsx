import { MeetupForm } from '@components/MeetupForm';

const AddMeetup = () => {
  return (
    <>
      <h2 className="font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-blue-900 to-blue-100 text-center p-6">
        Meetup Form
      </h2>
      <MeetupForm />
    </>
  );
};

export default AddMeetup;
