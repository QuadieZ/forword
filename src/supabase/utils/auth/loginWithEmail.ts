import supabase from "@/supabase";

export type loginWithEmail = {
    email: string
    password: string
}

export async function loginWithEmail() {
    const { email, password } = await supabase.auth.signInWithPassword({
      email: 'example@email.com',
      password: 'example-password',
    })
  }
  