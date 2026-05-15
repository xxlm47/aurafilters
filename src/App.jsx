import { useAppStore } from './features/filters/appStore'
import Header from './components/layout/Header'
import Ticker from './components/layout/Ticker'
import Footer from './components/layout/Footer'
import Studio from './app/Studio'
import Marketplace from './app/Marketplace'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const activeTab = useAppStore(state => state.activeTab)

  return (
    <div className="min-h-screen bg-deep-dark flex flex-col selection:bg-neon-cyan selection:text-black">
      <Header />
      <Ticker />

      <main className="flex-1 overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {activeTab === 'studio' ? <Studio /> : <Marketplace />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-violet/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-pink/10 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-neon-cyan/5 blur-[100px] rounded-full" />
      </div>
    </div>
  )
}

export default App
