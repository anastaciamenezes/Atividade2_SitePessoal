import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.render('Home'));

router.get('/bio', (req, res) => res.render('Biografia'));

router.get('/portfolio', (req, res) => res.render('Portfolio'));

router.get('/contato', (req, res) => res.render('Contato'));

export default router;