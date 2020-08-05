import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID j4kkTLocDmCfxGxFx2mVfJA18WMMLADka59Y-fsKqH4",
  },
});
