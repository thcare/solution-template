/** Wraps the function to catch any errors and return an appropriate response. */
export default async function (context, req) {
  try {
    const api = await import("../dist/src/functions/onFormSubmitted.js");
    return api.default(context, req);
  } catch (e) {
    context.log.error(`failed to execute function: ${e.message}`);
    return {
      status: 500,
      body: JSON.stringify({
        message: e.message,
      }),
    };
  }
}
