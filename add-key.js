// add-key.js
export default function handler(req, res) {
    if (req.method === 'POST') {
        const { key } = req.body;

        if (!key) {
            return res.status(400).json({ error: 'Key is required' });
        }

        return res.status(200).json({ message: 'Key added successfully' });
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}