import { Input } from '@components/Input';
import { TextArea } from '@components/TextArea';

export const MeetupForm = (): JSX.Element => {
  return (
    <form className="w-full max-w-2xl mx-auto">
      <div className="w-full px-3">
        <Input
          id="meetup-name"
          name="name"
          label="Meetup Name"
          placeholder="Please enter Meetup Name..."
          type="text"
        />
      </div>
      <div className="w-full px-3">
        <TextArea
          id="overview"
          name="overview"
          label="Overview"
          placeholder="Please enter Overview of Meeting..."
        />
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <Input
            id="speaker"
            name="speaker"
            label="Speaker"
            placeholder="Please enter Name Speaker..."
            type="text"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <Input id="time" name="time" label="Time" type="datetime-local" />
        </div>
      </div>
      <div className="w-full px-3">
        <Input
          id="duration"
          name="duration"
          label="Duration"
          placeholder="Please enter Duration..."
          type="text"
        />
      </div>

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <Input
            id="location"
            name="location"
            label="Location"
            placeholder="Please enter Location..."
            type="text"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <Input
            id="ticket-price"
            name="ticket-price"
            label="Ticket Price"
            type="text"
            placeholder="Please enter Ticket Price..."
          />
        </div>
      </div>
      <div className="w-full px-3">
        <Input
          id="image"
          name="image"
          label="Link Image"
          placeholder="Please enter URL Image Cover..."
          type="url"
        />
      </div>
      <div className="w-full px-3">
        <Input
          id="stream"
          name="stream"
          label="Link Stream"
          placeholder="Please enter URL Stream..."
          type="url"
        />
      </div>
      <div className="w-ful">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <Input
              id="email"
              name="email"
              label="Speaker Email"
              placeholder="Please enter Email..."
              type="email"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <Input
              id="phone"
              name="phone"
              label="Speaker Phone Number"
              placeholder="Please enter Phone Number..."
              type="tel"
            />
          </div>
        </div>
      </div>
    </form>
  );
};
