// Get modal and buttons
const modal = document.getElementById('loginModal');
const loginBtn = document.getElementById('loginBtn');
const closeBtn = document.getElementById('closeBtn');
const m=document.getElementById('modal-content');

// Open modal when login button is clicked
loginBtn.onclick = function() {
  modal.classList.add('active');
  modal.style.display = 'block';
  
}

// Close modal when close button is clicked
closeBtn.onclick = function() {
  modal.style.display = 'none';
  m.style.display='none';
}

// Close modal if clicked outside of modal content
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

 //like and unlike button function
 function toggleReaction(button, type) {
  const parent = button.parentNode; // Get the parent container of the buttons
  const likeBtn = parent.querySelector('.like-btn');
  const dislikeBtn = parent.querySelector('.dislike-btn');

  if (type === 'like') {
    likeBtn.classList.toggle('active');
    if (likeBtn.classList.contains('active')) {
      dislikeBtn.classList.remove('active'); // Remove active state from Dislike
    }
  } else if (type === 'dislike') {
    dislikeBtn.classList.toggle('active');
    if (dislikeBtn.classList.contains('active')) {
      likeBtn.classList.remove('active'); // Remove active state from Like
    }
  }
}

//comment button function
  document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    
    const commentSection = document.getElementById('comment-section');
    
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    
    const commentName = document.createElement('h3');
    commentName.textContent = name;
    
    const commentText = document.createElement('p');
    commentText.textContent = comment;
    
    newComment.appendChild(commentName);
    newComment.appendChild(commentText);
    
    commentSection.insertBefore(newComment, commentSection.querySelector('.comment-form'));
    
    // Clear the form
    document.getElementById('commentForm').reset();
  });

  function scrollToCommentSection() {
    document.getElementById('comment-section').scrollIntoView({ behavior: 'smooth' });
  }

 
 //Search function

  function filterPhones() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const phoneItems = document.querySelectorAll('.phone-item');
    
   
 // Filter phone items based on the search query
    phoneItems.forEach(item => {
      const phoneName = item.querySelector('h3').textContent.toLowerCase();
      if (phoneName.includes(searchQuery)) {
        item.style.display = 'block'; // Show the item if it matches the search query
      } else {
        item.style.display = 'none'; // Hide the item if it doesn't match
      }
    });
  }

  function showSection(section) {
    document.querySelectorAll('.section').forEach(el => el.style.display = 'none');
    document.getElementById(section).style.display = 'block';
  }
