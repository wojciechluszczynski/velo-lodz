import { useState, useCallback } from 'react'
import { ROUTES, type Route, type Poi } from './data/routes'
import { RouteMap } from './components/RouteMap'
import {
  IconRoute, IconMap, IconList, IconUser,
  IconArrowLeft, IconChevronRight, IconX,
} from './components/Icons'

type Screen = 'login' | 'routes' | 'route'

function durationLabel(min: number) {
  const h = Math.floor(min / 60)
  const m = min % 60
  return m ? `${h}h ${m}min` : `${h}h`
}

export default function App() {
  const [screen, setScreen] = useState<Screen>('login')
  const [activeRoute, setActiveRoute] = useState<Route | null>(null)
  const [selectedPoi, setSelectedPoi] = useState<Poi | null>(null)
  const [activeNav, setActiveNav] = useState<'routes' | 'map' | 'info' | 'profile'>('routes')

  const bajkowa = ROUTES[0]

  const handleDemo = useCallback(() => {
    setScreen('routes')
    setActiveNav('routes')
  }, [])

  const handleOpenRoute = useCallback((route: Route) => {
    if (route.comingSoon) return
    setActiveRoute(route)
    setScreen('route')
    setActiveNav('map')
  }, [])

  const handleBackToRoutes = useCallback(() => {
    setActiveRoute(null)
    setSelectedPoi(null)
    setScreen('routes')
    setActiveNav('routes')
  }, [])

  const handlePoiClick = useCallback((poi: Poi) => {
    setSelectedPoi(poi)
  }, [])

  const ctaLabel = screen === 'routes' ? 'Wybierz\ntrase' : screen === 'route' ? 'Start' : 'Demo'
  const ctaAction = screen === 'routes'
    ? () => handleOpenRoute(bajkowa)
    : screen === 'route'
    ? () => {}
    : handleDemo

  return (
    <div className="app-frame">
      {/* MAP — always rendered when not on login */}
      {screen !== 'login' && (
        <RouteMap
          pois={activeRoute?.pois ?? []}
          selectedPoiId={selectedPoi?.id ?? null}
          onPoiClick={handlePoiClick}
        />
      )}

      {/* LOGIN SCREEN */}
      {screen === 'login' && (
        <div className="login-screen">
          <div className="login-logo-area">
            <div className="login-logo">VL</div>
            <div>
              <div className="login-title">VeloLodz</div>
              <div className="login-subtitle">EC1 Nakrca · Sezon 6 · 2026</div>
            </div>
          </div>
          <div className="login-card">
            <input className="input-field" type="email" placeholder="twoj@email.pl" autoComplete="email" />
            <input className="input-field" type="password" placeholder="Haslo" autoComplete="current-password" />
            <button className="btn-primary">Zaloguj sie</button>
            <div className="divider-row">lub</div>
            <button className="btn-ghost" onClick={handleDemo}>
              <strong>Zobacz bez logowania</strong> &rarr;
            </button>
          </div>
        </div>
      )}

      {/* ROUTES PANEL */}
      {screen === 'routes' && (
        <div className="content-panel">
          <div className="routes-panel">
            <div className="panel-handle" />
            <div className="routes-header">
              <div className="routes-title">Trasy</div>
              <div className="routes-subtitle">Odkryj Lodz na dwoch kolkach</div>
            </div>
            <div className="routes-list">
              {ROUTES.map(route => (
                <div
                  key={route.id}
                  className={`route-card${route.comingSoon ? ' coming-soon' : ''}`}
                  onClick={() => handleOpenRoute(route)}
                >
                  <img src={route.coverPhoto} alt={route.name} className="route-card-img" />
                  <div
                    className={`route-card-badge${!route.comingSoon ? ' active' : ''}`}
                  >
                    {route.comingSoon ? 'wkrotce' : 'dostepna'}
                  </div>
                  <div className="route-card-body">
                    <div className="route-card-info">
                      <div className="route-card-name">{route.name}</div>
                      <div className="route-card-meta">
                        <span>{route.distanceKm} km</span>
                        <span>{durationLabel(route.durationMinutes)}</span>
                        <span>{route.difficulty}</span>
                      </div>
                    </div>
                    {!route.comingSoon && <IconChevronRight size={20} />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ROUTE DETAIL PANEL */}
      {screen === 'route' && activeRoute && (
        <div className="content-panel">
          <div className="route-detail-panel">
            <div className="route-detail-header">
              <div className="panel-handle" />
              <button className="back-btn" onClick={handleBackToRoutes}>
                <IconArrowLeft /> Trasy
              </button>
              <div style={{ marginBottom: 4, fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.01em' }}>
                {activeRoute.name}
              </div>
              <div className="route-stats">
                <div className="route-stat">
                  <div className="route-stat-value">{activeRoute.distanceKm} km</div>
                  <div className="route-stat-label">dystans</div>
                </div>
                <div className="route-stat">
                  <div className="route-stat-value">{durationLabel(activeRoute.durationMinutes)}</div>
                  <div className="route-stat-label">czas</div>
                </div>
                <div className="route-stat">
                  <div className="route-stat-value">{activeRoute.pois.length}</div>
                  <div className="route-stat-label">punktow</div>
                </div>
              </div>
            </div>
            <div className="poi-list">
              {activeRoute.pois.map(poi => (
                <div
                  key={poi.id}
                  className={`poi-item${selectedPoi?.id === poi.id ? ' selected' : ''}`}
                  onClick={() => handlePoiClick(poi)}
                >
                  <div className="poi-dot">{poi.order}</div>
                  <div className="poi-item-text">
                    <div className="poi-item-name">{poi.name}</div>
                    <div className="poi-item-desc">{poi.shortDesc}</div>
                  </div>
                  <IconChevronRight size={16} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* POI DETAIL SHEET */}
      {selectedPoi && (
        <div className="modal-overlay" onClick={() => setSelectedPoi(null)}>
          <div className="modal-sheet" onClick={e => e.stopPropagation()}>
            <div className="sheet-handle" />
            <div className="sheet-poi-header">
              <div className="sheet-poi-num">{selectedPoi.order}</div>
              <div className="sheet-poi-name">{selectedPoi.name}</div>
              <button
                onClick={() => setSelectedPoi(null)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-tertiary)', padding: 4, flexShrink: 0 }}
              >
                <IconX />
              </button>
            </div>
            {selectedPoi.needsVerification && (
              <div className="verification-badge">
                ⚠ Polozenie do weryfikacji
              </div>
            )}
            <p className="sheet-description">{selectedPoi.description}</p>
            {selectedPoi.authorComment && (
              <div className="author-comment">
                <p>{selectedPoi.authorComment}</p>
                <div className="author-signature">Arkadiusz Luszczynski · Lodz na Rowerze</div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* BOTTOM NAV — SkyCash style */}
      {screen !== 'login' && (
        <nav className="bottom-nav">
          <button
            className={`nav-btn${activeNav === 'routes' ? ' active' : ''}`}
            onClick={() => { setActiveNav('routes'); if (screen === 'route') handleBackToRoutes() }}
          >
            <IconRoute size={20} />
            <span>Trasy</span>
          </button>
          <button
            className={`nav-btn${activeNav === 'info' ? ' active' : ''}`}
            onClick={() => setActiveNav('info')}
          >
            <IconList size={20} />
            <span>Punkty</span>
          </button>

          {/* CENTER CTA */}
          <div className="nav-center-col">
            <button className="nav-cta" onClick={ctaAction}>
              {ctaLabel.split('\n').map((line, i) => <span key={i} style={{ display: 'block' }}>{line}</span>)}
            </button>
            <div className="nav-cta-label">
              {screen === 'route' ? 'Startuj' : 'Odkryj'}
            </div>
          </div>

          <button
            className={`nav-btn${activeNav === 'map' ? ' active' : ''}`}
            onClick={() => setActiveNav('map')}
          >
            <IconMap size={20} />
            <span>Mapa</span>
          </button>
          <button
            className={`nav-btn${activeNav === 'profile' ? ' active' : ''}`}
            onClick={() => setActiveNav('profile')}
          >
            <IconUser size={20} />
            <span>Profil</span>
          </button>
        </nav>
      )}
    </div>
  )
}
