/**
   *  dataURL to blob
   **/
export const dataURLToBlob = (dataurl) => {
    return new Promise((reslove) => {
        // console.log('datarul', dataurl)
        let arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n)
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n)
        }
        const result = new Blob([u8arr], { type: mime })
        reslove(result);
    })
}