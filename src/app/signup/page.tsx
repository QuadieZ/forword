"use client";

import { emailSignup } from "@/supabase/utils/auth/emailSignup";

export default function Signup() {
  return (
    <div className="flex flex-col p-4 gap-4">
      Signup
      <button
        onClick={() => {
          emailSignup({ email: "phpich.10@gmail.com", password: "Test12345" });
        }}
        className="w-fit p-2 bg-white text-black"
      >
        Signup with email
      </button>
    </div>
  );
}
