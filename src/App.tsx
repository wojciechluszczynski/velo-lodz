import { useState, useCallback } from 'react'
import { ROUTES, type Route, type Poi } from './data/routes'
import { RouteMap } from './components/RouteMap'
import { WeatherBar } from './components/WeatherBar'
import {
  IconRoute, IconMap, IconList, IconUser,
  IconArrowLeft, IconChevronRight, IconX,
} from './components/Icons'

type View = 'splash' | 'login' | 'routes' | 'route' | 'map-full' | 'profile'

function durationLabel(min: number) {
  const h = Math.floor(min / 60)
  const m = min % 60
  return m ? `${h}h ${m}min` : `${h}h`
}

export default function App() {
  const [view, setView] = useState<View>('splash')
  const [activeRoute, setActiveRoute] = useState<Route | null>(null)
  const [selectedPoi, setSelectedPoi] = useState<Poi | null>(null)
  const [navTab, setNavTab] = useState<'routes' | 'points' | 'map' | 'profile'>('routes')

  const goDemo = useCallback(() => {
    setView('routes')
    setNavTab('routes')
  }, [])

  const openRoute = useCallback((route: Route) => {
    if (route.comingSoon) return
    setActiveRoute(route)
    setSelectedPoi(null)
    setView('route')
    setNavTab('map')
  }, [])

  const goBack = useCallback(() => {
    setActiveRoute(null)
    setSelectedPoi(null)
    setView('routes')
    setNavTab('routes')
  }, [])

  const handlePoiClick = useCallback((poi: Poi) => {
    setSelectedPoi(poi)
  }, [])

  const handleNavTab = useCallback((tab: 'routes' | 'points' | 'map' | 'profile') => {
    setNavTab(tab)
    if (tab === 'routes') {
      if (view === 'route' || view === 'map-full') goBack()
      else setView('routes')
    } else if (tab === 'map') {
      setView('map-full')
    } else if (tab === 'points') {
      if (activeRoute) setView('route')
    } else if (tab === 'profile') {
      setView('profile')
    }
  }, [view, activeRoute, goBack])

  const ctaClick = useCallback(() => {
    if (view === 'routes') openRoute(ROUTES[0])
    else if (view === 'map-full') { setView('route'); setNavTab('map') }
    else if (view === 'profile') goDemo()
  }, [view, openRoute, goDemo])

  const ctaText = view === 'route' ? 'Start' : view === 'map-full' ? 'Lista' : view === 'profile' ? 'Demo' : 'Jedź!'
  const showMap = view !== 'splash' && view !== 'login' && view !== 'profile'
  const showNav = view !== 'splash' && view !== 'login'

  return (
    <div className="app-frame">
      {/* MAP BG */}
      {showMap && (
        <RouteMap
          pois={activeRoute?.pois ?? []}
          selectedPoiId={selectedPoi?.id ?? null}
          onPoiClick={handlePoiClick}
        />
      )}

      {/* ── WEATHER BAR ── */}
      {showMap && <WeatherBar />}

      {/* ── SPLASH / LOGIN ── */}
      {(view === 'splash' || view === 'login') && (
        <div className="splash-screen">
          <img
            src="https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?w=800&h=1400&fit=crop&q=85"
            alt=""
            className="splash-bg"
          />
          <div className="splash-overlay" />
          <div className="splash-top">
            <div className="splash-logo">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="8" cy="22" r="5" stroke="white" strokeWidth="2.5"/>
                <circle cx="24" cy="22" r="5" stroke="white" strokeWidth="2.5"/>
                <path d="M8 22 L14 10 L20 14 L24 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="14" cy="10" r="2" fill="white"/>
              </svg>
            </div>
            <div>
              <div className="splash-title"><span>VELO</span><span className="splash-title-accent">ŁÓDŹ</span></div>
              <div className="splash-sub">Arkadiusz Łuszczyński · Sezon 6 · 2026</div>
            </div>
          </div>

          <div className="login-card-bottom">
            <div className="login-card-handle" />
            <div className="login-card-heading">Zaloguj się</div>
            <div className="login-card-sub">Aplikacja dostępna dla uczestników projektu</div>
            <div className="login-field-label">EMAIL</div>
            <div className="login-field-wrap">
              <svg className="login-field-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <input className="login-field-input" type="email" placeholder="twoj@email.pl" autoComplete="email" />
            </div>
            <div className="login-field-label" style={{display:'flex',justifyContent:'space-between'}}>
              <span>HASŁO</span>
              <span className="login-forgot">Przypomnij hasło</span>
            </div>
            <div className="login-field-wrap">
              <svg className="login-field-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              <input className="login-field-input" type="password" placeholder="••••••••" autoComplete="current-password" />
            </div>
            <button className="btn-primary" style={{marginTop: 8}}>Zaloguj się</button>
            <button className="btn-ghost" onClick={goDemo} style={{marginTop: 4}}>
              <strong>Zobacz bez logowania</strong> →
            </button>
            <div className="login-credit">Arkadiusz Łuszczyński · Łódź na Rowerze</div>
          </div>
        </div>
      )}

      {/* ── ROUTES PANEL ── */}
      {view === 'routes' && (
        <div className="content-panel">
          <div className="bottom-sheet">
            <div className="panel-handle" />
            <div className="sheet-scroll">
              <div className="section-label">Trasy</div>
              <div className="section-sub">Odkryj Łódź na dwóch kółkach</div>
              <div className="routes-list">
                {ROUTES.map(route => (
                  <div
                    key={route.id}
                    className={`route-card${route.comingSoon ? ' coming-soon' : ''}`}
                    onClick={() => openRoute(route)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="route-card-img-wrap">
                      <img src={route.coverPhoto} alt={route.name} className="route-card-img" loading="lazy" />
                      <div className="route-card-img-overlay" />
                      <div className={`route-badge${route.comingSoon ? '' : ' route-badge--active'}`}>
                        {route.comingSoon ? 'wkrótce' : 'dostępna'}
                      </div>
                    </div>
                    <div className="route-card-body">
                      <div className="route-card-left">
                        <div className="route-card-name">{route.name}</div>
                        <div className="route-card-meta">
                          <span>{route.distanceKm} km</span>
                          <span className="meta-dot">·</span>
                          <span>{durationLabel(route.durationMinutes)}</span>
                          <span className="meta-dot">·</span>
                          <span>{route.difficulty}</span>
                        </div>
                      </div>
                      {!route.comingSoon && (
                        <div className="route-card-arrow"><IconChevronRight size={18} /></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── ROUTE DETAIL PANEL ── */}
      {view === 'route' && activeRoute && (
        <div className="content-panel">
          <div className="bottom-sheet">
            <div className="panel-handle" />
            <div className="sheet-scroll">
              <button className="back-btn" onClick={goBack}>
                <IconArrowLeft size={16} /> Trasy
              </button>
              <div className="route-header">
                <div className="route-name">{activeRoute.name}</div>
                <div className="route-stats-row">
                  <div className="stat-chip">
                    <span className="stat-val">{activeRoute.distanceKm} km</span>
                    <span className="stat-lbl">dystans</span>
                  </div>
                  <div className="stat-divider" />
                  <div className="stat-chip">
                    <span className="stat-val">{durationLabel(activeRoute.durationMinutes)}</span>
                    <span className="stat-lbl">czas</span>
                  </div>
                  <div className="stat-divider" />
                  <div className="stat-chip">
                    <span className="stat-val">{activeRoute.pois.length}</span>
                    <span className="stat-lbl">punktów</span>
                  </div>
                </div>
              </div>
              <div className="poi-list">
                {activeRoute.pois.map(poi => (
                  <button
                    key={poi.id}
                    className={`poi-item${selectedPoi?.id === poi.id ? ' poi-item--active' : ''}`}
                    onClick={() => handlePoiClick(poi)}
                  >
                    <div className={`poi-num${selectedPoi?.id === poi.id ? ' poi-num--active' : ''}`}>
                      {poi.order}
                    </div>
                    <div className="poi-text">
                      <div className="poi-name">{poi.name}</div>
                      <div className="poi-desc">{poi.shortDesc}</div>
                    </div>
                    <IconChevronRight size={14} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── MAP FULL VIEW — hint ── */}
      {view === 'map-full' && (
        <div className="map-hint">
          <div className="map-hint-pill">Dotknij marker, aby zobaczyć szczegóły</div>
        </div>
      )}

      {/* ── PROFILE ── */}
      {view === 'profile' && (
        <div className="profile-screen">
          <div className="profile-header">
            <div className="profile-avatar">VL</div>
            <div className="profile-name">Tryb demo</div>
            <div className="profile-sub">Zaloguj się, aby zapisywać postęp</div>
          </div>
          <div className="profile-stats-grid">
            <div className="profile-stat"><span className="profile-stat-val">0</span><span className="profile-stat-lbl">tras ukończonych</span></div>
            <div className="profile-stat"><span className="profile-stat-val">0</span><span className="profile-stat-lbl">punktów zebranych</span></div>
            <div className="profile-stat"><span className="profile-stat-val">0</span><span className="profile-stat-lbl">km przejechanych</span></div>
            <div className="profile-stat"><span className="profile-stat-val">0</span><span className="profile-stat-lbl">odznak zdobytych</span></div>
          </div>
          <div className="profile-badges-title">Odznaki</div>
          <div className="badges-grid">
            {['Odkrywca', 'Turysta', 'Znawca Łodzi', 'Bajkowy', 'Kinoman', 'Energetyk'].map(b => (
              <div key={b} className="badge-chip badge-chip--locked">
                <div className="badge-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
                <div className="badge-label">{b}</div>
              </div>
            ))}
          </div>
          <div style={{ padding: '24px 20px 0' }}>
            <button className="btn-primary" onClick={goDemo}>Przeglądaj trasy</button>
          </div>
        </div>
      )}

      {/* ── POI DETAIL SHEET ── */}
      {selectedPoi && (
        <div className="modal-overlay" onClick={() => setSelectedPoi(null)}>
          <div className="modal-sheet" onClick={e => e.stopPropagation()}>
            <div className="panel-handle" />
            {selectedPoi.photo && (
              <div className="poi-sheet-img-wrap">
                <img src={selectedPoi.photo} alt={selectedPoi.name} className="poi-sheet-img" loading="lazy" />
                <div className="poi-sheet-img-overlay" />
                <div className="poi-sheet-img-badge">
                  <div className="poi-num poi-num--lg">{selectedPoi.order}</div>
                  <div className="poi-sheet-name poi-sheet-name--over">{selectedPoi.name}</div>
                </div>
                <button className="icon-btn icon-btn--over" onClick={() => setSelectedPoi(null)}><IconX size={20} /></button>
              </div>
            )}
            {!selectedPoi.photo && (
              <div className="poi-sheet-header">
                <div className="poi-num poi-num--lg">{selectedPoi.order}</div>
                <div className="poi-sheet-name">{selectedPoi.name}</div>
                <button className="icon-btn" onClick={() => setSelectedPoi(null)}><IconX size={20} /></button>
              </div>
            )}
            <div className="poi-sheet-body">
            {selectedPoi.needsVerification && (
              <div className="verify-badge"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display:'inline',verticalAlign:'middle',marginRight:6}}><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>Położenie do weryfikacji terenowej</div>
            )}
            <p className="poi-sheet-desc">{selectedPoi.description}</p>
            {selectedPoi.authorComment && (
              <div className="author-block">
                <p className="author-text">{selectedPoi.authorComment}</p>
                <div className="author-sig">Arkadiusz Łuszczyński · Łódź na Rowerze</div>
              </div>
            )}
            </div>
          </div>
        </div>
      )}

      {/* ── BOTTOM NAV ── */}
      {showNav && (
        <nav className="bottom-nav">
          <button
            className={`nav-btn${navTab === 'routes' ? ' nav-btn--active' : ''}`}
            onClick={() => handleNavTab('routes')}
          >
            <IconRoute size={22} />
            <span>Trasy</span>
          </button>
          <button
            className={`nav-btn${navTab === 'points' ? ' nav-btn--active' : ''}`}
            onClick={() => handleNavTab('points')}
          >
            <IconList size={22} />
            <span>Punkty</span>
          </button>
          <div className="nav-cta-col">
            <button className="nav-cta" onClick={ctaClick}>
              <span className="nav-cta-text">{ctaText}</span>
            </button>
            <span className="nav-cta-lbl">
              {view === 'route' ? 'Startuj' : view === 'map-full' ? 'Wróć' : 'Odkryj'}
            </span>
          </div>
          <button
            className={`nav-btn${navTab === 'map' ? ' nav-btn--active' : ''}`}
            onClick={() => handleNavTab('map')}
          >
            <IconMap size={22} />
            <span>Mapa</span>
          </button>
          <button
            className={`nav-btn${navTab === 'profile' ? ' nav-btn--active' : ''}`}
            onClick={() => handleNavTab('profile')}
          >
            <IconUser size={22} />
            <span>Profil</span>
          </button>
        </nav>
      )}
    </div>
  )
}
