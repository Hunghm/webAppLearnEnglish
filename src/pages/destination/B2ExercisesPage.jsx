import { useNavigate } from 'react-router-dom'

const ALL_ITEMS = [
  { num: 1,  title: 'Present Time',           topic: 'Present simple, continuous, perfect, stative verbs',  type: 'grammar', exercises: 10 },
  { num: 2,  title: 'Travel & Transport',     topic: 'Vocabulary contrast, phrasal verbs, word formation',   type: 'vocab',   exercises: 9  },
  { id: 'review1',  label: 'Review 1',  subtitle: 'Units 1 & 2',    type: 'review' },
  { num: 3,  title: 'Past Time',              topic: 'Past simple, continuous, perfect, used to',            type: 'grammar', exercises: 10 },
  { num: 4,  title: 'People & Relationships', topic: 'Describing people, phrasal verbs, collocations',       type: 'vocab',   exercises: 9  },
  { id: 'review2',  label: 'Review 2',  subtitle: 'Units 3 & 4',    type: 'review' },
  { num: 5,  title: 'Future',                 topic: 'will, going to, present tenses for future',            type: 'grammar', exercises: 10 },
  { num: 6,  title: 'Science & Technology',   topic: 'Phrasal verbs, word patterns, word formation',         type: 'vocab',   exercises: 9  },
  { id: 'review3',  label: 'Review 3',  subtitle: 'Units 5 & 6',    type: 'review' },
  { num: 7,  title: 'Articles & Quantifiers', topic: 'a/an/the, countable/uncountable, few/little',          type: 'grammar', exercises: 10 },
  { num: 8,  title: 'Environment',            topic: 'Nature, eco vocabulary, collocations',                 type: 'vocab',   exercises: 9  },
  { id: 'review4',  label: 'Review 4',  subtitle: 'Units 7 & 8',    type: 'review' },
  { num: 9,  title: 'Modals (1)',             topic: 'Ability, obligation, permission, advice',               type: 'grammar', exercises: 10 },
  { num: 10, title: 'Media & Communication',  topic: 'Phrasal verbs, word formation, word patterns',         type: 'vocab',   exercises: 9  },
  { id: 'review5',  label: 'Review 5',  subtitle: 'Units 9 & 10',   type: 'review' },
  { num: 11, title: 'Modals (2)',             topic: 'Deduction, probability, possibility',                   type: 'grammar', exercises: 10 },
  { num: 12, title: 'Relationships',          topic: 'Describing relationships, phrasal verbs',               type: 'vocab',   exercises: 9  },
  { id: 'review6',  label: 'Review 6',  subtitle: 'Units 11 & 12',  type: 'review' },
  { num: 13, title: 'Conditionals (1)',       topic: 'Zero, first, second conditionals',                      type: 'grammar', exercises: 10 },
  { num: 14, title: 'Health & Fitness',       topic: 'Medical vocabulary, phrasal verbs, word formation',    type: 'vocab',   exercises: 9  },
  { id: 'review7',           label: 'Review 7',        subtitle: 'Units 13 & 14',  type: 'review' },
  { id: 'progress-test-1',   label: 'Progress Test 1', subtitle: 'Units 1–14',     type: 'progress' },
  { num: 15, title: 'Conditionals (2)',       topic: 'Third, mixed conditionals, unless/as long as',          type: 'grammar', exercises: 10 },
  { num: 16, title: 'Work & Career',          topic: 'Jobs, phrasal verbs, collocations',                    type: 'vocab',   exercises: 9  },
  { id: 'review8',  label: 'Review 8',  subtitle: 'Units 15 & 16',  type: 'review' },
  { num: 17, title: '-ing / Infinitive',      topic: 'Verb patterns, prefer, would rather, had better',      type: 'grammar', exercises: 10 },
  { num: 18, title: 'Education & Learning',   topic: 'School vocabulary, word patterns, formation',          type: 'vocab',   exercises: 9  },
  { id: 'review9',  label: 'Review 9',  subtitle: 'Units 17 & 18',  type: 'review' },
  { num: 19, title: 'Questions',              topic: 'Question tags, indirect questions, subject/object',     type: 'grammar', exercises: 10 },
  { num: 20, title: 'Weather & Environment',  topic: 'Weather idioms, phrasal verbs, collocations',          type: 'vocab',   exercises: 9  },
  { id: 'review10', label: 'Review 10', subtitle: 'Units 19 & 20',  type: 'review' },
  { num: 21, title: 'Reported Speech',        topic: 'Statements, questions, commands, backshift',            type: 'grammar', exercises: 10 },
  { num: 22, title: 'Money & Shopping',       topic: 'Financial vocabulary, phrasal verbs, word patterns',   type: 'vocab',   exercises: 9  },
  { id: 'review11', label: 'Review 11', subtitle: 'Units 21 & 22',  type: 'review' },
  { num: 23, title: 'Relative Clauses',       topic: 'Defining/non-defining, participle clauses',             type: 'grammar', exercises: 10 },
  { num: 24, title: 'Entertainment',          topic: 'Arts, media, phrasal verbs, word formation',           type: 'vocab',   exercises: 9  },
  { id: 'review12', label: 'Review 12', subtitle: 'Units 23 & 24',  type: 'review' },
  { num: 25, title: 'Wishes & Regrets',       topic: 'I wish, if only, would rather, it\'s time',            type: 'grammar', exercises: 10 },
  { num: 26, title: 'Fashion & Design',       topic: 'Style vocabulary, word patterns, formation',           type: 'vocab',   exercises: 8  },
  { id: 'review13', label: 'Review 13', subtitle: 'Units 25 & 26',  type: 'review' },
  { num: 27, title: 'Emphasis & Inversion',   topic: 'Cleft sentences, fronting, negative inversion',        type: 'grammar', exercises: 10 },
  { num: 28, title: 'Work & Business',        topic: 'Business vocabulary, phrasal verbs, collocations',     type: 'vocab',   exercises: 9  },
  { id: 'review14',          label: 'Review 14',       subtitle: 'Units 27 & 28',  type: 'review' },
  { id: 'progress-test-2',   label: 'Progress Test 2', subtitle: 'Units 15–28',    type: 'progress' },
]

