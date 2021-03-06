import serrializeError from 'serialize-error'

export default (handler) => async (event) => {
  try {
    return await handler(event)
  } catch (error) {
    console.error(error)

    return {
      statusCode: 500,
      body: JSON.stringify({
        reason: serrializeError(error)
      })
    }
  }
}
