import express from 'express';
import cors from 'cors';
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());
const projects = [
    {
        id: 1,
        title: "Portafolio Full-Stack",
        description: "Un portafolio moderno construido con React y Express.",
        technologies: ["React", "TypeScript", "Node.js", "Express", "CSS"],
        imageUrl: "https://via.placeholder.com/300",
        githubUrl: "https://github.com",
        demoUrl: "https://demo.com"
    },
    {
        id: 2,
        title: "E-commerce API",
        description: "Una API robusta para una tienda online con autenticación.",
        technologies: ["Node.js", "Express", "MongoDB", "TypeScript"],
        imageUrl: "https://via.placeholder.com/300",
        githubUrl: "https://github.com"
    }
];
app.get('/api/projects', (req, res) => {
    res.json(projects);
});
app.post('/api/contact', (req, res) => {
    const message = req.body;
    console.log('Mensaje de contacto recibido:', message);
    res.status(200).json({ message: '¡Gracias por tu mensaje! Me pondré en contacto pronto.' });
});
app.get('/', (req, res) => {
    res.send('API del Portafolio funcionando correctamente.');
});
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map