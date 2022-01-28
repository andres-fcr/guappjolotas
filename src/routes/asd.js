
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Formulario from '../components/Formulario';
import Guajolote from '../components/Guajolote';

<BrowserRouter>
<Routes>
  <Route path="/" element={<Guajolote />} />
  <Route path="*" element={<Navigate to="/" />} />
  <Route path="/crearCuenta" element={<Formulario />} />
</Routes>
</BrowserRouter>