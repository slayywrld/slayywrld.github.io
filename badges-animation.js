let currentBadgeIndex = 0;
const badgeItems = document.querySelectorAll('.badge-item');

function showBadge(index) {
  badgeItems.forEach((item, idx) => {
    if (idx === index) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

function nextBadge() {
  currentBadgeIndex++;
  if (currentBadgeIndex >= badgeItems.length) {
    currentBadgeIndex = 0;
  }
  showBadge(currentBadgeIndex);
}

function prevBadge() {
  currentBadgeIndex--;
  if (currentBadgeIndex < 0) {
    currentBadgeIndex = badgeItems.length - 1;
  }
  showBadge(currentBadgeIndex);
}

showBadge(currentBadgeIndex);
