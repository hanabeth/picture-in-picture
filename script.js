const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt user to select a media stream then pass to video element and play
// Wrap in async function because all browsers don't have top level 'await'
async function selectMediaStream() {
  try {
    // wait until user chooses screen to display
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Check error here
    console.log("Error occurred: ", error);
  }
}

button.addEventListener("click", async () => {
  // Disable button
  button.disabled = true;
  // Start picture in picture
  await videoElement.requestPictureInPicture();
  // Reset button
  button.disabled = false;
});

// On load
selectMediaStream();
