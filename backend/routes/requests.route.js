require('dotenv').config();

const express = require('express')
const router = express.Router();
const axios = require('axios');

router.post("/fal-ai", async (req, res) => {
    const { prompt, negative_prompt, num_inference_steps, guidance_scale } = req.body
    const query = {
        prompt, 
        negative_prompt, 
        num_inference_steps, 
        guidance_scale,
        image_size: "landscape_16_9",
        num_images: 1,
        enable_safety_checker: true
    }
    try {
        const result = await axios.post(process.env.FAL_URI, query, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Key ${process.env.FAL_KEY}`
            }
        })
        return res.status(200).json(result.data)
    } catch (err) {
        return res.status(400).json({ message: err.msg })
    }
})

module.exports = router;