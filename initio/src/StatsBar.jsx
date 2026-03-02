export default function StatsBar({ todaySeconds, completedToday, sessions }) {
  const todaySessions = sessions.filter(s => isToday(s.created_at)).length;
  const totalHours = Math.floor(todaySeconds / 3600);
  const totalMins = Math.floor((todaySeconds % 3600) / 60);

  const timeStr = todaySeconds === 0
    ? "0"
    : totalHours > 0
      ? `${totalHours}h ${totalMins}m`
      : `${totalMins}m`;

  return (
    <div className="stats-bar">
      <div className="stat-item">
        <span className="stat-value">{timeStr}</span>
        <span className="stat-label">Focused</span>
      </div>
      <div className="stat-item">
        <span className="stat-value">{todaySessions}</span>
        <span className="stat-label">Sessions</span>
      </div>
      <div className="stat-item">
        <span className="stat-value">{completedToday}</span>
        <span className="stat-label">Done</span>
      </div>
    </div>
  );
}

function isToday(dateStr) {
  if (!dateStr) return false;
  const d = new Date(dateStr);
  const now = new Date();
  return d.getDate() === now.getDate() && d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
}
