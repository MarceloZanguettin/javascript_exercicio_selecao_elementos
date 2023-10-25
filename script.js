const tabMenu = document.querySelectorAll(".js-tabmenu li"); // fazendo com que selecione cada li de dentro do js-tabmenu
const tabContent = document.querySelectorAll(".js-tabcontent section"); // fazendo com que selecione cada section

if (tabMenu.length && tabContent.length) {
  tabContent[0].classList.add("ativo");

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("ativo"); // retira de todos os section a classe ativo, criado uma função dentro de outra função
    });
    tabContent[index].classList.add("ativo");
  }

  tabMenu.forEach((itemMenu, index) => {
    // função que irá ler ao ler o click na imagem irá acionar a função activeTab() na section do js-content
    itemMenu.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
