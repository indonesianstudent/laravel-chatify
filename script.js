function generateMeme(img, topText, bottomText, topTextSize, bottomTextSize) {
    const canvas = document.getElementById('meme-canvas');
    const ctx = canvas.getContext('2d');

    // Size canvas to image
    canvas.width = img.width;
    canvas.height = img.height;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw main image
    ctx.drawImage(img, 0, 0);

    // Text style: white with black borders
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.textAlign = 'center';

    // Top text font size
    let fontSize = canvas.width * topTextSize;
    ctx.font = `${fontSize}px Impact`;
    ctx.lineWidth = fontSize / 20;

    // Draw top text
    ctx.textBaseline = 'top';
    topText.split('\n').forEach((t, i) => {
        ctx.fillText(t, canvas.width / 2, i * fontSize, canvas.width);
        ctx.strokeText(t, canvas.width / 2, i * fontSize, canvas.width);
    });

    // Bottom text font size
    fontSize = canvas.width * bottomTextSize;
    ctx.font = `${fontSize}px Impact`;
    ctx.lineWidth = fontSize / 20;

    // Draw bottom text
    ctx.textBaseline = 'bottom';
    bottomText.split('\n').reverse().forEach((t, i) => { // .reverse() because it's drawing the bottom text from the bottom up
        ctx.fillText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
        ctx.strokeText(t, canvas.width / 2, canvas.height - i * fontSize, canvas.width);
    });
}

window.addEventListener('DOMContentLoaded', (event) => {
    // Initialize variables
    const topTextInput = document.getElementById('top-text');
    const bottomTextInput = document.getElementById('bottom-text');
    const topTextSizeInput = document.getElementById('top-text-size-input');
    const bottomTextSizeInput = document.getElementById('bottom-text-size-input');
    const imageInput = document.getElementById('image-input');
    const generateBtn = document.getElementById('generate-btn');
    // Default/Demo text
    topTextInput.value = 'Enter top value';
    bottomTextInput.value = 'Enter bottom value';

    // Generate button click listener
    const getImg = document.getElementById('meme-canvas');
    const getImgClose = document.getElementById('close');
    generateBtn.addEventListener('click', () => {
        getImgClose.style.display="block";
        getImg.style.display="block";
        // Read image as DataURL using the FileReader API
        const reader = new FileReader();
        reader.onload = () => {
            const img = new Image;
            img.src = reader.result;
            img.onload = () => {
                generateMeme(img, topTextInput.value, bottomTextInput.value,topTextSizeInput.value, bottomTextSizeInput.value);
            };
        };
        reader.readAsDataURL(imageInput.files[0]);
    });
});

const fileName = document.querySelector('.file-name')
function showname(){
    var name = document.getElementById('image-input');
    // alert('Selected file: ' + name.files.item(0).name);
    fileName.innerHTML=name.files.item(0).name;

}

function refreshPage(){
    console.log('on close cick')
    window.location.reload();
} 
