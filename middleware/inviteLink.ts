export default defineNuxtRouteMiddleware(async () => {
  const { $client } = useNuxtApp()
  const { data } = await $client.organization.getInviteLink.useQuery()
  console.log(data.value)
  const { isActive } = data.value
  if (isActive === true) {
    return
  }

  return navigateTo('/')
})
