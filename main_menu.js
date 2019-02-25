var menuItems = [];

menuItems.push(['JS Function','index.html']);
menuItems.push(['DoubleArrays','DoubleArrays.html']);
menuItems.push(['TestPage','testPage.html']);


function initMainMenu(id) {
    var menu = document.getElementById('main_menu');

    var currentPage = '';
    for(var i = 0; i < menuItems.length;i++){
        if (id == i){
            currentPage = 'current_page';
        } else {
            currentPage = '';
        }
        menu.innerHTML = menu.innerHTML + "<a class='one_menu_item "+currentPage+"' href='"+menuItems[i][1]+"'>"+menuItems[i][0]+"</a>";
    }
}