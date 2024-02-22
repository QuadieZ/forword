import supabase from "@/supabase";

export type EmailSignupPayload = {
    email: string
    password: string
}

export async function emailSignup(payload: EmailSignupPayload) {
    const { email, password } = payload

    const { data, error } = await supabase?.auth.signUp({
        email,
        password
    })
}