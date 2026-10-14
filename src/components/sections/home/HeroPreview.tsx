export default function HeroPreview() {
  return (
    <div className="blackhole-scene" aria-label="Animated realistic black hole">
      <div className="stars" />
      <span className="space-particle particle-one" />
      <span className="space-particle particle-two" />
      <span className="space-particle particle-three" />
      <span className="space-particle particle-four" />

      {/* Square stage: everything is positioned relative to this */}
      <div className="stage">
        {/* Soft bloom behind everything */}
        <div className="bloom" />

        {/* Gravitationally lensed image of the disk's far side, bent over the top and under the bottom */}
        <div className="lens-arc" />

        {/* Accretion disk: back half (behind hole) and front half (in front of hole) */}
        {['back', 'front'].map((side) => (
          <div key={side} className={`disk disk-${side}`}>
            <div className="disk-body">
              <div className="streaks streaks-inner" />
              <div className="streaks streaks-outer" />
              <div className="doppler" />
            </div>
          </div>
        ))}

        {/* Event horizon shadow */}
        <div className="shadow" />

        {/* Photon ring: thin, razor-bright ring hugging the shadow */}
        <div className="photon-ring" />
      </div>
    </div>
  );
}