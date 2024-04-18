import express from 'express';

import apiCaller from '../util/apiCaller.js';

const router = express.Router();

router.get('/' , async (req, res) => {
    try{
        const data = await apiCaller();

        const name = 'Gabe'

        res.status(202).json({
            'msg': data
        });
    }catch(err) {
        res.status(500).json({
            'msg': `data get failed`
        })
    }
})

export default router;