export default async (onboardedUser:any) => {
  try {
    const response = await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(onboardedUser)
    })

    if (!response.ok) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Network response was not ok'
      })
    }

    const createdUser = await response.json()
    return createdUser
  } catch (error) {
    console.error('Error creating user:', error)
    throw error
  }
}
