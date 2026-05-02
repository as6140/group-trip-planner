import { useState } from 'react';

type Screen = 'day-overview' | 'add-candidates' | 'comparison' | 'results';

// Comparison pairs data
const comparisonPairs = [
  {
    a: { name: 'Pastel de Nata tasting tour', desc: 'Walking tour of three legendary bakeries with tastings.', cost: '$22 pp', duration: '90 min', energy: 'moderate energy', icon: 'food' },
    b: { name: 'Tram 28 sightseeing loop', desc: 'Iconic yellow tram through Alfama and Baixa.', cost: '$8 pp', duration: '60 min', energy: 'low energy', icon: 'tram' }
  },
  {
    a: { name: 'Belem Tower visit', desc: 'Historic 16th-century tower and UNESCO site.', cost: '$15 pp', duration: '90 min', energy: 'moderate energy', icon: 'tower' },
    b: { name: 'Time Out Market lunch', desc: 'Gourmet food hall with 40+ vendors.', cost: '$25 pp', duration: '75 min', energy: 'low energy', icon: 'market' }
  },
  {
    a: { name: 'Jeronimos Monastery', desc: 'Stunning Manueline architecture masterpiece.', cost: '$14 pp', duration: '60 min', energy: 'low energy', icon: 'monastery' },
    b: { name: 'Botanical garden walk', desc: 'Peaceful 19th-century gardens and greenhouses.', cost: '$5 pp', duration: '75 min', energy: 'low energy', icon: 'garden' }
  },
  {
    a: { name: 'Pastel de Nata tasting tour', desc: 'Walking tour of three legendary bakeries with tastings.', cost: '$22 pp', duration: '90 min', energy: 'moderate energy', icon: 'food' },
    b: { name: 'Belem Tower visit', desc: 'Historic 16th-century tower and UNESCO site.', cost: '$15 pp', duration: '90 min', energy: 'moderate energy', icon: 'tower' }
  },
  {
    a: { name: 'Time Out Market lunch', desc: 'Gourmet food hall with 40+ vendors.', cost: '$25 pp', duration: '75 min', energy: 'low energy', icon: 'market' },
    b: { name: 'Botanical garden walk', desc: 'Peaceful 19th-century gardens and greenhouses.', cost: '$5 pp', duration: '75 min', energy: 'low energy', icon: 'garden' }
  },
  {
    a: { name: 'Tram 28 sightseeing loop', desc: 'Iconic yellow tram through Alfama and Baixa.', cost: '$8 pp', duration: '60 min', energy: 'low energy', icon: 'tram' },
    b: { name: 'Jeronimos Monastery', desc: 'Stunning Manueline architecture masterpiece.', cost: '$14 pp', duration: '60 min', energy: 'low energy', icon: 'monastery' }
  }
];

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('day-overview');
  const [comparisonIndex, setComparisonIndex] = useState(0);

  const handleNextComparison = () => {
    if (comparisonIndex < comparisonPairs.length - 1) {
      setComparisonIndex(comparisonIndex + 1);
    } else {
      setCurrentScreen('results');
    }
  };

  return (
    <div className="h-screen bg-neutral-50 p-8 overflow-hidden flex items-center justify-center">
      {currentScreen === 'day-overview' && <DayOverviewScreen onNavigate={setCurrentScreen} />}
      {currentScreen === 'add-candidates' && <AddCandidatesScreen onNavigate={setCurrentScreen} />}
      {currentScreen === 'comparison' && (
        <ComparisonScreen
          pair={comparisonPairs[comparisonIndex]}
          pairNumber={comparisonIndex + 1}
          totalPairs={comparisonPairs.length}
          onNext={handleNextComparison}
          onBack={() => setCurrentScreen('add-candidates')}
        />
      )}
      {currentScreen === 'results' && <ResultsScreen onBack={() => setCurrentScreen('day-overview')} />}
    </div>
  );
}

