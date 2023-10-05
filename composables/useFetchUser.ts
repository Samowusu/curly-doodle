export default async (id: string) => {
  const { data, error } = await useFetch(`http://localhost:5000/users/${id}`)

  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode,
      statusMessage: error.value.statusMessage
    })
  }

  return data
}
