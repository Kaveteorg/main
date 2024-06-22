const videoElement = document.getElementById('youtubeVideo');
const youtubeVideoId = 'https://youtu.be/mqr_wZxmQK8'; // Replace with your actual YouTube video ID

function createPlayer() {
  const player = new YT.Player(videoElement, {
    height: '315',
    width: '560',
    videoId: youtubeVideoId,
  });
}

const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.onYouTubeIframeAPIReady = createPlayer;