function UnitCard({ item, onClick }) {
  if (item.type === 'review') {
    return (
      <div
        onClick={onClick}
        style={{
          background: '#FFF8E1', borderRadius: 10, padding: '14px 16px',
          boxShadow: '0 1px 4px rgba(0,0,0,0.1)', cursor: 'pointer',
          transition: 'all .2s', borderLeft: '4px solid #FFD54F',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-2px)'
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
          e.currentTarget.style.borderLeftColor = '#F9A825'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = ''
          e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.1)'
          e.currentTarget.style.borderLeftColor = '#FFD54F'
        }}
      >
        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#888', textTransform: 'uppercase' }}>Review</div>
        <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#E65100', margin: '4px 0 2px' }}>{item.label}</div>
        <div style={{ fontSize: '0.8rem', color: '#666' }}>{item.subtitle}</div>
        <span style={{
          display: 'inline-block', fontSize: '0.65rem', padding: '2px 7px',
          borderRadius: 10, marginTop: 6, fontWeight: 600,
          background: '#FFF3E0', color: '#E65100',
        }}>
          Review · Mixed exercises
        </span>
      </div>
    )
  }

  if (item.type === 'progress') {
    return (
      <div
        onClick={onClick}
        style={{
          background: '#F3E5F5', borderRadius: 10, padding: '14px 16px',
          boxShadow: '0 1px 4px rgba(0,0,0,0.1)', cursor: 'pointer',
          transition: 'all .2s', borderLeft: '4px solid #CE93D8',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-2px)'
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
          e.currentTarget.style.borderLeftColor = '#8E24AA'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = ''
          e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.1)'
          e.currentTarget.style.borderLeftColor = '#CE93D8'
        }}
      >
        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#888', textTransform: 'uppercase' }}>Progress Test</div>
        <div style={{ fontSize: '1rem', fontWeight: 700, color: '#6A1B9A', margin: '4px 0 2px' }}>{item.label}</div>
        <div style={{ fontSize: '0.8rem', color: '#666' }}>{item.subtitle}</div>
        <span style={{
          display: 'inline-block', fontSize: '0.65rem', padding: '2px 7px',
          borderRadius: 10, marginTop: 6, fontWeight: 600,
          background: '#EDE7F6', color: '#6A1B9A',
        }}>
          Progress Test · Full assessment
        </span>
      </div>
    )
  }

  const isGrammar = item.type === 'grammar'
  return (
    <div
      onClick={onClick}
      style={{
        background: 'white', borderRadius: 10, padding: '14px 16px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.1)', cursor: 'pointer',
        transition: 'all .2s', borderLeft: isGrammar ? '4px solid #A5D6A7' : '4px solid #90CAF9',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
        e.currentTarget.style.borderLeftColor = isGrammar ? '#388E3C' : '#1976D2'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = ''
        e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.1)'
        e.currentTarget.style.borderLeftColor = isGrammar ? '#A5D6A7' : '#90CAF9'
      }}
    >
      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#888', textTransform: 'uppercase' }}>
        Unit {item.num}
      </div>
      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: isGrammar ? '#2E7D32' : '#1565C0', margin: '4px 0 2px' }}>
        {item.title}
      </div>
      <div style={{ fontSize: '0.8rem', color: '#666' }}>{item.topic}</div>
      <span style={{
        display: 'inline-block', fontSize: '0.65rem', padding: '2px 7px',
        borderRadius: 10, marginTop: 6, fontWeight: 600,
        background: isGrammar ? '#E8F5E9' : '#E3F2FD',
        color: isGrammar ? '#2E7D32' : '#1565C0',
      }}>
        {isGrammar ? 'Grammar' : 'Vocabulary'} · {item.exercises} exercises
      </span>
    </div>
  )
}

export default function B2ExercisesPage() {
  const navigate = useNavigate()
  console.log("exercise: ");
  

  function handleClick(item) {
    if (item.type === 'grammar' || item.type === 'vocab') {
      navigate(`/destination/b2/exercises/${encodeURIComponent('Unit ' + item.num)}`)
    } else {
      navigate(`/destination/b2/exercises/${encodeURIComponent(item.id)}`)
    }
  }

  return (
    <div style={{ fontFamily: "'Segoe UI', Arial, sans-serif", background: '#f0f4f8', color: '#333', minHeight: '100vh' }}>

      {/* Header */}
      <div style={{ background: '#1565C0', color: 'white', padding: '20px', textAlign: 'center', position: 'relative' }}>
        <button
          onClick={() => navigate('/destination/b2')}
          style={{
            position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.15)', border: 'none', borderRadius: '50%',
            width: 36, height: 36, cursor: 'pointer', color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 style={{ fontSize: '1.6rem', fontWeight: 700, letterSpacing: 1 }}>Destination B2 – Exercise Book</h1>
        <p style={{ fontSize: '0.9rem', opacity: 0.85, marginTop: 6 }}>28 units · 14 reviews · 2 progress tests</p>
      </div>

      {/* Grid */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '24px 16px 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12 }}>
          {ALL_ITEMS.map(item => (
            <UnitCard
              key={item.id || ('unit-' + item.num)}
              item={item}
              onClick={() => handleClick(item)}
            />
          ))}
        </div>
      </div>

    </div>
  )
}
