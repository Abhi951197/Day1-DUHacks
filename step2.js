
    const messagesContainer = document.getElementById('messages-container');
    const newMessageInput = document.getElementById('new-message');
    let selectedMessageIndex = -1;
    const messages = [];


 
   
      
        function editMessage() {
          if (selectedMessageIndex !== -1) {
            newMessageInput.value = messages[selectedMessageIndex];
          }
        }
      
        function deleteMessage() {
          if (selectedMessageIndex !== -1) {
            messages.splice(selectedMessageIndex, 1);
            selectedMessageIndex = -1;
            displayMessages();
            newMessageInput.value = '';
          }
        }
      
        function updateMessage() {
          if (selectedMessageIndex !== -1) {
            const updatedMessage = newMessageInput.value.trim();
            if (updatedMessage !== '') {
              messages[selectedMessageIndex] = updatedMessage;
              displayMessages();
              newMessageInput.value = '';
              selectedMessageIndex = -1;
            }
          }
        }
      
        function selectMessage(index) {
          selectedMessageIndex = index;
          newMessageInput.value = messages[index];
        }
      
        // Initial display
        displayMessages();
       
     
          const dashImg = document.getElementById('dash-img');
          const leftBar = document.querySelector('.left-bar');
        
          dashImg.addEventListener('click', () => {
            leftBar.classList.toggle('closed');
          });
          function addMessage() {
            const newMessage = newMessageInput.value.trim();
            const messageDateTime = document.getElementById('message-datetime').value;
        
            if (newMessage !== '' && messageDateTime !== '') {
              const messageObj = {
                message: newMessage,
                dateTime: messageDateTime,
              };
        
              messages.push(messageObj);
              newMessageInput.value = '';
              displayMessages();
            }
          }
        
          function displayMessages() {
            messagesContainer.innerHTML = '';
            const currentDate = new Date();
        
            messages.forEach((messageObj, index) => {
              const messageDate = new Date(messageObj.dateTime);
        
              const messageDiv = document.createElement('div');
              messageDiv.className = 'message';
        
              const checkbox = document.createElement('input');
              checkbox.type = 'checkbox';
              checkbox.addEventListener('change', () => handleCheckboxChange(index));
              messageDiv.appendChild(checkbox);
        
              const orderNumber = document.createElement('span');
              orderNumber.textContent = (index + 1) + '. ';
              messageDiv.appendChild(orderNumber);
        
              const messageContent = document.createElement('span');
              messageContent.textContent = messageObj.message;
              messageContent.addEventListener('click', () => selectMessage(index));
              messageDiv.appendChild(messageContent);
        
              const tag = document.createElement('span');
              tag.textContent = messageDate > currentDate ? 'Upcoming' : 'Today';
              tag.className = 'tag ' + (messageDate > currentDate ? 'waiting' : 'approved');
              messageDiv.appendChild(tag);
        
              messagesContainer.appendChild(messageDiv);
            });
          }
       
        
        
       