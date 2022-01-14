
let animales = (() => {
    const url = "http://127.0.0.1:5500/animales.json"

    const getData = async () => {
        const res = await fetch(url);

        return await res.json();

    };

    return { getData };
})();

export default animales;