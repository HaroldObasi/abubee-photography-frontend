export const imgUrlTransform = (width, height, keyword, urlArr) => {
    urlArr = urlArr.split('/')
    width = String(width)
    height = String(height)
    let posIndex = urlArr.indexOf(keyword)
    urlArr.splice(posIndex + 1 , 0, `w_${width}/h_${height}`)
    return urlArr.join('/')
}