var toggle = document.createElement('div');
toggle.className = 'sidebar-toggle';
toggle.innerHTML = '<div class="arrow-wrap"><a class="arrow-toggle" href="#"></a></div>';

document.body.appendChild(toggle);

toggle.addEventListener('click', function(e){
  e.preventDefault();
  this.classList.toggle('sidebar-open');
  document.getElementsByClassName('side')[0].classList.toggle('show');
});

if(document.body.classList.contains('front-page')) {
    var frontPage = document.createElement('span');
    frontPage.className = 'hover pagename redditname frontPage';
    frontPage.innerHTML = '<a href="https://www.reddit.com">Front Page</a>';

    document.getElementById('header-bottom-left').appendChild(frontPage);
}
