import BannerImg from "../assets/Banner/jflowg.jpeg";

import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

import { HomeIcon, BellIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-centerb">
          {/*image section*/}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[10px_10px_12px_rgba(0,0,0,0.5)] object-cover"
            />
          </div>
          {/* Text Section */}
          <div className="w-[32rem]">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <HomeIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Timeline Title Here.
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gary" className="font-normal text-gray-600">
              The key to more success is to have a lot of pillows. Put it this way, it took me
              twenty five years to get these plants, twenty five years of blood sweat and tears, and
              I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
              luv.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <BellIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Timeline Title Here.
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gary" className="font-normal text-gray-600">
              The key to more success is to have a lot of pillows. Put it this way, it took me
              twenty five years to get these plants, twenty five years of blood sweat and tears, and
              I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
              luv.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <CurrencyDollarIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography variant="h5" color="blue-gray">
              Timeline Title Here.
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography color="gary" className="font-normal text-gray-600">
              The key to more success is to have a lot of pillows. Put it this way, it took me
              twenty five years to get these plants, twenty five years of blood sweat and tears, and
              I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
              luv.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
