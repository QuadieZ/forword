"use client";

import {
  ChakraProvider,
  Stack,
  HStack,
  Text,
  position,
  Input,
} from "@chakra-ui/react";
import { emailSignup } from "@/supabase/utils/auth/emailSignup";
export default function Signup() {
  return (
    <Stack alignItems="center">
      <Text fontSize="55" position="relative" alignItems="center">
        Welcome to Forward
      </Text>
      <Text fontSize="16" position="relative" alignItems="center" color="gray">
        Sign in to continue
      </Text>
      <Input alignItems="left" placeholder="Email" />
      <Input alignItems="left" placeholder="Password" />
      <div className="flex flex-col p-4 gap-4">
        <button
          onClick={() => {
            emailSignup({
              email: "ruedhaidham16@gmail.com",
              password: "Test12345",
            });
          }}
          className="w-fit p-2 bg-white text-black"
        >
          Signup with Google
        </button>
      </div>
    </Stack>
  );
}
