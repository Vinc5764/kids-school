import call from './assets/call.svg';
import map from './assets/map.svg';
import email from './assets/email.svg';
import fb from './assets/fb.svg';
import ig from './assets/ig.svg';
import twitter from './assets/twitter.svg';

const Footer = () => {
  return (
    <div className="flex flex-col gap-4  text-center lg:items-center lg:justify-center lg:text-justify">
      <div className="flex flex-col items-center justify-evenly gap-8 text-[#737373]  lg:flex-row">
        <div className="inline-flex flex-col justify-between gap-2 ">
          <h1 className="text-base font-bold text-[#252B42]">Company Info</h1>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        <div className="inline-flex flex-col justify-between gap-2 ">
          <h1 className="text-base font-bold text-[#252B42]">Legal</h1>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        <div className="inline-flex flex-col justify-between gap-2 ">
          <h1 className="text-base font-bold text-[#252B42]">Features</h1>
          <p>Business Marketing</p>
          <p>User Analytic</p>
          <p>Live Chat</p>
          <p>Unlimited Support</p>
        </div>
        <div className="inline-flex flex-col justify-between gap-2 ">
          <h1 className="text-base font-bold text-[#252B42]">Resources</h1>
          <p>IOS & Android</p>
          <p>Watch a Demo</p>
          <p>Customers</p>
          <p>IOS & Android</p>
        </div>
        <div className="inline-flex  flex-col justify-between gap-2">
          <h1 className="text-base font-bold text-[#252B42]">Get In Touch</h1>
          <div className="flex flex-col gap-2  pl-24 lg:pl-0">
            <div className="flex gap-2">
              <img src={call} alt="call" />
              <p>(480) 555-0103</p>
            </div>
            <div className="flex gap-2">
              <img src={map} />
              <p className="text-justify">
                4517 Washington Ave. Manchester,
                <br /> Kentucky 39495
              </p>
            </div>
            <div className="flex gap-2">
              <img src={email} />
              <p>debra.holt@example.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="inline-flex h-32 w-full flex-col items-center justify-around  gap-4 bg-[#FAFAFA] lg:flex-row">
        <p className="text-[0.875rem] font-bold leading-6 text-[#737373]">
          Made With Love By Figmaland All Right Reserved{' '}
        </p>
        <div className="flex gap-4">
          <img src={fb} />
          <img src={ig} />
          <img src={twitter} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
