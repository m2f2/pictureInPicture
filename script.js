const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//select media stream,pass to video element, then play
async function selectMediaStream() {
    try {
        const mediastream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediastream;
        videoElement.onloadedmetadata = () => videoElement.play();

    } catch (error) {
        console.log("error here: ", error);
    }
}

button.addEventListener('click', async() => {
    button.disabled = true;

    await videoElement.requestPictureInPicture();
    //reset
    button.disabled = false;

});

selectMediaStream();