"use client";

import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { ArrowLeftIcon, Squares2X2Icon } from "@heroicons/react/24/outline";

function RegistrationClosed() {
  return (
    <section className="min-h-[calc(100vh-5rem)] bg-dark-red text-white flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block border-2 border-red-primary bg-red-primary/15 px-4 py-2 mb-8">
          <p className="text-red-primary text-xs md:text-sm font-mono tracking-wider">
            REGISTRATION_CLOSED
          </p>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase mb-4 font-mono tracking-wide">
          REGISTRATION CLOSED
        </h1>
        <div className="w-20 h-1 bg-red-primary mx-auto mb-8" />

        <p className="text-gray-400 text-base md:text-lg font-mono tracking-wider mb-6 leading-relaxed">
          REGISTRATION FOR DEVELOPER'S DAY 2026 HAS BEEN CLOSED.
          <br />
          THANK YOU FOR YOUR INTEREST IN OUR EVENT.
        </p>
{/* 
        <p className="text-gray-500 text-sm font-mono tracking-wider mb-10">
          IF YOU HAVE ANY QUERIES, PLEASE CONTACT US VIA THE CONTACT PAGE.
        </p> */}

        <div className="w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Button
            as={Link}
            href="/"
            className="bg-red-primary hover:bg-red-700 text-white font-bold"
            radius="none"
            startContent={<ArrowLeftIcon className="w-5 h-5" />}
          >
            BACK TO HOME
          </Button>
          <Button
            as={Link}
            href="/modules"
            className="bg-red-primary hover:bg-red-700 text-white font-bold"
            radius="none"
            endContent={<Squares2X2Icon className="w-5 h-5" />}
          >
            EXPLORE MODULES
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function RegisterPage() {
  return <RegistrationClosed />;
}