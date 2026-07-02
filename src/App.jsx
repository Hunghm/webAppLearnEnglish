import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import CategoryPage from './pages/CategoryPage.jsx'
import FlashcardPage from './pages/FlashcardPage.jsx'
import FlashcardPage2 from './pages/FlashcardPage2.jsx'
import QuizPage from './pages/QuizPage.jsx'
import SpellingPage from './pages/SpellingPage.jsx'
import ResultPage from './pages/ResultPage.jsx'
import GrammarDetailPage from './pages/GrammarDetailPage.jsx'
import FolderPage from './pages/FolderPage.jsx'
import ExercisesPage from './pages/ExercisesPage.jsx'
import ExerciseUnitPage from './pages/ExerciseUnitPage.jsx'
import QRGeneratorPage from './pages/QRGeneratorPage.jsx'
import DestinationPage from './pages/DestinationPage.jsx'
import B2ContentPage from './pages/destination/B2ContentPage.jsx'
import B2CategoryPage from './pages/destination/B2CategoryPage.jsx'
import B2GrammarDetailPage from './pages/destination/B2GrammarDetailPage.jsx'
import B2ExercisesPage from './pages/destination/B2ExercisesPage.jsx'
import B2ExerciseUnitPage from './pages/destination/B2ExerciseUnitPage.jsx'
// import C1ExerciseUnitPage from './pages/destination/C1ExerciseUnitPage.jsx'
import C1C2ContentPage from './pages/destination/C1C2ContentPage.jsx'
import C1C2CategoryPage from './pages/destination/C1C2CategoryPage.jsx'
import C1C2GrammarDetailPage from './pages/destination/C1C2GrammarDetailPage.jsx'
import C1C2ExercisesPage from './pages/destination/C1C2ExercisesPage.jsx'
import C1C2ExerciseUnitPage from './pages/destination/C1C2ExerciseUnitPage.jsx'
import LoginPage from './pages/LoginPage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:unitId" element={<CategoryPage />} />
          <Route path="/flashcard" element={<FlashcardPage />} />
          <Route path="/flashcard2" element={<FlashcardPage2 />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/spelling" element={<SpellingPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/grammar/:index" element={<GrammarDetailPage />} />
          <Route path="/folder/:folderId" element={<FolderPage />} />
          <Route path="/exercises" element={<ExercisesPage />} />
          <Route path="/exercises/:unitKey" element={<ExerciseUnitPage />} />
          <Route path="/qr" element={<QRGeneratorPage />} />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/destination/b2" element={<B2ContentPage />} />
          <Route path="/destination/b2/vocab/:unitId" element={<B2CategoryPage />} />
          <Route path="/destination/b2/grammar/:unitIndex" element={<B2GrammarDetailPage />} />
          <Route path="/destination/b2/exercises" element={<B2ExercisesPage />} />
          <Route path="/destination/b2/exercises/:unitKey" element={<B2ExerciseUnitPage />} />
          {/* <Route path="/destination/c1/exercises/:unitKey" element={<C1ExerciseUnitPage />} /> */}
          <Route path="/destination/c1c2" element={<C1C2ContentPage />} />
          <Route path="/destination/c1c2/vocab/:unitId" element={<C1C2CategoryPage />} />
          <Route path="/destination/c1c2/grammar/:unitIndex" element={<C1C2GrammarDetailPage />} />
          <Route path="/destination/c1c2/exercises" element={<C1C2ExercisesPage />} />
          <Route path="/destination/c1c2/exercises/:unitKey" element={<C1C2ExerciseUnitPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
