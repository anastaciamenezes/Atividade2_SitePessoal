import express from 'express';
import path from 'path';

const app = express();

/**
 * Configuração das páginas
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/**
 * Configuração dos recursos estáticos (imagens, fontes)
 */

app.use(express.static(path.join(__dirname, 'public')));

/**
 * Criando a rota da página inicial
 */
app.get('/', (req, res) => res.render('index'));

/**
 * Criando a rota da página de biografia
 */
app.get('/bio', (req, res) => res.render('bio'));

/**
 * Criando a rota da página de portfolio
 */
app.get('/portfolio', (req, res) => res.render('portfolio'));

/**
 * Criando a rota da página de contato
 */
app.get('/contato', (req, res) => res.render('contato'));

export default app;