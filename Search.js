document.getElementById('submit').onclick = () => {
    let user = document.getElementById('user').value;
    console.log(user);
   
  chrome.tabs.create({
    url: 'https://www.roblox.com/User.aspx?Username='+user,
    active: true
  });
}