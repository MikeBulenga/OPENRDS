import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectItem } from "@/components/ui/select";

const zones = ["ZG 1", "ZG 2", "ZG 3", "ZG 4", "ZG 5"];
const categories = [
  "Dérangement", "Alarmes informatiques", "Graissage", "Travaux sur IS",
  "Protection S9", "Protection S11", "Incident", "Rodage",
  "Suivi des détonateurs", "Évènement matériel", "Consigne temporaire", "Divers"
];

function Login({ setAuthenticated }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-violet-500 to-red-500">
      <Card className="p-6 w-96">
        <CardContent>
          <h2 className="text-xl font-bold mb-4">Connexion</h2>
          <Input placeholder="Identifiant (CP)" className="mb-2" />
          <Input type="password" placeholder="Mot de passe SNCF" className="mb-2" />
          <Select>
            {zones.map((zone, index) => (
              <SelectItem key={index} value={zone}>{zone}</SelectItem>
            ))}
          </Select>
          <Button className="mt-4 w-full" onClick={() => setAuthenticated(true)}>Connexion</Button>
        </CardContent>
      </Card>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Tableau de bord</h1>
      <div className="mt-4 flex gap-4">
        <Link to="/create-ticket">
          <Button>Créer un ticket</Button>
        </Link>
        <Link to="/manage-sector">
          <Button>Modifier mon secteur</Button>
        </Link>
        <Link to="/ticket-history">
          <Button>Historique des tickets</Button>
        </Link>
      </div>
    </div>
  );
}

function CreateTicket() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Créer un ticket</h1>
      <Select className="mt-4">
        {categories.map((category, index) => (
          <SelectItem key={index} value={category}>{category}</SelectItem>
        ))}
      </Select>
      <Input placeholder="Commentaires" className="mt-4" />
      <Button className="mt-4">Valider</Button>
    </div>
  );
}

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={authenticated ? <Navigate to="/dashboard" /> : <Login setAuthenticated={setAuthenticated} />} />
        <Route path="/dashboard" element={authenticated ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/create-ticket" element={authenticated ? <CreateTicket /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
