export const logo = new Image("astrolabsLogo.png", "https://i.imgur.com/hPOa5an.png")

register('renderOverlay', function () {
    var logoWidth = 125; // Adjust these values according to your logo size
    var logoHeight = 31.25;
    var padding = 5; // Padding from the corner of the screen

    var logoX = padding;
    var logoY = padding - 2;

    Renderer.drawImage(logo, logoX, logoY, logoWidth, logoHeight);
});
