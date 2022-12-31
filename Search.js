document.getElementById('submit').onclick = () => {
    let user = document.getElementById('user').value;
  chrome.tabs.create({
    url: 'https://www.roblox.com/User.aspx?Username='+user,
    active: true
  });
}

document.getElementById('website').onclick = () => {

  chrome.tabs.create({
    url: 'https://robloxuserfinder.web.app/'
  });
}
