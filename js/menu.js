const menuConfig = [
  { icon: 'assets/menu/conectar.png', text: 'Conectar' },
  { icon: 'assets/menu/conhecer.png', text: 'Conhecer' },
  { icon: 'assets/menu/envolver.png', text: 'Envolver' },
  { icon: 'assets/menu/converter.png', text: 'Convencer' },
  { icon: 'assets/menu/encantar.png', text: 'Encantar' },
];

function createMenu() {
  const menuList = document.getElementById('menuList');

  menuConfig.forEach(item => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = item.icon;
    img.alt = item.text;
    const link = document.createElement('a');
    link.textContent = item.text;
    link.href = `#${item.text}`

     
     li.addEventListener('click', () => {
      img.style.filter = 'brightness(0) invert(1)';
      link.style.filter = 'brightness(0) invert(1)';
    });

    li.appendChild(img);
    li.appendChild(link);
    menuList.appendChild(li);
  });
}


createMenu();

const sidebar = document.getElementById('sidebar');
sidebar.addEventListener('mouseover', () => {
  sidebar.classList.add('hovered');
});
sidebar.addEventListener('mouseout', (e) => {
  let isSidebarOrChildElement =
    e.relatedTarget && e.relatedTarget.closest(`#sidebar`)

  if (!isSidebarOrChildElement) {
    sidebar.classList.remove('hovered');
  }
});



window.addEventListener('scroll', function() {
  var section4 = document.querySelector('.section-4');
  var section5 = document.querySelector('.section-5');
  var sidebar = document.getElementById('sidebar');

  var section4Position = section4.getBoundingClientRect();
  var section5Position = section5.getBoundingClientRect();

  var section4Visibility = ((window.innerHeight - Math.max(0, section4Position.top)) / window.innerHeight) * 100;
  var section5Visibility = ((window.innerHeight - Math.max(0, section5Position.top)) / window.innerHeight) * 100;

  // console.log('Visibilidade da seção 4:', section4Visibility.toFixed(2) + '%');
  // console.log('Visibilidade da seção 5:', section5Visibility.toFixed(2) + '%');

  if (
    (section5Visibility >= 100 && section5Visibility <= 100) &&
    (section4Visibility <= 0 || section4Visibility >= 100)
  ) {
  
    // console.log('Seção 5 ou mais');
    sidebar.style.opacity = '1';
    sidebar.style.pointerEvents = 'visiblePainted'
  } else {
  
    // console.log('Seção 4 ou anteriores');
    sidebar.style.opacity = '0';
    sidebar.style.pointerEvents = 'none'
  }
});


const menuList = document.getElementById('menuList');
const elementosParaEstilizar = document.querySelectorAll('#sidebar');

menuList.addEventListener('mouseenter', () => {
  
  elementosParaEstilizar.forEach(elemento => {
  
    elemento.style.boxShadow = '0 0 0 2000px rgba(0,0,0,0.5)';
  });
});

menuList.addEventListener('mouseleave', () => {
  elementosParaEstilizar.forEach(elemento => {
    elemento.style.boxShadow = 'none';
  });
});