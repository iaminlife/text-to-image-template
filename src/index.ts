export default {
  async fetch(request, env) {
    const inputs = {
      prompt: "bikini+girl,Beach+Moment,Sunset,realistic,soft+bokeh",
    };

    const response = await env.AI.run(
      "@cf/stabilityai/stable-diffusion-xl-base-1.0",
      inputs,
    );

    return new Response(response, {
      headers: {
        "content-type": "image/png",
      },
    });
  },
} satisfies ExportedHandler<Env>;
