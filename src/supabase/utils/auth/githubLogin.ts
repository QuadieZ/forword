import supabase from "@/supabase";

export type GithubSigninPayload = {
  provider: 'github'
}

export async function githubSignin(payload: GithubSigninPayload) {
  const { provider } = payload

  if (!supabase) {
      throw new Error("Supabase client is not available")
  }

  const res = await supabase.auth.signInWithOAuth({
      provider
  })

  if (res.error || !res) {
      throw new Error("Failed to sign in")
  }

  return res.data
}

