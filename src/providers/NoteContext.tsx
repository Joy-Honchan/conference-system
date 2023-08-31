import {
  createContext,
  ReactNode,
  useState,
  useMemo,
  useCallback,
  useEffect
} from 'react'

interface ContextType {
  notes: NoteType
  handleNotes: (time: string, note: string) => void
}

interface NoteType {
  [x: string]: string
  // "20230830":"some note here"
}

export const NoteContext = createContext<ContextType>({
  notes: {},
  handleNotes: () => {}
})

const NoteProvider = ({ children }: { children: ReactNode }) => {
  const initNote: NoteType =
    JSON.parse(localStorage.getItem('notes') || 'null') || {}
  const [notes, setNotes] = useState<NoteType>(initNote)

  const handleNotes = useCallback((time: string, note: string) => {
    setNotes((prev) => ({ ...prev, [time]: note }))
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const value = useMemo(
    () => ({
      notes,
      handleNotes
    }),
    [notes, handleNotes]
  )

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>
}

export default NoteProvider
