'use strict';

const searchBtn = document.getElementById('searchBtn');
const postIdInput = document.getElementById('postId');
const postDiv = document.getElementById('post');

searchBtn.addEventListener('click', () => {
    const postId = postIdInput.value;

    if (postId >= 1 && postId <= 100) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Post not found');
                }
                return response.json();
            })
            .then(post => {
                const postTitle = document.createElement('h2');
                postTitle.textContent = post.title;
                const postBody = document.createElement('p');
                postBody.textContent = post.body;
                const commentsBtn = document.createElement('button');
                commentsBtn.textContent = 'Get comments';
                commentsBtn.addEventListener('click', () => {
                    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                        .then(response => response.json())
                        .then(comments => {
                            const commentsList = document.createElement('ul');
                            comments.forEach(comment => {
                                const commentItem = document.createElement('li');
                                commentItem.textContent = comment.body;
                                commentsList.appendChild(commentItem);
                            });
                            postDiv.appendChild(commentsList);
                        })
                        .catch(error => console.error(error));
                });
                postDiv.innerHTML = '';
                postDiv.appendChild(postTitle);
                postDiv.appendChild(postBody);
                postDiv.appendChild(commentsBtn);
            })
            .catch(error => console.error(error));
    } else {
        alert('Please enter a valid post ID (1-100)');
    }
});