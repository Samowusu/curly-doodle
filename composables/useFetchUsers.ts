export default async () => {
  const { data, error } = await useFetch('http://localhost:5000/users')

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode,
      statusMessage: error.value.statusMessage
    })
  }

  return data
}
