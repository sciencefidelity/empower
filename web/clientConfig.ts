import PicoSanity from "picosanity"

const Client = new PicoSanity({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET!,
  useCdn: true
})

export default Client
