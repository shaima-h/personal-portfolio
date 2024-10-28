// takes relative path and construct absolute path of image
export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
};