const loadScript = async (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.src = src
        script.onload = () => {
            resolve(src + " Done")
        }
        document.head.append(script)
    })
}

const main2 = async () => {
    let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js")
    console.log(a)

}

main2()