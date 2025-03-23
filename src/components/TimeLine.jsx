import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaCertificate, FaTools, FaPaintBrush } from "react-icons/fa"; 

const TimeLine = () => {
    return (
        <div className="p-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
           <VerticalTimeline lineColor="#d1d5db">
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#F3F4F6", color: "#333" }}
        contentArrowStyle={{ borderRight: "7px solid #F3F4F6" }}
        date={
            <span className="text-[25px] font-bold text-black">
                Education
            </span>
        }
        iconStyle={{ background: "#3b82f6", color: "#fff" }}
        icon={<FaGraduationCap />}
    >
        <h3 className="vertical-timeline-element-title text-[17px] font-bold pb-2">
            Bachelor of Computer Science
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
            LN College - University of Mumbai
        </h4>
        <p className="mt-1">2018 - 2021</p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#F3F4F6", color: "#333" }}
        contentArrowStyle={{ borderRight: "7px solid #F3F4F6" }}
        date={
            <span className="text-[25px] font-bold text-black">
                Certification
            </span>
        }
        iconStyle={{ background: "#10b981", color: "#fff" }}
        icon={<FaCertificate />}
    >
        <h3 className="vertical-timeline-element-title text-[17px] font-bold pb-2">
            Full Stack Software Development
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
            DVOC Institute - Andheri (East)
        </h4>
        <p className="mt-1">2022 - 2023</p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "#F3F4F6", color: "#333" }}
        contentArrowStyle={{ borderRight: "7px solid #F3F4F6" }}
        date={
            <span className="text-[25px] font-bold text-black">
                Extra Activities
            </span>
        }
        iconStyle={{ background: "#f97316", color: "#fff" }}
        icon={<FaTools />}
    >
        <h3 className="vertical-timeline-element-title text-[17px] font-bold pb-2">
            Deployment and Exclusions
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
            Git, Github, Git Ignore, Vercel, Rendor, Netlify.
        </h4>
    </VerticalTimelineElement>

    <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "#F3F4F6", color: "#333" }}
        contentArrowStyle={{ borderRight: "7px solid #F3F4F6" }}
        date={
            <span className="text-[25px] font-bold text-black">
                Hobbies
            </span>
        }
        iconStyle={{ background: "#ef4444", color: "#fff" }}
        icon={<FaPaintBrush />}
    >
        <h4 className="vertical-timeline-element-subtitle">
            Graphic Designing, Poster Designing, Coding, Cricket, Running.
        </h4>
    </VerticalTimelineElement>
</VerticalTimeline>
        </div>

    );
};

export default TimeLine;
