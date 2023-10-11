export default defineNuxtRouteMiddleware(async () => {
  const { $client } = useNuxtApp()
  const { data: userData } = useAuth()
  const { data } = await $client.user.getUser.useQuery({ email: userData.value?.user?.email })
  console.log(data.value)
  const completedOnboarding = data.value
  if (completedOnboarding) {
    return
  }

  return navigateTo('/onboarding')
})
