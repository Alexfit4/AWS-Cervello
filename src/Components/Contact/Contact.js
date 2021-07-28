import React from "react";
import ContactScreen from "./Assets/contactscreenshot.png";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
    const [state, handleSubmit] = useForm("mayadpvl");
    if (state.succeeded) {
      return (
        <h1 className="text-center font-black text-3xl text-white">
          Message sent, someone will get back to you shortly
        </h1>
      );
    }
  return (
    <div>
      <h1 className="font-black text-3xl text-white">Contact Us</h1>

      <div className="grid grid-cols-2 gap-4 pt-6">
        <div className="pl-44 ">
          <form class="w-full max-w-lg" onSubmit={handleSubmit}>
    
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  for="grid-password"
                  id="email"
                  type="email"
                  name="email"
                >
                  E-mail
                </label>
                <input
                  class="appearance-none text-black block w-full bg-gray-200 text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase text-white tracking-wide text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Message
                </label>
                <textarea
                  class=" no-resize text-black appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  id="message"
                  name="message"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
            </div>
            <div class="md:flex md:items-center">
              <div class="md:w-1/3">
                <button
                  class="shadow border-black border-2 bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                  disabled={state.submitting}
                >
                  Send
                </button>
              </div>
              <div class="md:w-2/3"></div>
            </div>
          </form>
        </div>

        <div>
          <img src={ContactScreen} alt="" />

          <div className="grid grid-cols-2 gap-4">
            <div className="text-left">
              <h2>Headquarters</h2>
              <ul>
                <li>440 Collins St.</li>
                <li>Melbourne VIC 3000</li>
                <li>Phone: +61 (3) 85957614 x1143</li>
              </ul>
            </div>
            <div className="text-left">
              <h2>Darwin Office</h2>

              <p>Serenity Views 404D 65 Progress Dr Nightcliff NT 0810</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
