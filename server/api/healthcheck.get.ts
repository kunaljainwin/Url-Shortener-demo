export default defineEventHandler((event) => {
    // Set the response status if needed
    event.res.statusCode = 200;
  
    // Respond with JSON
    return {
      status: 200,
      message: 'Success',
    };
  });