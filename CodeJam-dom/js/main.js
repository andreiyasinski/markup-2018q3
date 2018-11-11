setTimeout(function(){
  let arr = [
  'User notification Notify Some very custom message. May be tips of the day. Example without any arrows and dots.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum orci et magna lobortis tincidunt. Quisque pellentesque bibendum nisl',
  'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain.',
  'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.'
  ]

  if (!window.localStorage.getItem('isClosed')) {
    const div = document.createElement('div');
    div.className = "notification";

    div.innerHTML = '<i class="fas fa-exclamation-triangle attantion"></i><p class="text"> User notification Notify Some very custom message. May be tips of the day. Example without any arrows and dots.</p><i class="fas fa-times close"></i><div class="button"><button class="left"><</button><button class="right">></button></div></br><div><input type="checkbox" id="disable" name="disable"><label for="disable">Disable Tips</label></div>';
    document.body.appendChild(div);

    const disable = document.querySelector('#disable');

    const close = document.querySelector('.close');
    const notification = document.querySelector('.notification');
    const left = document.querySelector('.left');
    const right = document.querySelector('.right');
    const text = document.querySelector('.text');

    let i = 0;
    left.addEventListener('click', e => {
      if( i == 0) {
        text.innerHTML = arr[arr.length - 1];
        i=arr.length - 1;
      } else {
        text.innerHTML = arr[i - 1];
        i--;
      }
    });

    right.addEventListener('click', e => {
      if( i == arr.length - 1) {
        text.innerHTML = arr[0];
        i=0;
      } else {
        text.innerHTML = arr[i + 1];
        i++;
      }
    });

    close.addEventListener('click', e => {
      if(disable.checked) {
        window.localStorage.setItem('isClosed', 'true');
      }
      notification.remove();
    });
  }

}, 5000);
