import React from "react";
import Title from "./Title";

export const Projects = () => {
  return (
    <div className="h-[100vh] py-10 dark:bg-[#0F172A] overflow-auto">
      <div className="flex justify-center items-center flex-col py-5">
        <Title
          title="Projects"
          lightThemeTextColor="#1E293B"
          darkThemeTextColor="#dddddd"
          lightThemeBlockColor="#9D174D"
          darkThemeBlockColor="#F9A8D4"
          blockWidth="150px"
        />
      </div>
      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5">
        <div class="col-span-4 flex flex-col items-center text-center lg:col-span-1 lg:items-start lg:text-left">
          <div
            class="flex h-[350px] w-full flex-col justify-end rounded-md relative overflow-hidden"
            style={{
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1673735396428-d51dc2a7a62d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt="AirMax Pro"
              class="object-cover w-full h-[350px] rounded-[10px] z-0"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div class="absolute left-4 bottom-4 text-left">
              <h1 class="text-xl text-white font-semibold">AirMax Pro</h1>
              <p class="text-gray-300 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis?
              </p>
              <button class="text-base text-white cursor-pointer mt-2 font-semibold">
                Shop Now →
              </button>
            </div>
          </div>
        </div>
        <div class="col-span-4 flex flex-col items-center text-center lg:col-span-1 lg:items-start lg:text-left">
          <div
            class="flex h-[350px] w-full flex-col justify-end rounded-md relative overflow-hidden"
            style={{
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
              alt="Running Pro"
              class="object-cover w-full h-[350px] rounded-[10px] z-0"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div class="absolute left-4 bottom-4 text-left">
              <h1 class="text-xl text-white font-semibold">Running Pro</h1>
              <p class="text-gray-300 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis?
              </p>
              <button class="text-base text-white cursor-pointer mt-2 font-semibold">
                Shop Now →
              </button>
            </div>
          </div>
        </div>
        <div class="col-span-4 flex flex-col items-center text-center lg:col-span-1 lg:items-start lg:text-left">
          <div
            class="flex h-[350px] w-full flex-col justify-end rounded-md relative overflow-hidden"
            style={{
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
              alt="White Sneakers"
              class="object-cover w-full h-[350px] rounded-[10px] z-0"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div class="absolute left-4 bottom-4 text-left">
              <h1 class="text-xl text-white font-semibold">White Sneakers</h1>
              <p class="text-gray-300 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis?
              </p>
              <button class="text-base text-white cursor-pointer mt-2 font-semibold">
                Shop Now →
              </button>
            </div>
          </div>
        </div>
        <div class="col-span-4 flex flex-col items-center text-center lg:col-span-1 lg:items-start lg:text-left">
          <div
            class="flex h-[350px] w-full flex-col justify-end rounded-md relative overflow-hidden"
            style={{
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1673735396428-d51dc2a7a62d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt="AirMax Pro"
              class="object-cover w-full h-[350px] rounded-[10px] z-0"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div class="absolute left-4 bottom-4 text-left">
              <h1 class="text-xl text-white font-semibold">AirMax Pro</h1>
              <p class="text-gray-300 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis?
              </p>
              <button class="text-base text-white cursor-pointer mt-2 font-semibold">
                Shop Now →
              </button>
            </div>
          </div>
        </div>
        <div class="col-span-4 flex flex-col items-center text-center lg:col-span-1 lg:items-start lg:text-left">
          <div
            class="flex h-[350px] w-full flex-col justify-end rounded-md relative overflow-hidden"
            style={{
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
              alt="Running Pro"
              class="object-cover w-full h-[350px] rounded-[10px] z-0"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div class="absolute left-4 bottom-4 text-left">
              <h1 class="text-xl text-white font-semibold">Running Pro</h1>
              <p class="text-gray-300 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis?
              </p>
              <button class="text-base text-white cursor-pointer mt-2 font-semibold">
                Shop Now →
              </button>
            </div>
          </div>
        </div>
        <div class="col-span-4 flex flex-col items-center text-center lg:col-span-1 lg:items-start lg:text-left">
          <div
            class="flex h-[350px] w-full flex-col justify-end rounded-md relative overflow-hidden"
            style={{
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
              alt="White Sneakers"
              class="object-cover w-full h-[350px] rounded-[10px] z-0"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div class="absolute left-4 bottom-4 text-left">
              <h1 class="text-xl text-white font-semibold">White Sneakers</h1>
              <p class="text-gray-300 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, debitis?
              </p>
              <button class="text-base text-white cursor-pointer mt-2 font-semibold">
                Shop Now →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
