import { http } from './http';
import { ui } from './ui';

//get post on dom load
document.addEventListener('DOMContentLoaded', getPosts);

//listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

//Listen for delete
document.querySelector('#posts').addEventListener('click', deletePost);

//listen for edit state
document.querySelector('#posts').addEventListener('click', enableEdit);

//listen for cancel
document.querySelector('.card-form').addEventListener('click', cancelEdit);

//get posts
function getPosts() {
  http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
}

//Submit post
function submitPost() {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  const id = document.querySelector('#id').value;

  //validate input
  if(title === '' || body === '') {
    ui.showAlert('Please fill all fields', 'alert alert-danger');
  } else {
    const data = {
      title,
      body
    }

    //check for id
    if(id === '') {
      //create post
      http.post('http://localhost:3000/posts', data)
        .then(data => {
          ui.showAlert('Post added', 'alert alert-success');
          ui.clearField();
          getPosts();
        })
        .catch(err => console.log(err));

    } else {
      //update post
      http.put(`http://localhost:3000/posts/${id}`, data)
        .then(data => {
          ui.showAlert('Post updated', 'alert alert-success');
          ui.changeFormState('add');
          getPosts();
        })
        .catch(err => console.log(err));
    }
  }
}

//Enable edit state
function enableEdit(e) {
  if(e.target.parentElement.classList.contains('edit')) {
    const id = e.target.parentElement.dataset.id;
    const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
    const body = e.target.parentElement.previousElementSibling.textContent;
    
    const data = {
      id,
      title,
      body
    }

    //fill from with current post
    ui.fillForm(data);
  }
  
  e.preventDefault();
}


//delete state
function deletePost(e) {
  if(e.target.parentElement.classList.contains('delete')) {
    const id = e.target.parentElement.dataset.id;
    if(confirm('Are you sure?')) {
      http.delete(`http://localhost:3000/posts/${id}`)
        .then(data => {
          ui.showAlert('Post Removed', 'alert alert-success');
          getPosts();
        })
        .catch(err => console.log(err));
    }
  } 
  e.preventDefault();
}

//cancel edit sate
function cancelEdit(e) {
  if(e.target.classList.contains('post-cancel')) {
    ui.changeFormState('add');
  }

  e.preventDefault();
}