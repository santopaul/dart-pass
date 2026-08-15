function pad(n){return n.toString().padStart(2,'0')}

function formatTime(date){
  return date.toLocaleTimeString([], {hour:'numeric',minute:'2-digit',second:'2-digit'});
}

function formatExpiry(date){
  return date.toLocaleString([], {month:'short',day:'numeric',year:'numeric',hour:'numeric',minute:'2-digit'});
}

// Set expiry 4 hours from when page loads (matches "4 Hour" pass)
const expiry = new Date(Date.now() + 4 * 60 * 60 * 1000);
document.getElementById('expires-text').textContent = `Expires ${formatExpiry(expiry)}`;

function tick(){
  const now = new Date();
  document.getElementById('time').textContent = formatTime(now);
}

tick();
setInterval(tick, 1000);

// Small accessibility: focus close button when pressing Escape
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape') document.querySelector('.close').focus();
});
