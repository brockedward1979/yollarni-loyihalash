// Smooth Scroll Function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Interactive Simulation Logic
function runSimulation(type) {
  const btnWrong = document.getElementById('btn-wrong');
  const btnRight = document.getElementById('btn-right');
  const roadSurface = document.getElementById('road-surface');
  const underground = document.getElementById('underground');
  const statCost = document.getElementById('stat-cost');
  const statQuality = document.getElementById('stat-quality');
  const simLog = document.getElementById('sim-log');

  // Reset visual styles
  underground.innerHTML = '';
  
  if (type === 'wrong') {
    btnWrong.classList.add('active');
    btnRight.classList.remove('active');

    // Step 1: Road built
    roadSurface.style.backgroundColor = '#475569';
    roadSurface.innerText = '1-Bosqich: Asfalt Yotqizildi';
    statCost.innerText = '$100,000';
    statQuality.innerText = '100% (Yangi)';
    simLog.innerHTML = '> Yoʻl asfalt qilindi.<br>';

    // Step 2: Water pipe dig
    setTimeout(() => {
      roadSurface.style.backgroundColor = '#ef4444';
      roadSurface.innerText = '2-Bosqich: Asfalt buchildi (Vodoprovod)';
      statCost.innerText = '$160,000';
      statQuality.innerText = '65% (Buzildi)';
      simLog.innerHTML += '> Vodoprovod uchun asfalt kesib qazildi.<br>';
      
      const waterPipe = document.createElement('div');
      waterPipe.className = 'pipe pipe-water';
      waterPipe.innerText = 'Vodoprovod Quvuri';
      underground.appendChild(waterPipe);
    }, 1500);

    // Step 3: Sewer pipe dig
    setTimeout(() => {
      roadSurface.style.backgroundColor = '#991b1b';
      roadSurface.innerText = '3-Bosqich: Yana buchildi (Kanalizatsiya)';
      statCost.innerText = '$230,000';
      statQuality.innerText = '35% (Yamoq yoʻl)';
      simLog.innerHTML += '> Kanalizatsiya uchun yana yoʻl qazildi.<br>';
      simLog.innerHTML += '<b>Xulosa: Kotta xarajat va sifatsiz yoʻl!</b>';

      const sewerPipe = document.createElement('div');
      sewerPipe.className = 'pipe pipe-sewer';
      sewerPipe.innerText = 'Kanalizatsiya Quvuri';
      underground.appendChild(sewerPipe);
    }, 3500);

  } else if (type === 'right') {
    btnRight.classList.add('active');
    btnWrong.classList.remove('active');

    // Step 1: Trenching & Infrastructure
    roadSurface.style.backgroundColor = '#94a3b8';
    roadSurface.innerText = '1-Bosqich: Kommunikatsiyalar Yotqizilmoqda';
    statCost.innerText = '$80,000';
    statQuality.innerText = 'Tayyorlanmoqda';
    simLog.innerHTML = '> Bir vaqtning oʻzida barcha quvurlar yotqizildi.<br>';

    const sewerPipe = document.createElement('div');
    sewerPipe.className = 'pipe pipe-sewer';
    sewerPipe.innerText = 'Kanalizatsiya (Chuqur)';
    underground.appendChild(sewerPipe);

    const waterPipe = document.createElement('div');
    waterPipe.className = 'pipe pipe-water';
    waterPipe.innerText = 'Vodoprovod';
    underground.appendChild(waterPipe);

    // Step 2: Final Asphalt Layer
    setTimeout(() => {
      roadSurface.style.backgroundColor = '#10b981';
      roadSurface.innerText = '2-Bosqich: Yagona Asfalt Qoplamasi Yotqizildi';
      statCost.innerText = '$110,000';
      statQuality.innerText = '100% (Mustahkam va Uzoq Muddatli)';
      simLog.innerHTML += '> Yakuniy asfalt yotqizildi.<br>';
      simLog.innerHTML += '<b>Xulosa: 50% tejamkorlik, yuqori sifat!</b>';
    }, 2000);
  }
}

// Initial simulation run on load
document.addEventListener('DOMContentLoaded', () => {
  runSimulation('wrong');
});