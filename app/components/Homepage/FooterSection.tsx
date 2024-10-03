"use client";

import { useState } from "react";
import { toast } from "react-toastify";
// import Image from "next/image";

export const FooterSection = () => {
  const [businessName, setBusinessName] = useState("");
  const [contactDetails, setContactDetails] = useState("");

  return (
    <div className="w-full bg-[#3E2362] text-white px-[5vw] py-[10vh]">
      <div>
        <h1 className="text-3xl">Become a Vendor</h1>
        <p className="text-[#EDB93D] text-3xl font-semibold">
          Set up your free business page now
        </p>
      </div>
      <div className="mt-[10vh] grid md:grid-cols-2 gap-6">
        <div>
          <h1 className="text-2xl">Business Name</h1>
          <input
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="Enter your business name"
            className="w-full bg-[#ffffff] text-black p-2 rounded-lg mt-2 focus:outline-none px-6 py-3.5 placeholder:text-[#00000080]"
          />
        </div>
        <div>
          <h1 className="text-2xl">Contact Details</h1>
          <input
            type="text"
            value={contactDetails}
            onChange={(e) => setContactDetails(e.target.value)}
            placeholder="Enter your email"
            className="w-full bg-[#ffffff] text-black p-2 rounded-lg mt-2 focus:outline-none px-6 py-3.5 placeholder:text-[#00000080]"
          />
        </div>
      </div>

      <div className="text-2xl mt-12">Select your Services</div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
        <div className="image-wrapper w-full hover:cursor-pointer rounded-xl">
          <img
            src="https://s3-alpha-sig.figma.com/img/5747/ef30/99bd4b0b65d8ead976dfcf0b69eabab2?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JXRG2I7jqnt78Kuu7g1nSpIJsLGfBbvpWp4-cWE2v3KDM-K65bS4DUmriKKFbL-VqeEasmbAE-~WND8jVLhRh~1KhFfEzd9mtD5pnawsO9Sd4zFGnPsw4Spq6wE~jVW37GxdnnfSMsd7PrODi7hszYhPyFkpv9NV5jgvk97~YfiXfCzoB6kQ4GvUz6e~9XS5zSSXMxzZH7e4HSc6T7yITvBLOUqm2704C~04twgB0MHc1JjfMEOIsOTCFcdBmzoN1AM3KwPBZn2km0edSJRjtQ3xYgutzFBBrQuiy-tfjM5ntbnYH7cSILj6mxfYvGVVsJWtv3Ov~-1UO-cz9CWBJA__"
            alt="alt"
            width={378}
            height={244}
            className="w-full opacity-50 hover:opacity-70"
          />
          <div className="absolute -mt-10 ml-6 text-xl font-semibold">
            Venues
          </div>
        </div>
        <div className="image-wrapper w-full hover:cursor-pointer rounded-xl">
          <img
            src="https://s3-alpha-sig.figma.com/img/413b/67bd/7938623eb23eb184f460400b778435d9?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CgPi6uX3yOBwxR7LXJVLkhE7ucLPprdQshNjjm4Oacmf4MdgoTmjcIil6Hkq98qGazHxDrpUmGNGIvuZbmhiF8EBS3bDH3zg2zxqvRXtZ0KiIBsNwzBfdUuEODQq39s-pC2sgtbRbiQQkkzXFm73G2z8R2UQ4JieIYUrYbTlHzaeaSWAedXJb8YpdyFhlVu3ZwOfdJa9bX8jwKG-PpjE29ErvnXOoYVDU-tq9WhtGj1ixDbO34ubhroTm5FUs44IO1wwKgpdg6kTB2umof~mK48ANJ~B6yQbGWSkiCr7TPaQQEj65fKYPf7oIYa9GSvxw6aZsuIgq9QwcyFsWntJFA__"
            alt="alt"
            width={378}
            height={244}
            className="w-full opacity-50 hover:opacity-70"
          />
          <div className="absolute -mt-10 ml-6 text-xl font-semibold">
            Caterers
          </div>
        </div>
        <div className="image-wrapper w-full hover:cursor-pointer rounded-xl">
          <img
            src="https://s3-alpha-sig.figma.com/img/0991/b547/0532fe779b99f9626c2c8ec92b4d0cd5?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DcN~VQ8RFO7i~rIWlZ-4PjDdGmQqNI3MyOp0TpeZRoDNq0anRXrEgOG3Fc5~lmFBhq1QKgELGByfTYhsczhP673XH8TaOr3N~jpn1nK-EPE32zvO-HGaZm~CwksCo4XAElCq9Wb5ld6sDdU8iLOciZSlfJeG-5YebDR8At~vtY-dcktH9D2EWe8d9ureFiKlIZeZbxFanAhDI1JETYEJ13hHtTYUTZeduQjmO2yhff-MEy-lFRnvzXcPMrfOBFq8L8DbR~XHmOruN9zi1wi0oqvQtOZBMC7Trk-y3OxzMYB5olIA1BdBvcDPqiqaJ0c6VevAvZ5KVFgXxOeFp5LmuA__"
            alt="alt"
            width={378}
            height={244}
            className="w-full opacity-50 hover:opacity-70"
          />
          <div className="absolute -mt-10 ml-6 text-xl font-semibold">
            Photographers
          </div>
        </div>
        <div className="image-wrapper w-full hover:cursor-pointer rounded-xl">
          <img
            src="https://s3-alpha-sig.figma.com/img/2a3f/e4f0/49210c75e53aeab5931fdd1df48929dc?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cf00JPza12krDTZOoRazJIgf5ztrrqFQmx4UY44ttkSFDdSCVZ-anOkPXie74EnzOFsPwPsSnZhnPcqC9fUuwzxxX3VpHJ~7oCLrUcvjr9AHgV~yMgp7C3LQ0zkMnh4m8B7QgU32omNYbjBO1B6v5rwHKilF7OaeMN5WTPPAz7zRxVI6bmfHofO~sm5d5Y6HkT4L0e6ajoU5mB~K3k8iaptBnkkkd0auerahx9x85s2B~EGZGyrZg7sHd2yBpBKBRQzwpIb8slxRyBTO91vWcXCDqevB7aNYtOshgHwW34zynKO7EF7O4neZAm2BinCMJf9Wo~ARUu9sOVcT2i3Whg__"
            alt="alt"
            width={378}
            height={244}
            className="w-full opacity-50 hover:opacity-70"
          />
          <div className="absolute -mt-10 ml-6 text-xl font-semibold">
            Florists
          </div>
        </div>
        <div className="image-wrapper w-full hover:cursor-pointer rounded-xl">
          <img
            src="https://s3-alpha-sig.figma.com/img/15f7/671f/211b93d6ae68bcdb161ceb8a04dc16ce?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c8OiCA6~ulTVBU6fp41pnRjunygu30N5ZT1mUGa7YX8BFbmmqL9ENgtMIbGJKYPGGLcyQ0xfdns2dBDqrDmtzw0F0mrBf-AJdtGro4vQNNnur1xRIjuRHUbHVlg1VjF9iBra5hfDNhTYUZB7oqSZqsQag2oAr2d6fR2sq6afkY02kRL9Rxo204ug7pl25s5w9ozWM0R30qtfNFETOHWSDrC7IDir9QoadneOeRnEVmsSTYU-nw~J0H8Fep7c1XEr~6RMsu1l-vCL0tZd1mQ50cIV5BLTaa5IZOO29hPQKE6s6M4Av6pNUclEkyX5WCbG5tk2E1jfrf-ZprgW8QMbEQ__"
            alt="alt"
            width={378}
            height={244}
            className="w-full opacity-50 hover:opacity-70"
          />
          <div className="absolute -mt-10 ml-6 text-xl font-semibold">
            Decor
          </div>
        </div>
        <div className="image-wrapper w-full hover:cursor-pointer rounded-xl">
          <img
            src="https://s3-alpha-sig.figma.com/img/6fec/87ed/2a18c034830ed05659f71e640a461661?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q8RnE9Ao4V2auL-i986IIjMEMJXeY5OWncwuahF9qN6ZR9vrTDg2ZXcbqRsTN5mhgEHiiIqRzlVJ4db4bu7GXh~jvtXdKrZxS8UjCWFyzfdZhpCwhQfPBy62jCBwYIU9pnmUxT8naqYuka~A6sEFBr0ujqmibjtw1koQNiZ3O~OSB7IzbRK07GLtt0pLjiLaEnnQPXrsUI1JxqlSm6zNuhftpIhFBZa5VW1vO4hUmHbleNyTWc5mQCfBPnpWI6IxdGjM8Q2x99HA947wlSEuPC9lrAIzhKo48SdX54tMSO3HKNU4BUpCneqGxnK7obFU5hk4YrJcaCmzYYy~oG5zNg__"
            alt="alt"
            width={378}
            height={244}
            className="w-full opacity-50 hover:opacity-70"
          />
          <div className="absolute -mt-10 ml-6 text-xl font-semibold">
            DJs and Bands
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <button
          className="px-[17vw] text-2xl py-3.5 rounded-xl text-center bg-[#ffffff20]"
          onClick={async () => {
            try {
              const response = await fetch(
                "https://the-shadi-server.onrender.com/api/v1/vendors/enroll",
                {
                  method: "POST",
                  body: JSON.stringify({
                    businessName: businessName,
                    contactEmail: contactDetails,
                  }),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );
              const data = await response.json();
              console.log(data);
              setBusinessName("");
              setContactDetails("");
              toast.success("Signup successful");
            } catch (error) {
              console.error(error);
              toast.error("Signup failed");
            }
          }}
        >
          Signup
        </button>
      </div>
    </div>
  );
};
