import mergeImages from 'merge-images';

export const ForeCoverRenderer = async (imgsArray) => {
    function importAll(r) {
        let images = {};
        r.keys().map((item) => images[item.replace('./', '')] = r(item));
        return images;
    };
    
    const images = importAll(require.context('./magazineThemeCover', false, /\.(png|jpe?g|svg)$/));

    const imageUrlToBase64 = async (url) => {
        const response = await fetch(url, {
            cache: "no-cache","Content-Type": "application/json",
        });
        const blob = await response.blob();
        return new Promise((onSuccess, onError) => {
            try {
                const reader = new FileReader();
                reader.onload = function () {
                    onSuccess(this.result);
                };
                reader.readAsDataURL(blob);
            } catch (e) {
                onError(e);
            };
        });
    };

    const nextCoveredImagesMap = imgsArray.map(async (item) => {
        const rndInt = Math.floor(Math.random() * 20) + 1
        const aUrl = await imageUrlToBase64(item);
    
        const aImage = new Image();
        aImage.src = aUrl;
    
        return await mergeImages([aUrl, images[`${rndInt}.png`]]);
    });

    return await Promise.all(nextCoveredImagesMap);
};