// FIGURE 7: Day Overview
function DayOverviewScreen({ onNavigate }: { onNavigate: (screen: Screen) => void }) {
  return (
    <div className="w-[390px] h-[844px] bg-stone-50 flex flex-col shadow-2xl">
      {/* Navigation Bar */}
      <div className="px-4 py-3 flex items-center justify-between border-b border-stone-200">
        <button className="w-9 h-9 flex items-center justify-center">
          <svg className="w-5 h-5 text-stone-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="text-stone-900" style={{ fontWeight: 500 }}>Spring Break in Portugal</div>
        <button className="w-9 h-9 flex items-center justify-center">
          <svg className="w-5 h-5 text-stone-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>

      {/* Day Selector Strip */}
      <div className="px-4 py-4 flex gap-2">
        <button className="flex-1 px-4 py-2 bg-white rounded-full border border-stone-200 text-stone-600 text-sm">
          Day 1 Fri
        </button>
        <button className="flex-1 px-4 py-2 bg-orange-500 rounded-full text-white text-sm" style={{ fontWeight: 500 }}>
          Day 2 Sat
        </button>
        <button className="flex-1 px-4 py-2 bg-white rounded-full border border-stone-200 text-stone-600 text-sm">
          Day 3 Sun
        </button>
        <button className="flex-1 px-4 py-2 bg-white rounded-full border border-stone-200 text-stone-600 text-sm">
          Day 4 Mon
        </button>
      </div>

      {/* Budget Strip Card */}
      <div className="mx-4 mb-4 bg-white rounded-2xl p-4 shadow-sm border border-stone-200">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <span className="text-sm text-stone-600">Day 2 budget</span>
          </div>
          <span className="text-sm text-stone-900" style={{ fontWeight: 500 }}>$120 of $200 remaining</span>
        </div>
        <div className="h-1.5 bg-stone-100 rounded-full overflow-hidden">
          <div className="h-full bg-orange-500 rounded-full" style={{ width: '60%' }}></div>
        </div>
      </div>

      {/* Slot Cards */}
      <div className="flex-1 px-4 overflow-y-auto space-y-3">
        {/* Morning - Locked */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-stone-200">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <div className="text-xs tracking-wide text-stone-500 mb-1" style={{ fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                MORNING
              </div>
              <div className="text-base text-stone-900 mb-1" style={{ fontWeight: 700 }}>
                Belem Tower visit
              </div>
              <div className="text-xs text-stone-500">4 of 4 weighed in</div>
            </div>
            <div className="flex items-center gap-1.5 bg-green-500 text-white px-3 py-1.5 rounded-full text-xs ml-3" style={{ fontWeight: 500 }}>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              <span>Locked</span>
            </div>
          </div>
        </div>

        {/* Afternoon - Voting (CLICKABLE) */}
        <button
          onClick={() => onNavigate('add-candidates')}
          className="w-full bg-white rounded-2xl p-4 shadow-sm border border-stone-200 text-left hover:border-orange-300 transition-colors"
        >
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <div className="text-xs tracking-wide text-stone-500 mb-1" style={{ fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                AFTERNOON
              </div>
              <div className="text-base text-stone-900 mb-1" style={{ fontWeight: 700 }}>
                Pastel de Nata tasting tour
              </div>
              <div className="text-xs text-amber-600" style={{ fontWeight: 500 }}>Waiting on Saddiq</div>
            </div>
            <div className="flex items-center gap-1.5 bg-orange-500 text-white px-3 py-1.5 rounded-full text-xs ml-3" style={{ fontWeight: 500 }}>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="whitespace-nowrap">Voting</span>
            </div>
          </div>
        </button>

        {/* Evening - Ready to Compare */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-stone-200">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <div className="text-xs tracking-wide text-stone-500 mb-1" style={{ fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                EVENING
              </div>
              <div className="text-base text-stone-900 mb-1" style={{ fontWeight: 700 }}>
                Tram 28 sightseeing loop
              </div>
              <div className="text-xs text-stone-500">3 of 4 weighed in</div>
            </div>
            <div className="flex items-center gap-1.5 bg-white border border-stone-300 text-stone-700 px-3 py-1.5 rounded-full text-xs ml-3" style={{ fontWeight: 500 }}>
              <span className="whitespace-nowrap">Ready</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Dinner - Proposed */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-stone-200">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <div className="text-xs tracking-wide text-stone-500 mb-1" style={{ fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                DINNER
              </div>
              <div className="text-base text-stone-500 mb-1" style={{ fontWeight: 700 }}>
                TBD - dinner
              </div>
            </div>
            <div className="flex items-center gap-1.5 bg-white border border-stone-300 text-stone-600 px-3 py-1.5 rounded-full text-xs ml-3" style={{ fontWeight: 500 }}>
              <span className="whitespace-nowrap">6 candidates</span>
            </div>
          </div>
        </div>
      </div>

      {/* Group Health Summary */}
      <div className="px-4 py-3 border-t border-stone-200">
        <div className="text-xs text-stone-500 text-center">
          All slots on track. 1 lock vote pending.
        </div>
      </div>

      {/* Tab Bar */}
      <div className="flex border-t border-stone-200 bg-white">
        <button className="flex-1 flex flex-col items-center gap-1 py-3 text-orange-500">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-xs" style={{ fontWeight: 500 }}>Day</span>
        </button>
        <button className="flex-1 flex flex-col items-center gap-1 py-3 text-stone-400">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="text-xs" style={{ fontWeight: 500 }}>Members</span>
        </button>
        <button className="flex-1 flex flex-col items-center gap-1 py-3 text-stone-400">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="text-xs" style={{ fontWeight: 500 }}>Notifications</span>
        </button>
      </div>
    </div>
  );
}

// FIGURE 8: Add Candidates
function AddCandidatesScreen({ onNavigate }: { onNavigate: (screen: Screen) => void }) {
  const candidates = [
    { id: 1, name: 'Belem Tower visit', duration: '90 min', cost: '$15 pp', icon: 'tower' },
    { id: 2, name: 'Pastel de Nata tasting tour', duration: '90 min', cost: '$22 pp', icon: 'food' },
    { id: 3, name: 'Tram 28 sightseeing loop', duration: '60 min', cost: '$8 pp', icon: 'tram' },
    { id: 4, name: 'Time Out Market lunch', duration: '75 min', cost: '$25 pp', icon: 'market' },
    { id: 5, name: 'Jeronimos Monastery', duration: '60 min', cost: '$14 pp', icon: 'monastery' },
    { id: 6, name: 'Botanical garden walk', duration: '75 min', cost: '$5 pp', icon: 'garden' },
  ];

  const ActivityIcon = ({ type }: { type: string }) => {
    const icons: Record<string, JSX.Element> = {
      tower: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
      food: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />,
      tram: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />,
      market: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />,
      monastery: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />,
      garden: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />,
    };

    return (
      <svg className="w-12 h-12 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        {icons[type] || icons.tower}
      </svg>
    );
  };

  return (
    <div className="w-[390px] h-[844px] bg-stone-50 flex flex-col shadow-2xl">
      {/* Navigation Bar */}
      <div className="px-4 py-3 flex items-center justify-between border-b border-stone-200">
        <button onClick={() => onNavigate('day-overview')} className="w-9 h-9 flex items-center justify-center">
          <svg className="w-5 h-5 text-stone-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="text-stone-900" style={{ fontWeight: 500 }}>Friday afternoon</div>
        <div className="px-3 py-1 bg-stone-200 rounded-full text-xs text-stone-700" style={{ fontWeight: 500 }}>
          Day 2
        </div>
      </div>

      {/* Prompt Section */}
      <div className="px-6 py-5">
        <div className="text-base text-stone-900 mb-2" style={{ fontWeight: 500 }}>
          Add candidates for the group to consider.
        </div>
        <div className="text-sm text-stone-500">
          Pairwise comparisons start once we have at least 3 candidates.
        </div>
      </div>

      {/* Candidate Tiles */}
      <div className="flex-1 pb-4">
        <div className="flex gap-3 px-6 overflow-x-auto pb-2">
          {candidates.map((candidate) => (
            <div key={candidate.id} className="flex-shrink-0 w-[160px] h-[200px] bg-white rounded-2xl p-4 shadow-sm border border-stone-200 flex flex-col items-center">
              <div className="w-16 h-16 bg-stone-100 rounded-2xl flex items-center justify-center mb-3">
                <ActivityIcon type={candidate.icon} />
              </div>
              <div className="text-sm text-stone-900 text-center leading-tight mb-3" style={{ fontWeight: 700 }}>
                {candidate.name}
              </div>
              <div className="mt-auto space-y-2 w-full">
                <div className="px-3 py-1.5 bg-stone-100 rounded-full text-xs text-stone-700 text-center" style={{ fontWeight: 500 }}>
                  {candidate.duration}
                </div>
                <div className="px-3 py-1.5 bg-stone-100 rounded-full text-xs text-stone-700 text-center" style={{ fontWeight: 500 }}>
                  {candidate.cost}
                </div>
              </div>
            </div>
          ))}

          <div className="flex-shrink-0 w-[160px] h-[200px] bg-white rounded-2xl border-2 border-dashed border-stone-300 flex flex-col items-center justify-center text-stone-500">
            <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mb-3">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div className="text-sm" style={{ fontWeight: 500 }}>Add candidate</div>
          </div>
        </div>

        <div className="px-6 pt-4">
          <div className="text-xs text-stone-500">Submitted by 3 of 4 members</div>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="p-6 pt-0 pb-8 border-t border-stone-200 bg-stone-50">
        <button
          onClick={() => onNavigate('comparison')}
          className="w-full bg-orange-500 text-white py-4 rounded-2xl shadow-sm hover:bg-orange-600 transition-colors"
          style={{ fontWeight: 600 }}
        >
          Start comparisons (6 pairs)
        </button>
      </div>
    </div>
  );
}

// FIGURE 9: Comparison
function ComparisonScreen({
  pair,
  pairNumber,
  totalPairs,
  onNext,
  onBack
}: {
  pair: any;
  pairNumber: number;
  totalPairs: number;
  onNext: () => void;
  onBack: () => void;
}) {
  const getIcon = (iconType: string) => {
    const icons: Record<string, JSX.Element> = {
      food: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />,
      tram: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />,
      tower: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
      market: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />,
      monastery: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />,
      garden: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />,
    };
    return icons[iconType] || icons.tower;
  };

  return (
    <div className="w-[390px] h-[844px] bg-stone-50 flex flex-col shadow-2xl">
      {/* Progress Bar */}
      <div className="px-6 pt-4 pb-3">
        <div className="h-1.5 bg-stone-200 rounded-full overflow-hidden mb-2">
          <div className="h-full bg-orange-500 rounded-full transition-all" style={{ width: `${(pairNumber / totalPairs) * 100}%` }}></div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-stone-600" style={{ fontWeight: 500 }}>Pair {pairNumber} of {totalPairs}</span>
          <span className="text-xs text-stone-500">Friday afternoon</span>
        </div>
      </div>

      {/* Prompt */}
      <div className="px-6 py-4">
        <div className="text-base text-stone-900" style={{ fontWeight: 500 }}>
          Which would you rather do?
        </div>
      </div>

      {/* Candidate Cards */}
      <div className="flex-1 px-6 flex flex-col justify-center">
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden mb-3">
          <div className="p-5 flex gap-4">
            <div className="w-20 h-20 bg-stone-100 rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg className="w-10 h-10 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {getIcon(pair.a.icon)}
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-base text-stone-900 mb-2 leading-tight" style={{ fontWeight: 700 }}>
                {pair.a.name}
              </div>
              <div className="text-sm text-stone-600 mb-3 leading-snug">
                {pair.a.desc}
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="px-3 py-1 bg-stone-100 rounded-full text-xs text-stone-700" style={{ fontWeight: 500 }}>
                  {pair.a.cost}
                </div>
                <div className="px-3 py-1 bg-stone-100 rounded-full text-xs text-stone-700" style={{ fontWeight: 500 }}>
                  {pair.a.duration}
                </div>
                <div className="px-3 py-1 bg-stone-100 rounded-full text-xs text-stone-700" style={{ fontWeight: 500 }}>
                  {pair.a.energy}
                </div>
              </div>
            </div>
          </div>
          <button onClick={onNext} className="w-full bg-orange-500 text-white py-4 border-t border-stone-200 hover:bg-orange-600 transition-colors" style={{ fontWeight: 600 }}>
            Choose this
          </button>
        </div>

        <div className="text-center py-3">
          <button onClick={onNext} className="text-sm text-stone-500 underline">skip / no preference</button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
          <div className="p-5 flex gap-4">
            <div className="w-20 h-20 bg-stone-100 rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg className="w-10 h-10 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {getIcon(pair.b.icon)}
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-base text-stone-900 mb-2 leading-tight" style={{ fontWeight: 700 }}>
                {pair.b.name}
              </div>
              <div className="text-sm text-stone-600 mb-3 leading-snug">
                {pair.b.desc}
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="px-3 py-1 bg-stone-100 rounded-full text-xs text-stone-700" style={{ fontWeight: 500 }}>
                  {pair.b.cost}
                </div>
                <div className="px-3 py-1 bg-stone-100 rounded-full text-xs text-stone-700" style={{ fontWeight: 500 }}>
                  {pair.b.duration}
                </div>
                <div className="px-3 py-1 bg-stone-100 rounded-full text-xs text-stone-700" style={{ fontWeight: 500 }}>
                  {pair.b.energy}
                </div>
              </div>
            </div>
          </div>
          <button onClick={onNext} className="w-full bg-orange-500 text-white py-4 border-t border-stone-200 hover:bg-orange-600 transition-colors" style={{ fontWeight: 600 }}>
            Choose this
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 flex items-center justify-between border-t border-stone-200">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-stone-200 rounded-full flex items-center justify-center text-xs text-stone-700" style={{ fontWeight: 600 }}>
            C
          </div>
          <span className="text-xs text-stone-500">Your submission</span>
        </div>
        <button className="text-xs text-stone-600 underline" style={{ fontWeight: 500 }}>
          Details
        </button>
      </div>
    </div>
  );
}

// FIGURE 10: Results with Lock Modal
function ResultsScreen({ onBack }: { onBack: () => void }) {
  const [showModal, setShowModal] = useState(true);

  const rankedActivities = [
    { rank: 1, name: 'Pastel de Nata tasting tour', cost: '$22 pp', score: 88, participation: '4 of 4 submitted', isPending: false },
    { rank: 2, name: 'Belem Tower visit', cost: '$15 pp', score: 71, participation: '3 of 4', isPending: true },
    { rank: 3, name: 'Time Out Market lunch', cost: '$25 pp', score: 62, participation: '3 of 4', isPending: true },
    { rank: 4, name: 'Tram 28 sightseeing loop', cost: '$8 pp', score: 40, participation: '3 of 4', isPending: true },
    { rank: 5, name: 'Botanical garden walk', cost: '$5 pp', score: 22, participation: '3 of 4', isPending: true },
  ];

  const memberStatuses = [
    { name: 'Alex', initial: 'A', status: 'Accepted', comment: null },
    { name: 'Chris', initial: 'C', status: 'Accepted', comment: null },
    { name: 'Hamza', initial: 'H', status: 'Pending', comment: null },
    { name: 'Saddiq', initial: 'S', status: 'Objected', comment: 'Budget concern' },
  ];

  return (
    <div className="w-[390px] h-[844px] bg-stone-50 flex flex-col shadow-2xl relative">
      {/* Background: Results Screen */}
      <div className="absolute inset-0 flex flex-col">
        <div className="px-4 py-3 flex items-center justify-between border-b border-stone-200">
          <button onClick={onBack} className="w-9 h-9 flex items-center justify-center">
            <svg className="w-5 h-5 text-stone-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="text-stone-900" style={{ fontWeight: 500 }}>Group ranking - Friday afternoon</div>
          <button className="w-9 h-9 flex items-center justify-center">
            <svg className="w-5 h-5 text-stone-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>

        <div className="px-4 py-3 bg-stone-100 border-b border-stone-200 flex items-center gap-2">
          <svg className="w-4 h-4 text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm text-stone-600">Comparisons complete. Auto-tally in 8h.</span>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
          {rankedActivities.map((activity) => (
            <div key={activity.rank}>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-stone-200">
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 ${activity.rank === 1 ? 'bg-orange-500 text-white' : 'bg-stone-200 text-stone-700'}`} style={{ fontWeight: 700 }}>
                    {activity.rank}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-stone-900 mb-1 leading-tight" style={{ fontWeight: 700 }}>
                      {activity.name}
                    </div>
                    <div className="px-2 py-0.5 bg-stone-100 rounded-full text-xs text-stone-600 inline-block mb-2" style={{ fontWeight: 500 }}>
                      {activity.cost}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex-1 h-2 bg-stone-100 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${activity.rank === 1 ? 'bg-orange-500' : 'bg-stone-400'}`} style={{ width: `${activity.score}%` }}></div>
                      </div>
                      <div className="text-xs text-stone-600" style={{ fontWeight: 600 }}>
                        {activity.score}%
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className={`text-xs ${activity.isPending ? 'text-amber-600' : 'text-stone-500'}`} style={{ fontWeight: 500 }}>
                        {activity.participation}
                      </div>
                      {activity.isPending && (
                        <button className="text-xs text-stone-600 underline" style={{ fontWeight: 500 }}>
                          Nudge Saddiq
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                {activity.rank === 1 && (
                  <button onClick={() => setShowModal(true)} className="w-full mt-3 bg-orange-500 text-white py-3 rounded-xl shadow-sm hover:bg-orange-600 transition-colors" style={{ fontWeight: 600 }}>
                    Propose for lock
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {showModal && (
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-6">
          <div className="w-[320px] bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-6">
              <div className="text-center mb-4">
                <div className="text-base text-stone-900 leading-snug" style={{ fontWeight: 500 }}>
                  Lock Pastel de Nata tasting tour for Friday afternoon?
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-2xl mb-4">
                <div className="w-10 h-10 bg-stone-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-stone-900" style={{ fontWeight: 700 }}>Pastel de Nata tasting tour</div>
                </div>
                <div className="px-2 py-1 bg-stone-200 rounded-full text-xs text-stone-700" style={{ fontWeight: 500 }}>
                  $22 pp
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3 mb-4 text-center">
                <div className="text-base text-amber-900 mb-1" style={{ fontWeight: 600 }}>
                  🕐 23h 17m remaining
                </div>
                <div className="text-xs text-stone-600">Auto-locks if no objection by Sat 6pm</div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <button onClick={() => setShowModal(false)} className="bg-green-500 text-white py-3 rounded-xl shadow-sm hover:bg-green-600 transition-colors" style={{ fontWeight: 600 }}>
                  ✓ Accept
                </button>
                <button onClick={() => setShowModal(false)} className="bg-white border-2 border-stone-300 text-stone-900 py-3 rounded-xl hover:bg-stone-50 transition-colors" style={{ fontWeight: 600 }}>
                  Object
                </button>
              </div>

              <div className="space-y-2 mb-4">
                {memberStatuses.map((member, idx) => (
                  <div key={idx} className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-stone-200 rounded-full flex items-center justify-center text-xs text-stone-700" style={{ fontWeight: 600 }}>
                        {member.initial}
                      </div>
                      <span className="text-sm text-stone-900" style={{ fontWeight: 500 }}>{member.name}</span>
                      <div className={`px-2 py-1 rounded-full text-xs ${member.status === 'Accepted' ? 'bg-green-100 text-green-700' : member.status === 'Objected' ? 'bg-red-100 text-red-700' : 'bg-stone-100 text-stone-600'}`} style={{ fontWeight: 500 }}>
                        {member.status}
                      </div>
                    </div>
                    {member.status === 'Pending' && (
                      <button className="px-2 py-1 border border-stone-300 rounded-lg text-xs text-stone-700" style={{ fontWeight: 500 }}>
                        Send reminder
                      </button>
                    )}
                    {member.comment && (
                      <div className="text-xs text-stone-500 italic">"{member.comment}"</div>
                    )}
                  </div>
                ))}
              </div>

              <div className="text-center pt-2 border-t border-stone-200">
                <button className="text-xs text-stone-500 underline">Why this was proposed</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
