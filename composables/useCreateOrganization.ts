export default async (organization:any) => {
  try {
    const response = await fetch('http://localhost:5000/organizations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(organization)
    })
    if (!response.ok) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Network response was not ok'
      })
    }
  } catch (error) {
    console.error('Error creating user:', error)
    throw error
  }
}
