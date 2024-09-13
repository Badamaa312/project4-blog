const ContactUsPage = () => {
  return (
    <main className="pb-8 pt-8">
      <div className="w-full flex justify-around ">
        <div className="container  flex flex-col justify-between items-center gap-[20px]">
          <div className="flex flex-col gap-[20px] w-[624px] ">
            <h1 className="font-bold text-4xl">Contact Us</h1>
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
          <div className="flex gap-[120px]">
            <div className="w-1/2 border border-gray-200 rounded-md p-4 gap-[10px]">
              <h2 className="font-bold text-xl">Address</h2>
              <p className="text-wrap text-gray-600">
                1328 Oak Ridge Drive, Saint Louis, Missouri
              </p>
            </div>
            <div className="w-1/2 border border-gray-200 rounded-md p-4 gap-[10px]">
              <h2 className="font-bold text-xl">Contact</h2>
              <div className="flex flex-col">
                <p className="text-gray-600">3133328662</p>
                <p className="text-gray-600">info@email.com</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[624px] rounded-md bg-slate-100 pt-[29px] pl-[35px] pb-[26px] gap-6 ">
            <p className="font-bold text-lg">Leave a messege</p>
            <div className="flex justify-between w-[478px]">
              <input
                placeholder="Your Name"
                type="text"
                className="rounded-md pl-2"
              />
              <input
                placeholder="Your Email"
                type="text"
                className="rounded-md pl-2"
              />
            </div>
            <input
              placeholder="Subject"
              className="w-[478px] rounded-md pl-2"
              type="text"
            />
            <input
              placeholder="Write a message"
              type="text"
              className="w-[478px] h-[134px] rounded-md pl-2"
            />
            <span>
              <button className="bg-blue-500 text-white rounded-md pl-2 pr-2 pb-1 pt-1">
                Send Message
              </button>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUsPage;
