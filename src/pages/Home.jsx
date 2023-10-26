import React from "react";
import GoogleLoginPage from "../components/GoogleLoginPage";
import Imgae from "../asset/book-stack_3389081.png";

export default function Home() {
  return (
    <div>
      <div className="hero min-h-screen bg-blue-950">
        <div className="hero-content flex-col">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body text-center m-10">
              {/* <img src="../asset/book-stack_3389081.png" alt="알서재 로고" className="w-60 h-60"/> */}
              <img src={Imgae} className='px-20 pb-5' alt='알서재 로고'/>
                <h2 className="text-4xl font-bold text-black text-center mb-6">알서재</h2>
                  <GoogleLoginPage />
                  <div className="form-control">
                <a href="mailto:yrnoh@rsupport.com" className="label-text-alt link link-hover mt-3 text-sm">혹시 문제가 있으시다면 메일을 보내주세요.</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}