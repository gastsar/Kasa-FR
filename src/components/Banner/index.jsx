export default function Banner({ text, src }) {
    let bannerText = text !== "";

    return (
        <section className="banner">
            <img alt="" src={src} className="banner__image" />
            {bannerText && <h2 className="banner__title">{text}</h2>}
        </section>
    );
}
