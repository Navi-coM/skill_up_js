'use strict' 
   
const request = new XMLHttpRequest();

request.open('GET', 'http://blog.api.axenov-it.com/posts');

request.send();

request.onreadystatechange = function() {
    if (request.readyState !== 4) return;

    let posts = JSON.parse(request.responseText);

    const container = document.querySelector('#list1');

    for (const post of posts) {
        const p = document.createElement('p');

        p.innerHTML = post.title;

        container.appendChild(p);
    }
}

