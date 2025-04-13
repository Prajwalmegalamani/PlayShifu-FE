"use client";
import React, { useState } from "react";
// import PeepulTree_Logo_Full from "../../../public/images/logo.webp";
import {
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Linkedin,
  CreditCard,
  ChevronDown,
} from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const tempFooterUrls = [
  {
    name: "Shop by category",
    url_links: [
      {
        name: "Shop by category",
        url: {
          current: "/shop-by-category",
        },
        title: "Shop by category",
      },
    ],
  },
  {
    name: "Support Parents & Educators",
    url_links: [
      {
        name: "Support Parents & Educators",
        url: {
          current: "/support-parents-educators",
        },
        title: "Support Parents & Educators",
      },
    ],
  },
  {
    name: "Blog",
    url_links: [
      {
        name: "Blog",
        url: {
          current: "/blog",
        },
        title: "Blog",
      },
    ],
  },
  {
    name: "About us",
    url_links: [
      {
        name: "About us",
        url: {
          current: "/about-us",
        },
        title: "About us",
      },
    ],
  },
  {
    name: "Device Compatibility",
    url_links: [
      {
        name: "Device Compatibility",
        url: {
          current: "/device-compatibility",
        },
        title: "Device Compatibility",
      },
    ],
  },
  {
    name: "FAQ",
    url_links: [
      {
        name: "FAQ",
        url: {
          current: "/faq",
        },
        title: "FAQ",
      },
    ],
  },
  {
    name: "Contact us",
    url_links: [
      {
        name: "Contact us",
        url: {
          current: "/contact-us",
        },
        title: "Contact us",
      },
    ],
  },
];

export default function NewFooter() {
  const [footerUrls, setFooterUrls] = useState(tempFooterUrls);

  return (
    <div className="flex flex-col lg:justify-center justify-center px-10 gap-[23px] lg:gap-0 align-middle items-center lg:items-center w-full h-full">
      <div className="lg:py-[47px] lg:border-t py-10 flex flex-col gap-[55px] lg:gap-0 lg:flex-row justify-evenly align-middle items-start w-full h-full">
        <div className="flex flex-col justify-start align-middle items-start w-full h-full">
          <div className="flex w-full flex-col lg:flex-row justify-start align-middle items-start gap-4 lg:gap-10">
            <div className="flex flex-col justify-start align-middle items-center gap-4">
              {/* Join the PlayShifu Club */}
              <div className="flex flex-col justify-start align-middle border-y lg:border-none py-4 lg:py-0 w-full items-start gap-4">
                <div className="md:max-w-[297px] text-sm leading-[21px] w-full font-normal text-Text-primary flex md:flex-col gap-2">
                  <span
                    data-nosnippet
                    className="font-bold text-lg w-full flex justify-center md:justify-start items-center max-w-[150px]"
                  >
                    Join the PlayShifu Club
                  </span>
                  <div className="flex flex-col gap-2 w-full">
                    <span data-nosnippet className="font-light text-sm">
                      viverra ullamcorper Quisque Morbi dolor In efficitur.
                      Nullam venenatis
                    </span>
                    <div className="flex w-fit">
                      <Button variant="default">Join The Club</Button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Need Help in something */}
              <div className="flex flex-col justify-start align-middle border-b lg:border-none py-4 items-start gap-4">
                <div className="md:max-w-[297px] text-sm leading-[21px] w-full font-normal text-Text-primary flex md:flex-col gap-2">
                  <span
                    data-nosnippet
                    className="font-bold text-lg w-full flex justify-center md:justify-start items-center max-w-[150px]"
                  >
                    Need Help in something
                  </span>
                  <div className="flex flex-col gap-2 w-full">
                    <span data-nosnippet className="font-light text-sm">
                      viverra ullamcorper Quisque Morbi dolor In efficitur.
                      Nullam venenatis
                    </span>
                    <div className="flex w-fit">
                      <Button variant="default">Contact Us</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Footer Links */}
            <div className="w-full h-fit flex flex-col lg:grid flex-wrap gap-y-[8px] gap-x-[60px] lg:gap-y-[40px] lg:gap-x-[11px] lg:grid-rows-1 lg:grid-cols-4">
              {footerUrls &&
                footerUrls.map((footer_url, index) => {
                  const reorderedFooterUrl = footer_url;

                  // State for toggling dropdown on mobile
                  const [isDropdownOpen, setDropdownOpen] = useState(false);

                  return (
                    <div
                      key={index}
                      className="flex max-h-fit flex-col border-b lg:border-none pb-4 justify-start align-middle items-start gap-[20px] lg:gap-[25px]"
                    >
                      <h3
                        className="w-full text-Text-primary text-lg font-semibold leading-[22px] cursor-pointer lg:cursor-default"
                        onClick={() => setDropdownOpen(!isDropdownOpen)} // Toggle dropdown on mobile
                      >
                        <span className="flex justify-between items-center">
                          {reorderedFooterUrl?.name}
                          <ChevronDown className="w-4 h-4 lg:hidden" />
                        </span>
                      </h3>

                      {/* Dropdown on mobile only */}
                      <div
                        className={`flex flex-col justify-start align-middle items-start gap-[10px] transition-all ${
                          isDropdownOpen ? "block" : "hidden"
                        } lg:block`}
                      >
                        {reorderedFooterUrl.url_links?.map((url, linkIndex) => (
                          <div
                            key={linkIndex}
                            className="text-black-1 text-sm font-normal leading-6 transition-all"
                          >
                            <Link href={url?.url?.current || ""}>
                              {url?.title}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          {/* Connect with us */}
          <div className="flex flex-col py-4 lg:flex-row w-full justify-between align-middle items-center gap-4">
            {/* Connect with us */}
            <div className="flex justify-start align-middle items-start gap-4">
              <span data-nosnippet className="font-bold text-sm text-nowrap">
                Connect with us
              </span>
              <ul className="w-full h-full flex justify-start gap-[25px] align-middle items-center">
                <li>
                  <Link href="https://www.instagram.com/" passHref>
                    <Instagram className="text-Text-primary" />
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/" passHref>
                    {/* <Image src={xlogo} alt="x" width={20} height={20} /> */}
                    <Twitter className="text-Text-primary" />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.facebook.com//" passHref>
                    {/* <Image src={facebook} alt="facebook" width={20} height={20} /> */}
                    <Facebook className="text-Text-primary" />
                  </Link>
                </li>
                <li
                  className="flex justify-center align-middle items-center "
                  style={{ marginLeft: "10px" }}
                >
                  <Link href="https://www.youtube.com/" passHref>
                    {/* <Image src={youtube} alt="youtube" width={20} height={20} /> */}
                    <Youtube className="text-Text-primary" />
                  </Link>
                </li>
                <li style={{ marginLeft: "10px" }}>
                  <Link href="https://in.linkedin.com/company" passHref>
                    {/* <Image src={linkedIn} alt="linkedIn" width={20} height={20} /> */}
                    <Linkedin className="text-Text-primary" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Trust Badges */}
            <div className="flex justify-around px-5 align-middle items-center gap-4">
              <CreditCard className="text-Text-primary w-12 h-12 lg:w-16 lg:h-16" />
              <CreditCard className="text-Text-primary w-12 h-12 lg:w-16 lg:h-16" />
              <CreditCard className="text-Text-primary w-12 h-12 lg:w-16 lg:h-16" />
              <CreditCard className="text-Text-primary w-12 h-12 lg:w-16 lg:h-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
