export default defineNuxtRouteMiddleware(async (to) => {
  const { token } = to.params
  const { $client } = useNuxtApp()
  const { data } = await $client.organization.getInviteLink.useQuery({ token })
  console.log(data.value)
  const { isActive } = data.value
  if (isActive === true) {
    return
  }

  return navigateTo('/')
})
