import React from "react";
import { Timeline } from "@/components/ui/timeline";

const MyTimeline = () => {
  const data = [
    {
      title: "2021",
      content: (
        <div>
          <p className="mb-8 text-3xl  text-white font-bold md:text-xl dark:text-neutral-200">
            I started learning in Huflit university. I learned many things
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://cdn2.fptshop.com.vn/unsafe/800x0/hoc_phi_huflit_2024_1_3f5e7c00a5.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/474476593_1385029225802100_7821619075051068334_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_nC_92N0es0Q7kNvwFhvvsO&_nc_oc=AdkTft1e0Rpqe7U4p3yHyPDY3gPhuBDCDgzYB7EeHfl9uFoM2-25SHM7l1q579enZzA&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=LOR9uuOudpK7BifN12Xwsg&oh=00_Afa_4XRVFIw54J0Zs2rFNsoNJi_q-90XQKH-wIKMRKcGAw&oe=68D2C4B2"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/480926094_655513057000932_3993018035477569438_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_aid=0&_nc_ohc=KzgNkVr62FAQ7kNvwGnYe8m&_nc_oc=AdkYoE6xeAOFUoSdQQL1CFRaofzRnRiQFe-OE8fx-KlnWGd3GDVgt5nk7rqcjz_WZT8&_nc_zt=23&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=pFh38G4UrX9VcHqB-DTgMg&oh=00_Afbs3GZ5uq-ATk9EUqB9XBx514bugYyw6zDvDHmfGr3zzQ&oe=68D2CD45"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://nld.mediacdn.vn/zoom/700_438/291774122806476800/2021/5/19/huflit-ho-chi-minh--1621393373870806051888.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      ),
    },
    {
      title: "September 2022",
      content: (
        <div>
          <p className="mb-8 text-3xl text-white font-bold md:text-xl dark:text-neutral-200">
            In 2022, I joined the Code Mely Club as a member of the Technical
            Team, responsible for providing technical support and participating
            in the club’s programming projects.
          </p>
          {/* <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p> */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://media.licdn.com/dms/image/v2/D562DAQHf-Oi2s53tkQ/profile-treasury-image-shrink_8192_8192/B56ZjWQp3fIEAo-/0/1755941347820?e=1758873600&v=beta&t=3DTwswOJG5gE91T2P5xe2XNBGoOSHQLWrNlw0L0cXBk"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://media.licdn.com/dms/image/v2/D562DAQE_51RBRUmCqQ/profile-treasury-image-shrink_1280_1280/B56ZjWQhIQG4AU-/0/1755941311523?e=1758873600&v=beta&t=L6wui-DH6o2dnA3rRLEewE4Si3L4MJY-zdiS8Y6zHzY"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://media.licdn.com/dms/image/v2/D562DAQFVVochhFwU5A/profile-treasury-image-shrink_800_800/B56ZjWQdiMG4AY-/0/1755941297151?e=1758873600&v=beta&t=PqMWNXlo_YjlHCTv2nmpwOSvEFIMTEqWetsiWwaYPIA"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/480089883_611192078298441_8076397959609266971_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=VSKndUownx0Q7kNvwEsHM_z&_nc_oc=AdnDM2Vae43R5iAZ6zv7aLrg_ugZrrGELTn43H5Ict5GmvWzadeLK3DAXM249JRLGJo&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=tB4VDFd-CCb9iuNkQEjbrQ&oh=00_AfaH33FfjiEwOrh994khe-PJxgl_uO_r6DQEOCpoULYhMQ&oe=68D2D26D"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="mb-4 text-3xl text-white font-bold md:text-xl dark:text-neutral-200">
            In 2025, I started working at DK Tech as a Backend Developer.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
};

export default MyTimeline;
