
import './SkeletonCard.css'

function SkeletonCard() {
  return (
    <div className="card skeleton-card">
      <div className="skeleton-img"></div>
      <div className="card-info">
        <div className="skeleton-title"></div>
      </div>
    </div>
  );
}

export default SkeletonCard;
