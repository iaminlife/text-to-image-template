export default {
  async fetch(request, env) {
    const inputs = {
      prompt: "Whale+Breach+Moment,+Lenticular+Sunset,+Recollection,+broken+patterns,+Fogged+Film,+soft+bokeh",
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
