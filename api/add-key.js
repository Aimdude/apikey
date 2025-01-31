// api/add-key.js

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { key } = req.body;

        // Vérifie que la clé existe
        if (!key) {
            return res.status(400).json({ error: 'Key is required' });
        }

        // Exemple de logique de stockage des clés
        const keys = process.env.STORED_KEYS || [];
        keys.push(key);

        return res.status(200).json({ message: 'Key added successfully', keys });
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}