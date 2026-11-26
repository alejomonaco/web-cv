import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import { existsSync } from 'fs';
import { mkdir, readFile, writeFile } from 'fs/promises';
import { randomUUID } from 'crypto';

export interface Project {
  id: number;
  title: string;
  description: string;
  businessValue?: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  demoUrl?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

interface StoredContactMessage extends ContactMessage {
  id: string;
  createdAt: string;
}

interface ContactMessagePayload {
  name?: unknown;
  email?: unknown;
  message?: unknown;
}

const app = express();

const port = Number.parseInt(process.env.PORT ?? '5000', 10);
const allowedOrigins = (process.env.CLIENT_ORIGIN ?? '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);
const clientBuildPath = process.env.CLIENT_BUILD_PATH
  ? path.resolve(process.env.CLIENT_BUILD_PATH)
  : path.resolve(process.cwd(), '..', 'client', 'build');
const clientIndexPath = path.join(clientBuildPath, 'index.html');
const hasClientBuild = existsSync(clientIndexPath);
const contactMessagesPath = process.env.CONTACT_MESSAGES_FILE
  ? path.resolve(process.env.CONTACT_MESSAGES_FILE)
  : path.resolve(process.cwd(), 'data', 'contact-messages.json');

const ensureContactMessagesStore = async () => {
  const directory = path.dirname(contactMessagesPath);
  await mkdir(directory, { recursive: true });

  if (!existsSync(contactMessagesPath)) {
    await writeFile(contactMessagesPath, '[]\n', 'utf8');
  }
};

const readStoredMessages = async () => {
  await ensureContactMessagesStore();

  const fileContents = await readFile(contactMessagesPath, 'utf8');

  try {
    const parsed = JSON.parse(fileContents) as StoredContactMessage[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const saveContactMessage = async (message: ContactMessage) => {
  const existingMessages = await readStoredMessages();
  const storedMessage: StoredContactMessage = {
    ...message,
    id: randomUUID(),
    createdAt: new Date().toISOString()
  };

  existingMessages.push(storedMessage);
  await writeFile(contactMessagesPath, `${JSON.stringify(existingMessages, null, 2)}\n`, 'utf8');

  return storedMessage;
};

const sanitizeText = (value: unknown) => (typeof value === 'string' ? value.trim() : '');

const validateContactMessage = (payload: ContactMessagePayload) => {
  const message: ContactMessage = {
    name: sanitizeText(payload.name),
    email: sanitizeText(payload.email),
    message: sanitizeText(payload.message)
  };

  const errors: string[] = [];

  if (message.name.length < 2) {
    errors.push('El nombre debe tener al menos 2 caracteres.');
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(message.email)) {
    errors.push('El email no tiene un formato valido.');
  }

  if (message.message.length < 10) {
    errors.push('El mensaje debe tener al menos 10 caracteres.');
  }

  return { message, errors };
};

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }

    callback(new Error(`Origen no permitido por CORS: ${origin}`));
  }
}));
app.use(express.json({ limit: '1mb' }));

const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de Automatizacion de Correos",
    description: "Automatiza comunicacion interna con flujos inteligentes y alertas.",
    businessValue: "Elimina seguimiento manual de tareas criticas.",
    technologies: ["Python", "APIs", "Automatizacion"],
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/alejomonaco"
  },
  {
    id: 2,
    title: "Dashboard de Productividad",
    description: "Panel que convierte habitos y KPIs en decisiones estrategicas.",
    businessValue: "Datos propios, insights accionables y menos tiempo decidiendo.",
    technologies: ["React", "Visualizacion de datos", "Big Data"],
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/alejomonaco"
  },
  {
    id: 3,
    title: "App de Optimizacion de Rutinas",
    description: "Planifica y prioriza flujos de trabajo con IA.",
    businessValue: "Reduce tiempo en tareas de bajo valor y aumenta foco en lo estrategico.",
    technologies: ["Python", "IA", "Automatizacion"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/alejomonaco"
  }
];

app.get('/api/projects', (req: Request, res: Response) => {
  res.json(projects);
});

app.post('/api/contact', async (req: Request, res: Response) => {
  const { message, errors } = validateContactMessage(req.body as ContactMessagePayload);

  if (errors.length > 0) {
    res.status(400).json({
      message: 'Revisa los datos del formulario.',
      errors
    });
    return;
  }

  try {
    const storedMessage = await saveContactMessage(message);
    console.log('Mensaje de contacto recibido:', storedMessage);
    res.status(200).json({ message: 'Gracias por escribir, Alejandro revisara tu mensaje pronto.' });
  } catch (error) {
    console.error('No se pudo guardar el mensaje de contacto:', error);
    res.status(500).json({ message: 'No se pudo guardar el mensaje en este momento.' });
  }
});

app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

if (hasClientBuild) {
  app.use(express.static(clientBuildPath));

  app.get(/^(?!\/api\/).*/, (req: Request, res: Response) => {
    res.sendFile(clientIndexPath);
  });
} else {
  app.get('/', (req: Request, res: Response) => {
    res.send('API del portfolio funcionando correctamente. Ejecuta el build del cliente para servir tambien el frontend.');
  });
}

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
  if (hasClientBuild) {
    console.log(`Sirviendo frontend desde ${clientBuildPath}`);
  }
  console.log(`Guardando mensajes en ${contactMessagesPath}`);
});
